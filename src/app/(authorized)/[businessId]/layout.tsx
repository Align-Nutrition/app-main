import { BusinessContextProvider } from "@/lib/contexts/business-context";
import { SidebarProvider } from "@/lib/contexts/sidebar-context";
import { sidebarCookie } from "@/lib/utils/sidebar-cookie";
import { createSupabaseServerClient } from "@/lib/utils/supabase/server";
import type { ReactNode } from "react";
import { LayoutContent } from "./layout-content";
import { DashboardNavbar } from "./navbar";
import { DashboardSidebar } from "./sidebar";
import { notFound, redirect } from "next/navigation";

type DashboardLayoutType = {
  params: { businessId: string };
  children: ReactNode;
};

export default async function DashboardLayout(props: DashboardLayoutType) {
  const {
    params: { businessId },
  } = props;
  const supabase = createSupabaseServerClient();
  const { data: business, error: fetchBusinessError } = await supabase
    .from("businesses")
    .select("*")
    .eq("id", businessId)
    .limit(1)
    .maybeSingle();

  if (!business) notFound();
  if (fetchBusinessError) throw new Error(fetchBusinessError);

  // redirect to subscription plan selection page if no subscription exists.
  // we should also check the state of subscription and redirect if needed
  // ideally a webhook will clear the business.stripe_subscription_id when a subscription is cancelled
  if (!business.stripe_subscription_id)
    redirect(
      `/business-onboarding/subscription-plan?business_id=${business.id}`
    );

  return (
    <BusinessContextProvider business={business}>
      <SidebarProvider initialCollapsed={sidebarCookie.get().isCollapsed}>
        <DashboardNavbar />
        <div className="mt-16 flex items-start h-full">
          <DashboardSidebar />
          <LayoutContent>{props.children}</LayoutContent>
        </div>
      </SidebarProvider>
    </BusinessContextProvider>
  );
}
