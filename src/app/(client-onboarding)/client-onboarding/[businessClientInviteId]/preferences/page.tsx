"use client";
import { COMMON_FOODS, ALLERGIES } from "@/lib/consts/nutrition-preferences";
import { Alert, Button, Checkbox, Label, Radio } from "flowbite-react";
import { useFormState, useFormStatus } from "react-dom";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa6";
import { handleUpdateClientPreferences } from "./actions";
import { MdError } from "react-icons/md";
import { MEASUREMENTS } from "@/lib/consts/measurement-preferences";
import { useParams } from "next/navigation";

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
        Next: Download App
      </Button>
    </div>
  );
}

export default function Page() {
  const { businessClientInviteId } = useParams();
  const [state, action] = useFormState(
    handleUpdateClientPreferences,
    initialFormState
  );

  return (
    <form action={action} className="grid gap-6">
      <input
        type="hidden"
        name="business_client_invite_id"
        value={businessClientInviteId}
      />
      {!state.success && state.error && (
        <div className="mb-4">
          <Alert color="failure" icon={MdError}>
            {state.error}
          </Alert>
        </div>
      )}
      <fieldset>
        <legend className="mb-4 text-lg text-gray-500 dark:text-gray-400">
          Select which unit of measurement you prefer
        </legend>
        <div className="grid gap-2">
          <div className="flex items-center gap-2 cursor-pointer">
            <Radio
              id="imperial"
              name="unit_of_measurement"
              value="imperial"
              defaultChecked
            />
            <Label htmlFor="imperial">Imperial (lbs, in, ft)</Label>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Radio id="metric" name="unit_of_measurement" value="metric" />
            <Label htmlFor="metric">Metric (kgs, cm, m)</Label>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend className="mb-4 text-lg text-gray-500 dark:text-gray-400">
          Select which measurements you would like to track
        </legend>
        <ul className="grid sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 mb-6 gap-4 sm:gap-6">
          {MEASUREMENTS.map((measurement) => (
            <li key={measurement}>
              <Checkbox
                id={measurement.toLowerCase().replaceAll(" ", "")}
                name="measurements"
                value={measurement}
                className="peer hidden"
              />
              <Label
                htmlFor={measurement.toLowerCase().replaceAll(" ", "")}
                className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-gray-200 bg-gray-50 p-5 text-base text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-cyan-600 peer-checked:text-cyan-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-cyan-500 peer-checked:bg-cyan-100"
              >
                <span className="w-full">{measurement}</span>
              </Label>
            </li>
          ))}
        </ul>
      </fieldset>
      <fieldset>
        <legend className="mb-4 text-lg text-gray-500 dark:text-gray-400">
          Select which items you have allergies or intolerances to.
        </legend>
        <ul className="grid sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 mb-6 gap-4 sm:gap-6">
          {ALLERGIES.map((allergy) => (
            <li key={allergy}>
              <Checkbox
                id={allergy.toLowerCase().replaceAll(" ", "")}
                name="food_allergies"
                value={allergy}
                className="peer hidden"
              />
              <Label
                htmlFor={allergy.toLowerCase().replaceAll(" ", "")}
                className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-gray-200 bg-gray-50 p-5 text-base text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-cyan-600 peer-checked:text-cyan-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-cyan-500 peer-checked:bg-cyan-100"
              >
                <span className="w-full">{allergy}</span>
              </Label>
            </li>
          ))}
        </ul>
      </fieldset>
      <fieldset>
        <legend className="mb-4 text-lg text-gray-500 dark:text-gray-400">
          Indicate which food items below that you like or dislike.
        </legend>
        <ul className="grid sm:grid-cols-2 mb-6 gap-4 sm:gap-6">
          {COMMON_FOODS.map((commonFood) => {
            const commonFoodId = commonFood.toLowerCase().replaceAll(" ", "");

            return (
              <li
                key={commonFood}
                className="grid grid-cols-4 items-center gap-2"
              >
                <span className="col-span-2">{commonFood}</span>
                <div>
                  <Checkbox
                    id={`${commonFoodId}_like`}
                    name="food_likes"
                    value={commonFood}
                    className="peer hidden"
                  />
                  <Label
                    htmlFor={`${commonFoodId}_like`}
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-gray-200 bg-gray-50 p-2 text-base text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-cyan-600 peer-checked:text-cyan-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-cyan-500"
                  >
                    <FaThumbsUp className="w-5 h-5" />
                  </Label>
                </div>
                <div>
                  <Checkbox
                    id={`${commonFoodId}_dislike`}
                    name="food_dislikes"
                    value={commonFood}
                    className="peer hidden"
                  />
                  <Label
                    htmlFor={`${commonFoodId}_dislike`}
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-gray-200 bg-gray-50 p-2 text-base text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-cyan-600 peer-checked:text-cyan-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-cyan-500"
                  >
                    <FaThumbsDown className="w-5 h-5" />
                  </Label>
                </div>
              </li>
            );
          })}
        </ul>
      </fieldset>

      <SubmitButton />
    </form>
  );
}
