"use server";

import { supabaseServerClient } from "@/lib/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const { email, password } = Object.fromEntries(formData) as {
    email: string;
    password: string;
  };

  const { error } = await supabaseServerClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}
