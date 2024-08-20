"use client";

import PasswordInput from "@/components/password-input";
import PhotoUpload from "@/components/photo-upload";
import RequiredAsterisk from "@/components/required-asterisk";
import { Tables } from "@/lib/types/supabase";
import formatInchesToFeetString from "@/lib/utils/format-inches-to-string";
import {
  Alert,
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
} from "flowbite-react";
import { useFormState, useFormStatus } from "react-dom";
import { MdError } from "react-icons/md";
import { createClientAccountAndSignIn } from "./actions";
import { useParams } from "next/navigation";

type ClientOnboardingFormPropType = {
  data: Tables<"business_client_invites"> | null;
};

const initialFormState = {
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <div className="flex flex-col space-y-3 md:flex-row md:space-x-3 md:space-y-0">
      <Button
        size="xl"
        type="submit"
        className="md:w-1/2 [&>span]:text-sm"
        disabled={pending}
      >
        Next: Profile
      </Button>
    </div>
  );
}

export default function ClientOnboardingForm({
  data,
}: ClientOnboardingFormPropType) {
  const { businessClientInviteId } = useParams();
  const [state, action] = useFormState(
    createClientAccountAndSignIn,
    initialFormState
  );

  return (
    <form action={action} className="grid gap-4">
      {!state.success && state.error && (
        <div className="mb-4">
          <Alert color="failure" icon={MdError}>
            {state.error}
          </Alert>
        </div>
      )}
      <input
        type="hidden"
        value={businessClientInviteId ?? ""}
        name="business_client_invite_id"
      />
      <input type="hidden" value={data?.trainer_id ?? ""} name="trainer_id" />
      <input type="hidden" value={data?.business_id ?? ""} name="business_id" />
      <fieldset>
        <h3 className="mb-6 font-bold text-gray-500">Account Information</h3>
        <div className="max-w-xs">
          <Label
            htmlFor="profile_photo"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Photo
          </Label>

          <PhotoUpload name="avatar_url" />
        </div>
        <div className="my-6 grid gap-5 sm:grid-cols-2">
          <div>
            <Label
              htmlFor="full_name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Full Name
              <RequiredAsterisk />
            </Label>
            <TextInput
              autoComplete="name"
              defaultValue={data?.full_name}
              name="full_name"
              id="full_name"
              placeholder="Bonnie"
              required
            />
          </div>
          <div>
            <Label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
              <RequiredAsterisk />
            </Label>
            <TextInput
              autoComplete="email"
              defaultValue={data?.email}
              type="email"
              name="email"
              id="email"
              placeholder="name@company.com"
              readOnly
              required
            />
          </div>
          <div>
            <Label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
              <RequiredAsterisk />
            </Label>
            <PasswordInput name="password" id="password" required />
          </div>
          <div>
            <Label
              htmlFor="confirm-password"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm password
              <RequiredAsterisk />
            </Label>
            <PasswordInput
              name="confirm_password"
              id="confirm-password"
              required
            />
          </div>
        </div>
      </fieldset>
      <fieldset>
        <h3 className="mb-6 font-semibold text-gray-500">
          Profile Information
        </h3>

        <div className="my-6 grid gap-5 sm:grid-cols-2">
          <div>
            <Label
              htmlFor="country"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Country
            </Label>
            <Select
              autoComplete="off"
              id="country"
              defaultValue=""
              name="country"
            >
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
              id="phone"
              name="phone"
              pattern="\+[0-9] [0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="+1 123-567-8900"
              type="tel"
            />
          </div>
          <div>
            <Label
              htmlFor="birthday"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Birthday
            </Label>
            <TextInput type="date" name="birthday" id="birthday" />
          </div>
          <div>
            <Label
              htmlFor="height_inches"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Height
            </Label>
            <Select id="height_inches" defaultValue="" name="height_inches">
              <option value="">Choose your height</option>
              {Array.from({ length: 48 }).map((_, inch) => (
                <option value={inch + 48} key={inch}>
                  {formatInchesToFeetString(inch + 48)}
                </option>
              ))}
            </Select>
          </div>
        </div>
      </fieldset>
      <div className="space-y-3">
        <div className="flex items-start">
          <div className="flex gap-3">
            <Checkbox id="terms" required />
            <Label htmlFor="terms" className="text-gray-500 dark:text-gray-400">
              By signing up, you are creating an account, and you agree to&nbsp;
              <a
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                href="#"
              >
                Terms of Use
              </a>
              &nbsp;and&nbsp;
              <a
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                href="#"
              >
                Privacy Policy
              </a>
              .
            </Label>
          </div>
        </div>
      </div>
      <SubmitButton />
    </form>
  );
}
