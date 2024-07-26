"use client";

import { useSidebarContext } from "@/lib/contexts/sidebar-context";
import { Badge, Sidebar, TextInput, theme } from "flowbite-react";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import type { ComponentProps, FC, HTMLAttributeAnchorTarget } from "react";
import { GiFruitBowl } from "react-icons/gi";
import {
  HiOutlineDatabase,
  HiOutlineMailOpen,
  HiOutlineTable,
  HiOutlineTemplate,
  HiOutlineUserGroup,
  HiOutlineUsers,
  HiSearch,
} from "react-icons/hi";
import { HiOutlineDocument } from "react-icons/hi2";
import { IoRestaurantOutline } from "react-icons/io5";
import {
  MdOutlineDashboard,
  MdOutlineDynamicForm,
  MdOutlineFastfood,
} from "react-icons/md";
import { PiBarbell } from "react-icons/pi";
import { twMerge } from "tailwind-merge";

interface SidebarItem {
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  icon?: FC<ComponentProps<"svg">>;
  label: string;
  items?: SidebarItem[];
  badge?: string;
}

interface SidebarItemProps extends SidebarItem {
  segment: string | null;
}

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
  const segment = useSelectedLayoutSegment();
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
                <SidebarItem key={item.label} {...item} segment={segment} />
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
  const segment = useSelectedLayoutSegment();
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
                  <SidebarItem key={item.label} {...item} segment={segment} />
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
  href,
  target,
  icon,
  label,
  items,
  badge,
  segment,
}: SidebarItemProps) {
  const pathname = usePathname();
  const { isCollapsed } = useSidebarContext().desktop;
  if (items) {
    const isOpen = items.some((item) => pathname?.startsWith(item.href ?? ""));
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
            href={item.href}
            target={item.target}
            icon={!isCollapsed && item.icon}
            label={item.badge}
            className={twMerge(
              "justify-center [&>*]:font-normal",
              segment &&
                pathname?.startsWith(item.href ?? "") &&
                "bg-gray-100 dark:bg-gray-700"
            )}
            theme={{
              collapsed: {
                insideCollapse: twMerge(
                  theme.sidebar.item.collapsed.insideCollapse,
                  "pl-4"
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
      href={href}
      target={target}
      icon={icon}
      label={badge}
      className={twMerge(
        pathname?.startsWith(href ?? "") && "bg-gray-100 dark:bg-gray-700"
      )}
    >
      {label}
    </Sidebar.Item>
  );
}

const pages: SidebarItem[] = [
  { href: "/", icon: MdOutlineDashboard, label: "Dashboard" },
  { href: "/files", icon: HiOutlineDocument, label: "Files" },
  {
    icon: HiOutlineUsers,
    label: "Clients",
    items: [
      { href: "/clients", label: "List", icon: HiOutlineTable },
      { href: "/client-forms", label: "Forms", icon: MdOutlineDynamicForm },
      { href: "/client-groups", label: "Groups", icon: HiOutlineUserGroup },
      {
        href: "/client-inbox",
        label: "Inbox",
        badge: "3",
        icon: HiOutlineMailOpen,
      },
    ],
  },
  {
    icon: PiBarbell,
    label: "Fitness",
    items: [
      { href: "/exercises", label: "My Exercises", icon: HiOutlineTable },
      {
        href: "/exercise-library",
        label: "Exercsie Library",
        icon: HiOutlineDatabase,
      },
      {
        href: "/workout-templates",
        label: "Workout Templates",
        icon: HiOutlineTable,
      },
      {
        href: "/workout-template-library",
        label: "Template Library",
        icon: HiOutlineDatabase,
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
        icon: HiOutlineTable,
      },
      {
        href: "/meal-template-library",
        label: "Template Library",
        icon: HiOutlineDatabase,
      },
      { href: "/recipes", label: "My Recipes", icon: HiOutlineTable },
      {
        href: "/recipe-library",
        label: "Recipe Library",
        icon: HiOutlineDatabase,
      },
    ],
  },
];
