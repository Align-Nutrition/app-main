"use server";

import { supabaseServerClient } from "@/lib/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signup(formData: FormData) {
  const { email, password } = Object.fromEntries(formData) as {
    email: string;
    password: string;
  };

  const { data, error } = await supabaseServerClient.auth.signUp({
    email,
    password,
  });

  if (error) {
    return {
      error,
    };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}
