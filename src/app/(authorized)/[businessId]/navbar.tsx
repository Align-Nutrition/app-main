"use client";

import { useBusinessContext } from "@/lib/contexts/business-context";
import { useSidebarContext } from "@/lib/contexts/sidebar-context";
import { useUserContext } from "@/lib/contexts/user-context";
import { useMediaQuery } from "@/lib/hooks/use-media-query";
import { supabaseClient } from "@/lib/utils/supabase/client";
import {
  Avatar,
  DarkThemeToggle,
  Dropdown,
  Label,
  Navbar,
  TextInput,
  Tooltip,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import { HiBell, HiEye, HiMenuAlt1, HiSearch, HiX } from "react-icons/hi";

export function DashboardNavbar() {
  const { businessUsers } = useUserContext();
  const { business } = useBusinessContext();
  const router = useRouter();
  const sidebar = useSidebarContext();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  function handleToggleSidebar() {
    if (isDesktop) {
      sidebar.desktop.toggle();
    } else {
      sidebar.mobile.toggle();
    }
  }

  return (
    <Navbar
      fluid
      className="fixed top-0 z-30 w-full border-b border-gray-200 bg-white p-0 sm:p-0 dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="w-full p-3 pr-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={handleToggleSidebar}
              className="mr-3 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Toggle sidebar</span>
              {/* mobile */}
              <div className="lg:hidden">
                {sidebar.mobile.isOpen ? (
                  <HiX className="h-6 w-6" />
                ) : (
                  <HiMenuAlt1 className="h-6 w-6" />
                )}
              </div>
              {/* desktop */}
              <div className="hidden lg:block">
                <HiMenuAlt1 className="h-6 w-6" />
              </div>
            </button>
            <Dropdown
              inline
              label={
                <>
                  <span className="sr-only">Open user menu</span>
                  <div className="flex items-center max-w-64">
                    <Image
                      className="mr-3 h-8 aspect-square"
                      alt=""
                      src="/images/logo.svg"
                      width={32}
                      height={32}
                    />
                    <div className="text-left">
                      <div className="mb-0.5 font-semibold leading-none text-gray-900 dark:text-white">
                        {business?.name}
                      </div>
                    </div>
                  </div>
                  <svg
                    className="ml-2 h-3 w-3 text-gray-500 dark:text-gray-400"
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
              }}
            >
              {businessUsers?.flatMap((businessUser) =>
                businessUser?.business_id === business?.id ? (
                  []
                ) : (
                  <Fragment key={businessUser?.business_id}>
                    <Dropdown.Item
                      onClick={() =>
                        router.push(`/${businessUser?.business_id}`)
                      }
                    >
                      <Image
                        className="mr-3 h-8 aspect-square"
                        alt=""
                        src="/images/logo.svg"
                        width={32}
                        height={32}
                      />
                      <div className="text-left font-semibold leading-none text-gray-900 dark:text-white">
                        {businessUser?.business.name}
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                  </Fragment>
                )
              )}
              <Dropdown.Item
                onClick={() => router.push(`/business-onboarding`)}
              >
                Add new business
              </Dropdown.Item>
            </Dropdown>
            <form className="hidden lg:block lg:pl-2">
              <Label htmlFor="search" className="sr-only">
                Search
              </Label>
              <TextInput
                className="w-full lg:w-96"
                icon={HiSearch}
                id="search"
                name="search"
                placeholder="Search"
                required
                type="search"
              />
            </form>
          </div>
          <div className="flex items-center lg:gap-3">
            <div className="flex items-center">
              <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 lg:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700">
                <span className="sr-only">Search</span>
                <HiSearch className="h-6 w-6" />
              </button>
              <NotificationBellDropdown />

              <div className="hidden dark:block">
                <Tooltip content="Toggle light mode">
                  <DarkThemeToggle />
                </Tooltip>
              </div>
              <div className="dark:hidden">
                <Tooltip content="Toggle dark mode">
                  <DarkThemeToggle />
                </Tooltip>
              </div>
              <div className="ml-3 flex items-center">
                <UserDropdown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
}

function NotificationBellDropdown() {
  return (
    <Dropdown
      className="rounded"
      arrowIcon={false}
      inline
      label={
        <span className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <span className="sr-only">Notifications</span>
          <HiBell className="h-6 w-6" />
        </span>
      }
      theme={{ content: "py-0" }}
    >
      <div className="max-w-sm">
        <div className="block rounded-t-xl bg-gray-50 px-4 py-2 text-center text-base font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          Notifications
        </div>
        <div>
          <Link
            href="#"
            className="flex border-y px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
          >
            <div className="shrink-0">
              <Image
                alt=""
                height={44}
                src="/images/users/bonnie-green.png"
                width={44}
                className="rounded-full"
              />
              <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-primary-700 dark:border-gray-700">
                <svg
                  className="h-3 w-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                </svg>
              </div>
            </div>
            <div className="w-full pl-3">
              <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                New message from&nbsp;
                <span className="font-semibold text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                : &quot;Hey, what&apos;s up? All set for the presentation?&quot;
              </div>
              <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                a few moments ago
              </div>
            </div>
          </Link>
          <Link
            href="#"
            className="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
          >
            <div className="shrink-0">
              <Image
                alt=""
                height={44}
                src="/images/users/jese-leos.png"
                width={44}
                className="rounded-full"
              />
              <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-gray-900 dark:border-gray-700">
                <svg
                  className="h-3 w-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                </svg>
              </div>
            </div>
            <div className="w-full pl-3">
              <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Jese Leos
                </span>
                &nbsp;and&nbsp;
                <span className="font-medium text-gray-900 dark:text-white">
                  5 others
                </span>
                &nbsp;started following you.
              </div>
              <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                10 minutes ago
              </div>
            </div>
          </Link>
          <Link
            href="#"
            className="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
          >
            <div className="shrink-0">
              <Image
                alt=""
                height={44}
                src="/images/users/joseph-mcfall.png"
                width={44}
                className="rounded-full"
              />
              <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-red-600 dark:border-gray-700">
                <svg
                  className="h-3 w-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full pl-3">
              <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Joseph Mcfall
                </span>
                &nbsp;and&nbsp;
                <span className="font-medium text-gray-900 dark:text-white">
                  141 others
                </span>
                &nbsp;love your story. See it and view more stories.
              </div>
              <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                44 minutes ago
              </div>
            </div>
          </Link>
          <Link
            href="#"
            className="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
          >
            <div className="shrink-0">
              <Image
                alt=""
                height={44}
                src="/images/users/leslie-livingston.png"
                width={44}
                className="rounded-full"
              />
              <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-green-400 dark:border-gray-700">
                <svg
                  className="h-3 w-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full pl-3">
              <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Leslie Livingston
                </span>
                &nbsp;mentioned you in a comment:&nbsp;
                <span className="font-medium text-primary-700 dark:text-primary-500">
                  @bonnie.green
                </span>
                &nbsp;what do you say?
              </div>
              <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                1 hour ago
              </div>
            </div>
          </Link>
          <Link
            href="#"
            className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <div className="shrink-0">
              <Image
                alt=""
                height={44}
                src="/images/users/robert-brown.png"
                width={44}
                className="rounded-full"
              />
              <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-purple-500 dark:border-gray-700">
                <svg
                  className="h-3 w-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </div>
            </div>
            <div className="w-full pl-3">
              <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Robert Brown
                </span>
                &nbsp;posted a new video: Glassmorphism - learn how to implement
                the new design trend.
              </div>
              <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                3 hours ago
              </div>
            </div>
          </Link>
        </div>
        <Link
          href="#"
          className="block rounded-b-xl border-t border-gray-200 bg-gray-50 py-2 text-center text-base font-normal text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:underline"
        >
          <div className="inline-flex items-center gap-x-2">
            <HiEye className="h-5 w-5" />
            <span>View all</span>
          </div>
        </Link>
      </div>
    </Dropdown>
  );
}

function UserDropdown() {
  const { profile } = useUserContext();
  const router = useRouter();
  return (
    <Dropdown
      className="rounded"
      arrowIcon={false}
      inline
      label={
        <span>
          <span className="sr-only">User menu</span>
          <Avatar alt="" img={profile?.avatar_url ?? ""} rounded size="sm" />
        </span>
      }
    >
      <Dropdown.Header className="px-4 py-3">
        <span className="block text-sm">{profile?.full_name}</span>
      </Dropdown.Header>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        onClick={async () =>
          supabaseClient.auth
            .signOut({ scope: "local" })
            .then(({ error }) => {
              if (error) throw Error(error.message);
              router.refresh();
              router.push("/sign-in");
            })
            .catch(console.error)
        }
      >
        Sign out
      </Dropdown.Item>
    </Dropdown>
  );
}
