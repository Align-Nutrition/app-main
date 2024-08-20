import { createSupabaseServerClient } from "@/lib/utils/supabase/server";
import ClientOnboardingForm from "./form";
import { notFound, redirect } from "next/navigation";

type ClientOnboardingPageType = {
  params: { businessClientInviteId: string };
};

export default async function Page(props: ClientOnboardingPageType) {
  const {
    params: { businessClientInviteId },
  } = props;
  const supabase = createSupabaseServerClient();

  const { data } = await supabase
    .from("business_client_invites")
    .select(
      "*, business: business_client_invites_business_id_fkey(*), trainer: business_client_invites_trainer_id_fkey1(*)"
    )
    .eq("id", businessClientInviteId)
    .limit(1)
    .maybeSingle();

  if (!data) notFound();

  const {
    data: { user: signedInUser },
  } = await supabase.auth.getUser();

  if (data.user_id || signedInUser) {
    if (signedInUser && signedInUser.id === data.user_id) {
      redirect(`/client-onboarding/${businessClientInviteId}/preferences`);
    } else if (!signedInUser) {
      redirect(`/sign-in`);
    } else {
      notFound();
    }
  }

  return <ClientOnboardingForm data={data} />;
}
