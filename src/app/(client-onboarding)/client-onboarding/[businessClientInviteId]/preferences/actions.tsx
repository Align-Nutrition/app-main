"use server";

import generateActionResponse, {
  ActionResponseType,
} from "@/lib/utils/generate-action-response";
import { createSupabaseServerClient } from "@/lib/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function handleUpdateClientPreferences(
  prevState: ActionResponseType,
  formData: FormData
): Promise<ActionResponseType> {
  const supabase = createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return generateActionResponse({
      error: "No user authenticated. Sign in and try again.",
    });
  }

  const { error: updateUserPreferencesError } = await supabase
    .from("user_preferences")
    .update({
      food_likes: formData.getAll("food_likes") as string[],
      food_dislikes: formData.getAll("food_dislikes") as string[],
      food_allergies: formData.getAll("food_allergies") as string[],
      measurements: formData.getAll("measurements") as string[],
    })
    .eq("user_id", user.id);

  if (updateUserPreferencesError) {
    return generateActionResponse({
      error: updateUserPreferencesError.message,
    });
  }

  revalidatePath("/", "layout");
  redirect(
    `/client-onboarding/${formData.get(
      "business_client_invite_id"
    )}/download-app`
  );

  return generateActionResponse({ success: true });
}
