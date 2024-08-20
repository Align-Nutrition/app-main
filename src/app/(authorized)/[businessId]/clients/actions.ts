"use server";

import generateActionResponse, {
  ActionResponseType,
} from "@/lib/utils/generate-action-response";
import { createSupabaseServerClient } from "@/lib/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function handleInviteClient(
  prevState: ActionResponseType,
  formData: FormData
): Promise<ActionResponseType> {
  const fields = Object.fromEntries(formData) as {
    full_name: string;
    email: string;
    trainer_id: string;
    business_id: string;
  };

  if (!fields.business_id)
    return generateActionResponse({
      error: "No business provided.",
    });

  const supabase = createSupabaseServerClient();

  // Validate the email does not belong to an existing business user
  const { data: profile } = await supabase
    .rpc("get_user_id_from_auth_users", {
      lookup_email: fields.email,
    })
    .maybeSingle();

  if (profile) {
    const { data: businessUsers } = await supabase
      .from("business_users")
      .select("id")
      .match({ user_id: profile.id, business_id: fields.business_id });

    if (businessUsers && businessUsers.length > 0) {
      return generateActionResponse({
        error:
          "This client already exists for this business. Please invite a different client.",
      });
    }
  }

  // Validate that this business has not already sent an invite to this email
  const { data: foundInvite } = await supabase
    .from("business_client_invites")
    .select("id")
    .match({ business_id: fields.business_id, email: fields.email });

  if (foundInvite && foundInvite.length > 0) {
    return generateActionResponse({
      error: "An invite has already been sent to this user. ",
    });
  }

  // Passed validations
  const { error } = await supabase
    .from("business_client_invites")
    .insert({ ...fields, ...(profile ? { user_id: profile.id } : {}) });
  if (error) return generateActionResponse({ error: error.message });

  // TODO: Send invite to client

  revalidatePath("/[businessId]/clients", "page");
  return generateActionResponse({
    success: true,
    message: "Sent invite to client.",
  });
}
