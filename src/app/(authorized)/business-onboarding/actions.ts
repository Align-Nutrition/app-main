"use server";

import { createSupabaseServerClient } from "@/lib/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type StateType = {
  error: null | string;
};
export async function handleBusinessInfoFormSubmit(
  state: StateType,
  formData: FormData
) {
  const supabase = createSupabaseServerClient();
  const fields = Object.fromEntries(formData);

  // create new business
  const insertBusinessContract = {
    name: fields.name as string,
    email: fields.email as string,
    country: fields.country as string,
    // logo: fields.logo,
    phone: fields.phone as string,
  };

  const { data: business, error: insertBusinessError } = await supabase
    .from("businesses")
    .insert(insertBusinessContract)
    .select("id")
    .limit(1)
    .single();

  if (!business || insertBusinessError) {
    return {
      error: insertBusinessError?.message || "No business created. Try again.",
    };
  }

  const { error: addUserToBusinessUsersError } = await supabase
    .from("business_users")
    .insert({
      role: "owner",
      business_id: business.id,
      user_id: fields.user_id as string,
    });

  if (addUserToBusinessUsersError) {
    return { error: addUserToBusinessUsersError.message };
  }

  revalidatePath("/", "layout");
  redirect(`/business-onboarding/subscription-plan?business_id=${business.id}`);

  return { error: null };
}
