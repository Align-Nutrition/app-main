import { SidebarProvider } from "@/lib/contexts/sidebar-context";
import { sidebarCookie } from "@/lib/utils/sidebar-cookie";
import { supabaseServerClient } from "@/lib/utils/supabase/server";
import { redirect } from "next/navigation";
import type { PropsWithChildren } from "react";
import { LayoutContent } from "./layout-content";
import { DashboardNavbar } from "./navbar";
import { DashboardSidebar } from "./sidebar";

export default async function DashboardLayout(props: PropsWithChildren) {
  // const supabase = supabaseServerClient();

  // const { data, error } = await supabaseServerClient.auth.getUser();
  // if (error || !data?.user) {
  //   redirect("/sign-in");
  // }
  return (
    <SidebarProvider initialCollapsed={sidebarCookie.get().isCollapsed}>
      <DashboardNavbar />
      <div className="mt-16 flex items-start h-full">
        <DashboardSidebar />
        <LayoutContent>{props.children}</LayoutContent>
      </div>
    </SidebarProvider>
  );
}
