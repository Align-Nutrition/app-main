import { createSupabaseServerClient } from "@/lib/utils/supabase/server";
import { notFound, redirect } from "next/navigation";

export default async function Page() {
  const supabase = createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) notFound();

  const { data: businessUsers } = await supabase
    .from("business_users")
    .select(
      "*, business_id, business: businesses!business_users_business_id_fkey(*)"
    )
    .eq("user_id", user.id);

  if (!businessUsers || !businessUsers.length) redirect(`/business-onboarding`);
  if (businessUsers?.length === 1) {
    if (!businessUsers[0]?.business?.stripe_subscription_id)
      redirect(
        `/business-onboarding/subscription-plan?business_id=${businessUsers[0].business_id}`
      );
    redirect(`/${businessUsers[0].business_id}`);
  }

  return (
    <div className="w-screen h-screen bg-gray-50 grid place-items-center dark:bg-gray-800">
      <ul className="max-w-screen-sm mx-auto w-full flex justify-center items-center gap-6">
        <li>
          <p>thumbnail1</p>
          <p>name</p>
        </li>
        <li>
          <p>thumbnail1</p>
          <p>name</p>
        </li>
      </ul>
    </div>
  );
}
