import { stripe } from "@/lib/utils/stripe";
import { createSupabaseServerClient } from "@/lib/utils/supabase/server";
import { Button } from "flowbite-react";
import { redirect } from "next/navigation";

type BusinessOnboardingConfirmationPageTypes = {
  searchParams: {
    business_id: string;
    session_id: string;
  };
};

export default async function Page({
  searchParams: { business_id: businessId, session_id: sessionId },
}: BusinessOnboardingConfirmationPageTypes) {
  if (!sessionId) redirect("/");

  const session = await stripe.checkout.sessions.retrieve(sessionId);
  if (!session || session.status === "open") redirect("/");

  const supabase = createSupabaseServerClient();
  const { error } = await supabase
    .from("businesses")
    .update({ stripe_subscription_id: session.subscription as string })
    .eq("id", businessId);
  if (error) throw error;

  return (
    <>
      <svg
        className="mb-4 h-12 w-12 text-green-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
      <h1 className="mb-2 text-2xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
        Congratulations!
      </h1>
      <p className="mb-4 text-gray-500 dark:text-gray-400 md:mb-6">
        You have successfully setup your account.
      </p>
      <Button href={`/${businessId}`} className="w-full py-2">
        Get Started
      </Button>
    </>
  );
}
