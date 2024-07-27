"use client";

import {
  Alert,
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
} from "flowbite-react";

import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { MdError } from "react-icons/md";
import { useUserContext } from "../../../lib/contexts/user-context";
import { handleBusinessInfoFormSubmit } from "./actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      size="xl"
      type="submit"
      className="md:w-1/2 [&>span]:text-sm"
      disabled={pending}
      aria-disabled={pending}
    >
      Next: Plan
    </Button>
  );
}

const initialFormState = { error: null };

export default function Page() {
  const [state, formAction] = useFormState(
    handleBusinessInfoFormSubmit,
    initialFormState
  );
  const { profile } = useUserContext();

  return (
    <>
      <h1 className="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:mb-6">
        Account details
      </h1>
      {state?.error && (
        <div className="mb-4">
          <Alert color="failure" icon={MdError}>
            {state.error}
          </Alert>
        </div>
      )}
      <form action={formAction}>
        <input type="hidden" name="user_id" value={profile?.id ?? ""} />
        <div className="max-w-xs">
          <Label
            htmlFor="logo"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Business Logo
          </Label>

          <div>
            {/* <Avatar
        alt="Helene avatar"
        img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
        rounded
        size="lg"
        className="mb-4 justify-start"
      /> */}
            <div className="w-full">
              <input
                className="w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400"
                aria-describedby="logo_help"
                id="logo"
                name="logo"
                type="file"
              />
              <p
                className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                id="logo_help"
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>
            {/* <div className="mt-4 flex items-center space-x-2.5">
        <Button
          size="sm"
          className="inline-flex items-center [&>span]:text-xs"
        >
          <svg
            aria-hidden
            className="-ml-1 mr-1 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Upload new picture
        </Button>
        <Button
          color="alt"
          size="sm"
          className="border border-gray-200 bg-white text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 [&>span]:text-xs"
        >
          Delete
        </Button>
      </div> */}
          </div>
        </div>
        <div className="my-6 grid gap-5 sm:grid-cols-2">
          <div>
            <Label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Business Name
            </Label>
            <TextInput
              autoComplete="off"
              name="name"
              id="name"
              placeholder="Globogym"
              required
            />
          </div>
          <div>
            <Label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Business email
            </Label>
            <TextInput
              autoComplete="email"
              type="email"
              name="email"
              id="email"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <Label
              htmlFor="country"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Country
            </Label>
            <Select id="country" defaultValue="" autoComplete="off">
              <option value="">Choose your country</option>
              <option value="USA">USA</option>
              <option value="UK">United Kingdom</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
              <option value="ES">Spain</option>
              <option value="JP">Japan</option>
              <option value="AUS">Australia</option>
            </Select>
          </div>
          <div>
            <Label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone <small>(example: +1 123-567-8900)</small>
            </Label>
            <TextInput
              autoComplete="tel"
              type="tel"
              name="phone"
              id="phone"
              pattern="\+[0-9] [0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="+1 123-567-8900"
              required
            />
          </div>
        </div>
        <div className="mb-6 space-y-3">
          <div className="flex items-start">
            <div className="flex gap-3">
              <Checkbox id="terms" required />
              <Label
                htmlFor="terms"
                className="text-gray-500 dark:text-gray-400"
              >
                By signing up, you are creating a Align Nutrition account, and
                you agree to Align Nutrition’s&nbsp;
                <Link
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href="#"
                >
                  Terms of Use
                </Link>
                &nbsp;and&nbsp;
                <Link
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href="#"
                >
                  Privacy Policy
                </Link>
                .
              </Label>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex items-center gap-3">
              <Checkbox id="newsletter" />
              <Label
                htmlFor="newsletter"
                className="text-gray-500 dark:text-gray-400"
              >
                Email me about product updates and resources.
              </Label>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3 md:flex-row md:space-x-3 md:space-y-0">
          <Button
            color="gray"
            href="#"
            className="hover:bg-gray-100 hover:text-cyan-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white md:w-1/2 [&>span]:py-3 [&>span]:text-sm"
          >
            Cancel
          </Button>
          <SubmitButton />
        </div>
      </form>
    </>
  );
}
