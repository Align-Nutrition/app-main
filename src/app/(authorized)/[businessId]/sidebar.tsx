"use client";

import { useSidebarContext } from "@/lib/contexts/sidebar-context";
import { Badge, Sidebar, TextInput, theme } from "flowbite-react";
import Link from "next/link";
import { useParams, useSelectedLayoutSegments } from "next/navigation";
import type { ComponentProps, FC, HTMLAttributeAnchorTarget } from "react";
import { HiOutlineDatabase, HiOutlineUsers, HiSearch } from "react-icons/hi";
import { HiOutlineDocument } from "react-icons/hi2";
import { MdOutlineDashboard, MdOutlineFastfood } from "react-icons/md";
import { PiBarbell } from "react-icons/pi";
import { twMerge } from "tailwind-merge";

interface SidebarItem {
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  icon?: FC<ComponentProps<"svg">>;
  label: string;
  items?: SidebarItem[];
  badge?: string;
  segment?: string | null;
}

interface SidebarItemProps extends SidebarItem {}

export function DashboardSidebar() {
  return (
    <>
      <div className="lg:hidden">
        <MobileSidebar />
      </div>
      <div className="hidden lg:block">
        <DesktopSidebar />
      </div>
    </>
  );
}

function DesktopSidebar() {
  const { isCollapsed } = useSidebarContext().desktop;

  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      collapsed={isCollapsed}
      className={twMerge(
        "fixed inset-y-0 left-0 z-20 flex h-full shrink-0 flex-col border-r border-gray-200 pt-16 duration-75 lg:flex dark:border-gray-700",
        isCollapsed && "hidden w-16"
      )}
      id="sidebar"
    >
      <div className="flex flex-col justify-between">
        <div className="py-2">
          <Sidebar.Items>
            <Sidebar.ItemGroup className="mt-0 border-t-0 pb-1 pt-0">
              {pages.map((item) => (
                <SidebarItem key={item.label} {...item} />
              ))}
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </div>
      </div>
      <Sidebar.CTA>
        <div className="mb-3 flex items-center">
          <Badge color="warning">Beta</Badge>
          <button
            aria-label="Close"
            className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
            type="button"
          >
            <svg
              aria-hidden
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
          Preview the new Flowbite dashboard navigation! You can turn the new
          navigation off for a limited time in your profile.
        </div>
        <a
          className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300"
          href="#"
        >
          Turn new navigation off
        </a>
      </Sidebar.CTA>
    </Sidebar>
  );
}

function MobileSidebar() {
  const { isOpen, close } = useSidebarContext().mobile;

  if (!isOpen) return null;

  return (
    <>
      <Sidebar
        aria-label="Sidebar with multi-level dropdown example"
        className={twMerge(
          "fixed inset-y-0 left-0 z-20 hidden h-full shrink-0 flex-col border-r border-gray-200 pt-16 lg:flex dark:border-gray-700",
          isOpen && "flex"
        )}
        id="sidebar"
      >
        <div className="flex h-full flex-col justify-between">
          <div className="py-2">
            <form className="pb-3">
              <TextInput
                icon={HiSearch}
                type="search"
                placeholder="Search"
                required
                size={32}
              />
            </form>
            <Sidebar.Items>
              <Sidebar.ItemGroup className="mt-0 border-t-0 pb-1 pt-0">
                {pages.map((item) => (
                  <SidebarItem key={item.label} {...item} />
                ))}
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </div>
        </div>
      </Sidebar>
      <div
        onClick={close}
        aria-hidden="true"
        className="fixed inset-0 z-10 h-full w-full bg-gray-900/50 pt-16 dark:bg-gray-900/90"
      />
    </>
  );
}

function SidebarItem({
  badge,
  href,
  icon,
  items,
  label,
  segment,
  target,
}: SidebarItemProps) {
  const segments = useSelectedLayoutSegments();
  const { businessId } = useParams();
  const addBusinessIdToHref = (pathHref: string | undefined) =>
    `/${businessId}${pathHref}`;

  const { isCollapsed } = useSidebarContext().desktop;

  if (items) {
    const isOpen = items.some((item) => segments?.includes(item.segment ?? ""));
    return (
      <Sidebar.Collapse
        icon={icon}
        label={label}
        open={isOpen}
        theme={{ list: "space-y-2 py-2  [&>li>div]:w-full" }}
      >
        {items.map((item) => (
          <Sidebar.Item
            key={item.label}
            as={Link}
            href={addBusinessIdToHref(item.href)}
            target={item.target}
            icon={!isCollapsed && item.icon}
            label={item.badge}
            className={twMerge(
              "justify-center [&>*]:font-normal",
              segments?.includes(item.segment ?? "") &&
                "bg-gray-100 dark:bg-gray-700"
            )}
            theme={{
              collapsed: {
                insideCollapse: twMerge(
                  theme.sidebar.item.collapsed.insideCollapse,
                  "pl-0"
                ),
              },
            }}
          >
            {item.label}
          </Sidebar.Item>
        ))}
      </Sidebar.Collapse>
    );
  }

  return (
    <Sidebar.Item
      as={Link}
      href={addBusinessIdToHref(href)}
      target={target}
      icon={icon}
      label={badge}
      className={twMerge(
        (segments?.includes(segment ?? "") ||
          (!segment && segments.length === 0)) &&
          "bg-gray-100 dark:bg-gray-700"
      )}
    >
      {label}
    </Sidebar.Item>
  );
}

const pages: SidebarItem[] = [
  {
    href: "/",
    icon: MdOutlineDashboard,
    label: "Dashboard",
    segment: null,
  },
  {
    href: "/files",
    icon: HiOutlineDocument,
    label: "Files",
    segment: "files",
  },
  {
    icon: HiOutlineUsers,
    label: "Clients",
    items: [
      {
        href: "/clients",
        label: "View All",
        segment: "clients",
      },
      {
        href: "/client-forms",
        label: "Forms",
        segment: "client-forms",
      },
      {
        href: "/client-groups",
        label: "Groups",
        segment: "client-groups",
      },
      {
        href: "/client-inbox",
        label: "Inbox",
        badge: "3",
        segment: "client-inbox",
      },
    ],
  },
  {
    icon: PiBarbell,
    label: "Fitness",
    items: [
      {
        href: "/exercises",
        label: "My Exercises",
        segment: "exercises",
      },
      {
        href: "/workout-templates",
        label: "Workout Templates",
        segment: "workout-templates",
      },
      {
        href: "/workout-programs",
        label: "Workout Programs",
        segment: "workout-programs",
      },
    ],
  },
  {
    icon: MdOutlineFastfood,
    label: "Nutrition",
    items: [
      {
        href: "/meal-templates",
        label: "Meal Templates",
        segment: "meal-templates",
      },
      {
        href: "/recipes",
        label: "My Recipes",
        segment: "recipes",
      },
    ],
  },
  {
    icon: HiOutlineDatabase,
    label: "Libraries",
    items: [
      {
        href: "/meal-template-library",
        label: "Meal Templates",
        segment: "meal-template-library",
      },
      {
        href: "/recipe-library",
        label: "Recipes",
        segment: "recipe-library",
      },
      {
        href: "/workout-template-library",
        label: "Workout Templates",
        segment: "workout-template-library",
      },
      {
        href: "/exercise-library",
        label: "Exercsies",
        segment: "exercise-library",
      },
    ],
  },
];
