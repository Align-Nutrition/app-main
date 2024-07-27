"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiChevronLeft } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

export default function OnboardingSteps() {
  const pathname = usePathname();

  const steps = [
    {
      name: "Business Info",
      complete:
        pathname.includes("subscription-plan") ||
        pathname.includes("confirmation"),
    },
    {
      name: "Select a Plan",
      complete: pathname.includes("confirmation"),
    },
    {
      name: "Confirmation",
      complete: pathname.includes("confirmation"),
    },
  ];

  return (
    <>
      <Link
        className="inline-flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-600 gap-2 mb-6"
        href="/"
      >
        <BiChevronLeft className="h-6 w-6" />
        Go back
      </Link>
      <ol className="mb-6 flex items-center text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base lg:mb-12 lg:justify-center flex-wrap">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={twMerge(
              stepIdx + 1 === steps.length
                ? "flex items-center sm:block"
                : "flex items-center after:mx-6 after:hidden after:h-1 after:w-12 after:border-b after:border-b-gray-200 after:content-[''] dark:after:border-b-gray-700 sm:after:inline-block xl:after:mx-10"
            )}
          >
            <div
              className={twMerge(
                stepIdx + 1 === steps.length
                  ? "lg:grid"
                  : "flex items-center after:mx-2 after:after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden md:flex-col"
              )}
            >
              {step.complete ? (
                <svg
                  className="mr-2 h-4 w-4 sm:mx-auto sm:mb-2 sm:h-6 sm:w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <span className="mr-2 sm:mx-auto sm:mb-2">{stepIdx + 1}</span>
              )}
              {step.name}
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
