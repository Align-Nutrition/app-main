import acronymize from "@/lib/utils/acronymize";
import { createSupabaseServerClient } from "@/lib/utils/supabase/server";
import { Avatar } from "flowbite-react";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";
import OnboardingSteps from "./onboarding-steps";

type ClientOnboardingLayoutType = PropsWithChildren & {
  params: { businessClientInviteId: string };
};
export default async function Layout({
  children,
  params: { businessClientInviteId },
}: ClientOnboardingLayoutType) {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("business_client_invites")
    .select(
      "*, business: business_client_invites_business_id_fkey(*), trainer: business_client_invites_trainer_id_fkey1(*)"
    )
    .eq("id", businessClientInviteId)
    .limit(1)
    .maybeSingle();

  if (error) throw error;
  if (!data) notFound();

  return (
    <section className="bg-white px-4 py-8 dark:bg-gray-900 lg:py-0 sm:px-0 relative">
      <div className="lg:flex relative">
        <div className="hidden w-full max-w-md bg-cyan-600 p-12 lg:block lg:h-screen lg:sticky lg:top-0">
          <div className="mb-6 w-full text-white">
            <Avatar placeholderInitials={acronymize(data.business?.name)}>
              {data.business?.name}
            </Avatar>
          </div>
          <div className="block rounded-lg bg-cyan-500 p-8 text-white">
            <h2 className="mb-1 text-2xl font-semibold">Client Onboarding</h2>
            <p className="text-cyan-100 sm:text-lg">
              Invited by {data.trainer?.full_name}
            </p>
          </div>
        </div>
        <div className="mx-auto flex items-center md:w-[42rem] md:px-8 xl:px-0 lg:py-6">
          <div className="w-full">
            <OnboardingSteps />
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
