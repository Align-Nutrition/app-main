"use client";

import { Dropdown, Tabs, theme } from "flowbite-react";
import {
  useParams,
  useRouter,
  useSelectedLayoutSegment,
} from "next/navigation";
import { AiOutlineApple } from "react-icons/ai";
import { HiOutlineCalendar, HiOutlineChartPie } from "react-icons/hi";
import { IoBarbell } from "react-icons/io5";
import { MdOutlineImage } from "react-icons/md";
import { RxActivityLog } from "react-icons/rx";
import { TbRulerMeasure } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

export default function LayoutSidebar() {
  const segment = useSelectedLayoutSegment();
  const router = useRouter();
  const { businessId, clientId } = useParams();
  const tabs = [
    { title: "Summary", icon: HiOutlineChartPie, segment: null },
    { title: "Measurements", icon: TbRulerMeasure, segment: "measurements" },
    { title: "Nutrition", icon: AiOutlineApple, segment: "nutrition" },
    { title: "Fitness", icon: IoBarbell, segment: "fitness" },
    { title: "Photos", icon: MdOutlineImage, segment: "photos" },
    { title: "Activity", icon: RxActivityLog, segment: "activity" },
  ];

  function navigateToSegment(tabIndex: number) {
    const segmentPath = tabs[tabIndex].segment;
    const path = `/${businessId}/clients/${clientId}/assessments/id/${
      segmentPath ? `/${segmentPath}` : ""
    }`;
    router.push(path);
  }

  return (
    <>
      <div className="space-y-2 lg:sticky lg:top-32">
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
          <Dropdown
            inline
            label={
              <>
                <span className="sr-only">Open assessment menu</span>
                <div className="mr-2 flex items-center gap-3.5 w-full">
                  <HiOutlineCalendar className="w-5 h-5 dark:text-gray-200" />
                  <div className="text-left">
                    <div className="font-semibold leading-none text-gray-900 dark:text-gray-200">
                      {new Date().toLocaleDateString("en-us", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>
                <svg
                  className="h-3 w-3 text-gray-500 dark:text-gray-400"
                  aria-hidden
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5m0 6 4 4 4-4"
                  />
                </svg>
              </>
            }
            theme={{
              arrowIcon: "hidden",
              inlineWrapper: twMerge(
                theme.dropdown.inlineWrapper,
                "p-4 bg-white hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 w-full"
              ),
            }}
          >
            <Dropdown.Header>Assessment Date</Dropdown.Header>
            <Dropdown.Item>
              {new Date().toLocaleDateString("en-us")}
            </Dropdown.Item>
            <Dropdown.Item>
              {new Date().toLocaleDateString("en-us")}
            </Dropdown.Item>
            <Dropdown.Item>
              {new Date().toLocaleDateString("en-us")}
            </Dropdown.Item>
          </Dropdown>

          <Dropdown
            outline
            inline
            label="Summary"
            arrowIcon
            theme={{
              inlineWrapper: twMerge(
                theme.dropdown.inlineWrapper,
                "p-4 bg-white hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 w-full lg:hidden"
              ),
            }}
          >
            {tabs.map((tab) => (
              <Dropdown.Item icon={tab.icon} key={tab.title}>
                {tab.title}
              </Dropdown.Item>
            ))}
          </Dropdown>
        </div>
        <Tabs
          theme={{
            tablist: {
              base: "hidden lg:grid space-y space-y-2 text-sm font-medium text-gray-500 dark:text-gray-400 w-full",
              styles: {
                default: "",
              },
              tabitem: {
                base: "flex items-center p-4 font-medium first:ml-0 focus:outline-none focus:ring-4 focus:ring-cyan-300 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 bg-white dark:text-gray-200 dark:bg-gray-800",
                styles: {
                  default: {
                    base: "rounded-t-none",
                  },
                },
              },
            },
          }}
          onActiveTabChange={navigateToSegment}
        >
          {tabs.map((tab) => (
            <Tabs.Item
              active={segment === tab.segment}
              key={tab.title}
              icon={() => <tab.icon className="mr-2 h-5 w-5" />}
              title={tab.title}
            />
          ))}
        </Tabs>
      </div>
    </>
  );
}
