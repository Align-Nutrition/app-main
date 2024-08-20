import {
  Card,
  Dropdown,
  DropdownItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { FaAward, FaXmark } from "react-icons/fa6";
import { HiCheckCircle } from "react-icons/hi";

export default async function Page() {
  return (
    <div className="2xl:max-w-screen-lg 2xl:mx-auto p-4 gap-4 lg:gap-6 grid">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 lg:gap-6">
        <Card>
          <div className="flex items-cente shrink-0r">
            <div className="shrink-0">
              <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                210lbs.
              </span>
              <h3 className="text-base font-normal text-gray-600 dark:text-gray-400">
                Weight
              </h3>
            </div>
            <div className="ml-5 flex w-0 flex-1 items-center justify-end text-base font-bold text-green-500 dark:text-green-400">
              {0.25 * 100}%
              <BiDownArrowAlt className="h-5 w-5 shrink-0" />
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-cente shrink-0r">
            <div className="shrink-0">
              <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                18%
              </span>
              <h3 className="text-base font-normal text-gray-600 dark:text-gray-400">
                Body Fat
              </h3>
            </div>
            <div className="ml-5 flex w-0 flex-1 items-center justify-end text-base font-bold text-red-500 dark:text-red-400">
              {-0.25 * 100}%
              <BiUpArrowAlt className="h-5 w-5" />
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-cente shrink-0r">
            <div className="shrink-0">
              <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                18in.
              </span>
              <h3 className="text-base font-normal text-gray-600 dark:text-gray-400">
                Waist
              </h3>
            </div>
            <div className="ml-5 flex w-0 flex-1 items-center justify-end text-base font-bold text-red-500 dark:text-red-400">
              {-0.25 * 100}%
              <BiUpArrowAlt className="h-5 w-5" />
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-cente shrink-0r">
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
              <BiUpArrowAlt className="h-5 w-5" />
            </div>
          </div>
        </Card>
      </div>
      <div className="grid lg:grid-cols-6 gap-4 lg:gap-6">
        <Card className="lg:col-span-4">
          <div className="flex md:justify-between">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Measurements
            </h5>
            <Dropdown color="gray" size="sm" label="30 Days">
              <DropdownItem>14 Days</DropdownItem>
              <DropdownItem>30 Days</DropdownItem>
              <DropdownItem>60 Days</DropdownItem>
              <DropdownItem>90 Days</DropdownItem>
              <DropdownItem>All History</DropdownItem>
            </Dropdown>
          </div>
        </Card>
        <Card className="lg:col-span-2">
          <div className="grid gap-4 lg:gap-6">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Leaderboard
            </h5>
            <ul className="grid gap-4">
              <li className="p-4 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <FaAward className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                <p>
                  <span className="text-xs">10 Day Streak</span>
                  <br />
                  Barbell Bench Press
                </p>
              </li>
              <li className="p-4 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <FaAward className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                <p>
                  <span className="text-xs">5 Day Streak</span>
                  <br />
                  Barbell Squat
                </p>
              </li>
              <li className="border-4 border-dotted border-gray-100 dark:border-gray-700 p-2 text-sm text-center text-gray-400 dark:text-gray-500 flex items-center gap-2">
                <FaAward className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                Unlock Award
              </li>
              <li className="border-4 border-dotted border-gray-100 dark:border-gray-700 p-2 text-sm text-center text-gray-400 dark:text-gray-500 flex items-center gap-2">
                <FaAward className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                Unlock Award
              </li>
              <li className="border-4 border-dotted border-gray-100 dark:border-gray-700 p-2 text-sm text-center text-gray-400 dark:text-gray-500 flex items-center gap-2">
                <FaAward className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                Unlock Award
              </li>
            </ul>
          </div>
        </Card>
      </div>
      <Card className="overflow-x-auto">
        <div className="grid gap-4 lg:gap-6">
          <div className="flex items-center md:justify-between">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Habits Activity
            </h5>
            <Dropdown color="gray" size="sm" label="30 Days">
              <DropdownItem>14 Days</DropdownItem>
              <DropdownItem>30 Days</DropdownItem>
              <DropdownItem>60 Days</DropdownItem>
              <DropdownItem>90 Days</DropdownItem>
              <DropdownItem>All History</DropdownItem>
            </Dropdown>
          </div>
          <div className="max-w-full overflow-x-auto">
            <Table hoverable>
              <TableHead>
                <TableHeadCell className="text-nowrap">Habit</TableHeadCell>
                <TableHeadCell className="text-nowrap">Jan 18</TableHeadCell>
                <TableHeadCell className="text-nowrap">Jan 17</TableHeadCell>
                <TableHeadCell className="text-nowrap">Jan 16</TableHeadCell>
                <TableHeadCell className="text-nowrap">Jan 15</TableHeadCell>
                <TableHeadCell className="text-nowrap">Jan 14</TableHeadCell>
                <TableHeadCell className="text-nowrap">Jan 13</TableHeadCell>
                <TableHeadCell className="text-nowrap">Jan 12</TableHeadCell>
                <TableHeadCell className="text-nowrap">Jan 11</TableHeadCell>
                <TableHeadCell className="text-nowrap">Jan 10</TableHeadCell>
                <TableHeadCell className="text-nowrap">Jan 09</TableHeadCell>
                <TableHeadCell className="text-nowrap">Jan 08</TableHeadCell>
                <TableHeadCell className="text-nowrap">Jan 07</TableHeadCell>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className="text-nowrap">
                    Drink 120 ounces of water
                  </TableCell>
                  <TableCell className="text-center text-nowrap text-sm text-red-500 dark:text-red400">
                    90oz
                  </TableCell>
                  <TableCell className="text-center text-nowrap text-sm text-green-500 dark:text-green-400">
                    130oz
                  </TableCell>
                  <TableCell className="text-center text-nowrap text-sm text-amber-500 dark:text-amber-400">
                    100oz
                  </TableCell>
                  <TableCell className="text-center text-nowrap text-sm text-green-500 dark:text-green-400">
                    120oz
                  </TableCell>
                  <TableCell className="text-center text-nowrap text-sm text-amber-500 dark:text-amber-400">
                    100oz
                  </TableCell>
                  <TableCell className="text-center text-nowrap text-sm text-green-500 dark:text-green-400">
                    130oz
                  </TableCell>
                  <TableCell className="text-center text-nowrap text-sm text-red-500 dark:text-red400">
                    90oz
                  </TableCell>
                  <TableCell className="text-center text-nowrap text-sm text-green-500 dark:text-green-400">
                    130oz
                  </TableCell>
                  <TableCell className="text-center text-nowrap text-sm text-amber-500 dark:text-amber-400">
                    100oz
                  </TableCell>
                  <TableCell className="text-center text-nowrap text-sm text-green-500 dark:text-green-400">
                    120oz
                  </TableCell>
                  <TableCell className="text-center text-nowrap text-sm text-amber-500 dark:text-amber-400">
                    100oz
                  </TableCell>
                  <TableCell className="text-center text-nowrap text-sm text-green-500 dark:text-green-400">
                    130oz
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-nowrap">
                    Meditate for 10 minutes in the morning
                  </TableCell>
                  <TableCell>
                    <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-green-400" />
                  </TableCell>
                  <TableCell>
                    <FaXmark className="text-center w-5 h-5 text-red-500 dark:text-red-400" />
                  </TableCell>
                  <TableCell>
                    <FaXmark className="text-center w-5 h-5 text-red-500 dark:text-red-400" />
                  </TableCell>
                  <TableCell>
                    <FaXmark className="text-center w-5 h-5 text-red-500 dark:text-red-400" />
                  </TableCell>
                  <TableCell>
                    <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-green-400" />
                  </TableCell>
                  <TableCell>
                    <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-green-400" />
                  </TableCell>
                  <TableCell>
                    <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-green-400" />
                  </TableCell>
                  <TableCell>
                    <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-green-400" />
                  </TableCell>
                  <TableCell>
                    <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-green-400" />
                  </TableCell>
                  <TableCell>
                    <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-400" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-nowrap">
                    Complete Daily Workouts
                  </TableCell>
                  <TableCell>
                    <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-green-400" />
                  </TableCell>
                  <TableCell>
                    <FaXmark className="text-center w-5 h-5 text-red-500 dark:text-red-400" />
                  </TableCell>
                  <TableCell>
                    <FaXmark className="text-center w-5 h-5 text-red-500 dark:text-red-400" />
                  </TableCell>
                  <TableCell>
                    <FaXmark className="text-center w-5 h-5 text-red-500 dark:text-red-400" />
                  </TableCell>
                  <TableCell>
                    <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-green-400" />
                  </TableCell>
                  <TableCell>
                    <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-green-400" />
                  </TableCell>
                  <TableCell>
                    <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-green-400" />
                  </TableCell>
                  <TableCell>
                    <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-green-400" />
                  </TableCell>
                  <TableCell>
                    <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-green-400" />
                  </TableCell>
                  <TableCell>
                    <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-400" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </Card>
    </div>
  );
}
