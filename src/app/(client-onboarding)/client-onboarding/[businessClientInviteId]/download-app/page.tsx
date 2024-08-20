import { createSupabaseServerClient } from "@/lib/utils/supabase/server";
import { Button } from "flowbite-react";
import { notFound } from "next/navigation";

export default async function Page({
  params: { businessClientInviteId },
}: {
  params: { businessClientInviteId: string };
}) {
  const supabase = createSupabaseServerClient();
  const { data } = await supabase
    .from("business_client_invites")
    .select("business_id")
    .eq("id", businessClientInviteId)
    .limit(1)
    .maybeSingle();

  if (!data?.business_id) notFound();

  const { data: business } = await supabase
    .from("businesses")
    .select("*")
    .eq("id", data.business_id)
    .limit(1)
    .maybeSingle();

  return (
    <div className="grid gap-6">
      <h2 className="mb-4 text-lg text-gray-500 dark:text-gray-400">
        Thanks for completing your onboarding. Download the mobile app to start
        tracking your progress.
      </h2>
      <div className="grid gap-4 grid-cols-2">
        <div className="grid gap-2">
          <span className="block text-sm font-medium text-gray-900 dark:text-white">
            App Store
          </span>
          {business?.ios_app_store_url && <Button>Download</Button>}
        </div>
        <div className="grid gap-2">
          <span className="block text-sm font-medium text-gray-900 dark:text-white">
            Google Play
          </span>
          {business?.google_play_store_url && <Button>Download</Button>}
        </div>
      </div>
    </div>
  );
}
