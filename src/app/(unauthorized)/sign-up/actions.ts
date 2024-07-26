"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/utils/supabase/server";

export async function signup(prevState: any, formData: FormData) {
  const supabase = createClient();
  const { email, password } = Object.fromEntries(formData) as {
    email: string;
    password: string;
  };

  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    return {
      error,
    };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}
