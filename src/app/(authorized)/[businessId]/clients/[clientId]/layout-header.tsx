"use client";

import { Tables } from "@/lib/types/supabase";
import {
  Breadcrumb,
  BreadcrumbItem,
  Dropdown,
  Tabs,
  theme,
} from "flowbite-react";
import {
  useParams,
  useRouter,
  useSelectedLayoutSegment,
} from "next/navigation";
import { AiOutlineSchedule } from "react-icons/ai";
import { BsPersonGear } from "react-icons/bs";
import { CiCircleList } from "react-icons/ci";
import { HiHome, HiOutlineChartBar, HiOutlineChartPie } from "react-icons/hi";
import { MdOutlineDashboard, MdOutlineDynamicForm } from "react-icons/md";
import { twMerge } from "tailwind-merge";

type LayoutProps = {
  client: Tables<"profiles">;
};

export default function LayoutHeader({ client }: LayoutProps) {
  const segment = useSelectedLayoutSegment();
  const router = useRouter();
  const { businessId } = useParams();

  const clientTabs = [
    {
      title: "Dashboard",
      icon: MdOutlineDashboard,
      segment: null,
    },
    {
      title: "Assessments",
      icon: HiOutlineChartPie,
      segment: "assessments",
    },
    {
      title: "Habits",
      icon: CiCircleList,
      segment: "habits",
    },
    {
      title: "Forms",
      icon: MdOutlineDynamicForm,
      segment: "forms",
    },
    {
      title: "Schedule",
      icon: AiOutlineSchedule,
      segment: "schedule",
    },
    {
      title: "Reports",
      icon: HiOutlineChartBar,
      segment: "reports",
    },
    {
      title: "Settings",
      icon: BsPersonGear,
      segment: "settings",
    },
  ];

  const segmentTitle = clientTabs.find(
    (clientTab) => clientTab.segment === segment
  )?.title;

  function navigateToSegment(tabIndex: number) {
    const segmentPath = clientTabs[tabIndex].segment;
    const path = `/${businessId}/clients/${client.id}/${
      segmentPath ? `/${segmentPath}` : ""
    }`;
    router.push(path);
  }

  return (
    <>
      <div className=" bg-white p-4 dark:bg-gray-800 relative">
        <Breadcrumb className="mb-5">
          <BreadcrumbItem href="/">
            <div className="flex items-center gap-x-3">
              <HiHome className="text-xl" />
            </div>
          </BreadcrumbItem>
          <BreadcrumbItem href={`/${businessId}/clients`}>
            Clients
          </BreadcrumbItem>
          <BreadcrumbItem>{client.full_name}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 bg-white px-4 pb-4 dark:border-gray-700 dark:bg-gray-800">
        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
          {segmentTitle}
        </h1>
        <div className="z-20">
          <Dropdown
            label="New"
            theme={{
              floating: {
                base: twMerge(theme.dropdown.floating.base, "w-48"),
                target: "w-full",
              },
            }}
          >
            <Dropdown.Item>Assessment</Dropdown.Item>
            <Dropdown.Item>Habit</Dropdown.Item>
            <Dropdown.Item>Form</Dropdown.Item>
            <Dropdown.Item>Appointment</Dropdown.Item>
            <Dropdown.Item>Charge</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
      <Tabs
        className="bg-white dark:bg-gray-800 gap-0 lg:sticky lg:top-16 z-10"
        aria-label="Client Menu"
        style="underline"
        onActiveTabChange={navigateToSegment}
      >
        {clientTabs.map((clientTab) => (
          <Tabs.Item
            key={clientTab.title}
            active={segment === clientTab.segment}
            title={clientTab.title}
            icon={clientTab.icon}
          />
        ))}
      </Tabs>
    </>
  );
}
