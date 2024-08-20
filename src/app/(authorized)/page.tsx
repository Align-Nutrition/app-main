import acronymize from "@/lib/utils/acronymize";
import { createSupabaseServerClient } from "@/lib/utils/supabase/server";
import { Avatar } from "flowbite-react";
import Link from "next/link";
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
      <ul className="max-w-screen-md mx-auto w-full flex justify-center items-center gap-6">
        {businessUsers.map((businessUser) => (
          <Link
            href={`/${businessUser.business_id}`}
            key={businessUser.business_id}
          >
            <li className="grid gap-2 border border-transparent p-4 rounded hover:border-gray-200 hover:bg-gray-100">
              <Avatar
                bordered
                color="cyan"
                size="lg"
                rounded
                placeholderInitials={acronymize(businessUser.business?.name)}
              >
                <div className="space-y-1 font-medium dark:text-white">
                  <div>{businessUser.business?.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Joined in{" "}
                    {new Date(
                      businessUser.business?.created_at ?? ""
                    ).toLocaleDateString()}
                  </div>
                </div>
              </Avatar>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
