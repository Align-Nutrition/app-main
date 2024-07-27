import { BusinessOnboardingContextProvider } from "@/lib/contexts/business-onboarding-context";
import { PropsWithChildren } from "react";
import OnboardingSteps from "./onboarding-steps";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <BusinessOnboardingContextProvider>
      <section className="grid place-items-center py-8 dark:bg-gray-900 lg:py-0 px-4 lg:px-0 h-screen">
        <div className="mx-auto flex items-center md:w-[42rem] md:px-8 xl:px-0 lg:py-6">
          <div className="w-full">
            <OnboardingSteps />
            {children}
          </div>
        </div>
      </section>
    </BusinessOnboardingContextProvider>
  );
}
