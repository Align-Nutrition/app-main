import { UserContextProvider } from "@/lib/contexts/user-context";
import { createSupabaseServerClient } from "@/lib/utils/supabase/server";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";

export default async function Layout({ children }: PropsWithChildren) {
  const supabase = createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) notFound();

  const fetchProfile = supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .limit(1)
    .maybeSingle();
  const fetchUserPreferences = supabase
    .from("user_preferences")
    .select("*")
    .eq("user_id", user.id)
    .limit(1)
    .maybeSingle();
  const fetchBusinessUsers = supabase
    .from("business_users")
    .select("*")
    .eq("user_id", user.id);

  const [
    { data: profile },
    { data: userPreferences },
    { data: businessUsers },
  ] = await Promise.all([
    fetchProfile,
    fetchUserPreferences,
    fetchBusinessUsers,
  ]);

  return (
    <UserContextProvider
      businessUsers={businessUsers}
      profile={profile}
      userPreferences={userPreferences}
    >
      {children}
    </UserContextProvider>
  );
}
