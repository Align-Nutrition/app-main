import { PropsWithChildren } from "react";
import LayoutHeader from "./layout-header";
import { createSupabaseServerClient } from "@/lib/utils/supabase/server";
import { notFound } from "next/navigation";

type LayoutProps = PropsWithChildren<{
  params: { clientId: string };
}>;

export default async function Layout({
  children,
  params: { clientId },
}: LayoutProps) {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", clientId)
    .limit(1)
    .maybeSingle();

  if (!data) notFound();
  if (error) throw error;

  return (
    <>
      <LayoutHeader client={data} />
      {children}
    </>
  );
}
