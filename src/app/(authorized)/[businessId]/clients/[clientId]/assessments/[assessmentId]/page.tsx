import Chart from "@/components/chart";
import { Dashboard } from "@/lib/types/dashboard";
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
  theme,
  useThemeMode,
} from "flowbite-react";
import { FC } from "react";
import NutritionPieChart from "./nutrition-pie-chart";
import Image from "next/image";
import { TbRulerMeasure, TbTreadmill } from "react-icons/tb";
import { FaAward } from "react-icons/fa";
import { PiBarbell } from "react-icons/pi";
import { BiTrophy } from "react-icons/bi";
import { HiCheckCircle, HiOutlineCheckCircle } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";

export default function Page() {
  return (
    <>
      <Card className="w-full">
        <div className="mb-4 flex items-center justify-between">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Summary
          </h5>
          <a
            href="#"
            className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
          >
            View all
          </a>
        </div>
        <div className="flow-root">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <TbRulerMeasure className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    Initial Assessment
                  </p>
                  <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                    {new Date().toLocaleDateString("en-us")}
                  </p>
                </div>
                <div className="inline-flex items-center text-2xl font-semibold text-gray-500 dark:text-gray-400">
                  225lbs
                </div>
                <div className="inline-flex items-center text-2xl font-semibold text-gray-500 dark:text-gray-400">
                  18%
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <TbRulerMeasure className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    This Assessment
                  </p>
                  <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                    {new Date().toLocaleDateString("en-us")}
                  </p>
                </div>
                <div className="inline-flex items-center text-2xl font-semibold text-gray-500 dark:text-gray-400">
                  200lbs
                </div>
                <div className="inline-flex items-center text-2xl font-semibold text-gray-500 dark:text-gray-400">
                  15%
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <TbRulerMeasure className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    Gain/Loss
                  </p>
                  <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                    Calculated difference from initial assessment to current
                    date.
                  </p>
                </div>
                <div className="inline-flex items-center text-2xl font-semibold text-green-500 dark:text-green-400">
                  -25lbs
                </div>
                <div className="inline-flex items-center text-2xl font-semibold text-green-500 dark:text-green-400">
                  -3%
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Card>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 max-w-screen-lg mx-auto w-full">
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Nutrition Targets
            </h5>
          </div>
          <NutritionPieChart />
        </Card>
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Fitness Acheivements
            </h5>
          </div>
          <ul className="grid gap-4">
            <li className="p-4 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 flex items-center gap-2">
              <FaAward className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              <p>
                <span className="text-xs">Favorite Lift</span>
                <br />
                Barbell Bench Press
              </p>
            </li>
            <li className="p-4 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 flex items-center gap-2">
              <PiBarbell className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              <p>
                <span className="text-xs">Heaviest Lift</span>
                <br />
                Barbell Bench Press
              </p>
              <p className="text-xl ml-2 font-semibold">135lbs</p>
            </li>
            <li className="p-4 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 flex items-center gap-2">
              <TbTreadmill className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              <p>
                <span className="text-xs">Most Repped</span>
                <br />
                Barbell Bench Press
              </p>
              <p className="text-xl ml-2 font-semibold">12,305</p>
            </li>
            <li className="p-4 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 flex items-center gap-2">
              <BiTrophy className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              <p>
                <span className="text-xs">Newest Exercise</span>
                <br />
                Single Leg Squat
              </p>
            </li>
          </ul>
        </Card>
      </div>
      <Card className="w-full">
        <div className="mb-4 flex items-center justify-between">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Habits Activity
          </h5>
        </div>
        <div className="overflow-x-auto">
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
            </TableBody>
          </Table>
        </div>
      </Card>
    </>
  );
}
