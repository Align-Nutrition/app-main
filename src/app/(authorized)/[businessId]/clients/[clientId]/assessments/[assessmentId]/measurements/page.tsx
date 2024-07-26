import {
  Alert,
  Card,
  Checkbox,
  Dropdown,
  DropdownItem,
  Label,
} from "flowbite-react";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import MeasurementLineChart from "./measurement-line-chart";

export default function Page() {
  return (
    <>
      <Card className="w-full">
        <div className="mb-4 flex items-center justify-between">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Measurement History
          </h5>
          <div className="flex items-center gap-2">
            <Dropdown label="Filter by measurement" color="gray" size="sm">
              <div className="px-3 py-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Measurement
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-center">
                    <Checkbox checked id="bicep" name="bicep" />
                    <Label
                      htmlFor="bicep"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Bicep
                    </Label>
                  </li>
                  <li className="flex items-center">
                    <Checkbox checked id="thigh" name="thigh" />
                    <Label
                      htmlFor="thigh"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Thigh
                    </Label>
                  </li>
                  <li className="flex items-center">
                    <Checkbox checked id="chest" name="chest" />
                    <Label
                      htmlFor="chest"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Chest
                    </Label>
                  </li>
                  <li className="flex items-center">
                    <Checkbox id="waist" name="waist" />
                    <Label
                      htmlFor="waist"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Waist
                    </Label>
                  </li>
                  <li className="flex items-center">
                    <Checkbox id="body_fat" name="body_fat" />
                    <Label
                      htmlFor="body_fat"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Body Fat
                    </Label>
                  </li>
                </ul>
              </div>
            </Dropdown>
            <Dropdown color="gray" size="sm" label="30 Days">
              <DropdownItem>14 Days</DropdownItem>
              <DropdownItem>30 Days</DropdownItem>
              <DropdownItem>60 Days</DropdownItem>
              <DropdownItem>90 Days</DropdownItem>
              <DropdownItem>All History</DropdownItem>
            </Dropdown>
          </div>
        </div>
        <MeasurementLineChart />
      </Card>

      <div className="grid grid-cols-2 w-full gap-6">
        <Card>
          <div className="flex items-center">
            <div className="shrink-0">
              <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                12in.
              </span>
              <h3 className="text-base font-normal text-gray-600 dark:text-gray-400">
                Bicep
              </h3>
            </div>
            <div className="ml-5 flex w-0 flex-1 items-center justify-end text-base font-bold text-red-500 dark:text-red-400">
              {-0.1 * 100}%
              <BiDownArrowAlt className="h-5 w-5" />
            </div>
          </div>
          <Alert className="mt-4" color="yellow">
            Add arm exercises to increase bicep measurement.
          </Alert>
        </Card>
        <Card>
          <div className="flex items-center">
            <div className="shrink-0">
              <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                18in.
              </span>
              <h3 className="text-base font-normal text-gray-600 dark:text-gray-400">
                Thigh
              </h3>
            </div>
            <div className="ml-5 flex w-0 flex-1 items-center justify-end text-base font-bold text-red-500 dark:text-red-400">
              {-0.25 * 100}%
              <BiDownArrowAlt className="h-5 w-5" />
            </div>
          </div>
          <Alert className="mt-4" color="yellow">
            Add leg exercises to increase thigh measurement.
          </Alert>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="shrink-0">
              <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                43in
              </span>
              <h3 className="text-base font-normal text-gray-600 dark:text-gray-400">
                Chest
              </h3>
            </div>
            <div className="ml-5 flex w-0 flex-1 items-center justify-end text-base font-bold text-green-500 dark:text-green-400">
              {0.25 * 100}%
              <BiUpArrowAlt className="h-5 w-5" />
            </div>
          </div>
          <Alert className="mt-4" color="green">
            Massive progress made!
          </Alert>
        </Card>
      </div>
    </>
  );
}
