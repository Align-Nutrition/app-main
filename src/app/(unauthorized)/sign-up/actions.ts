"use server";

import { createSupabaseServerClient } from "@/lib/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signup(formData: FormData) {
  const supabase = createSupabaseServerClient();
  const { email, password } = Object.fromEntries(formData) as {
    email: string;
    password: string;
  };

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return {
      error,
    };
  }

  revalidatePath("/", "layout");
  redirect("/");
}
