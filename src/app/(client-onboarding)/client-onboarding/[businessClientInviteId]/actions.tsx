"use server";

import generateActionResponse, {
  ActionResponseType,
} from "@/lib/utils/generate-action-response";
import { createSupabaseServerClient } from "@/lib/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createClientAccountAndSignIn(
  prevState: ActionResponseType,
  formData: FormData
): Promise<ActionResponseType> {
  const supabase = createSupabaseServerClient();
  const fields = Object.fromEntries(formData);

  // Check for business client invite id
  if (!fields.business_client_invite_id)
    return generateActionResponse({
      error: "Missing business client invite id.",
    });

  // Check for business id
  if (!fields.business_id)
    return generateActionResponse({ error: "Missing business id." });

  // Check for trainer id
  if (!fields.trainer_id)
    return generateActionResponse({ error: "Missing trainer id." });

  // Check for matching password
  if (fields.password !== fields.confirm_password)
    return generateActionResponse({
      error:
        "Passwords do not match. Please update passwords so that they match.",
    });

  // Sign up new client
  const { data, error: signUpError } = await supabase.auth.signUp({
    email: fields.email as string,
    password: fields.password as string,
    options: {
      data: {
        full_name: fields.full_name,
        avatar_url: fields.avatar_url,
      },
    },
  });

  if (signUpError)
    return generateActionResponse({ error: signUpError.message });

  // Check for user returned from sign up
  if (!data.user) return generateActionResponse({ error: "No user." });

  // Update business client invite with user_id
  const { error: businessClientInviteUpdateError } = await supabase
    .from("business_client_invites")
    .update({ user_id: data.user.id })
    .eq("id", fields.business_client_invite_id);

  if (businessClientInviteUpdateError)
    return generateActionResponse({
      error: businessClientInviteUpdateError.message,
    });

  // Update profile with additional fields
  const { error: profileUpdateError } = await supabase
    .from("profiles")
    .update({
      ...(fields.birthday ? { birthday: fields.birthday as string } : {}),
      country: fields.country as string,
      height_inches: Number(fields.height_inches),
      phone: fields.phone as string,
    })
    .eq("id", data.user.id);

  if (profileUpdateError)
    return generateActionResponse({
      error: profileUpdateError.message,
    });

  // Add user to business as a client
  const { error: insertBusinessUserError } = await supabase
    .from("business_users")
    .insert({
      user_id: data.user.id,
      trainer_id: fields.trainer_id as string,
      business_id: fields.business_id as string,
      role: "client",
    });

  if (insertBusinessUserError)
    return generateActionResponse({
      error: insertBusinessUserError.message,
    });

  // Sign in with user credentials
  const { error: signInWithPasswordError } =
    await supabase.auth.signInWithPassword({
      email: fields.email as string,
      password: fields.password as string,
    });

  if (signInWithPasswordError)
    return generateActionResponse({
      error: signInWithPasswordError.message,
    });

  revalidatePath("/", "layout");
  redirect(
    `/client-onboarding/${fields.business_client_invite_id}/preferences`
  );

  return generateActionResponse({ success: true });
}
