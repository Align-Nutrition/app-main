"use client";

import useScrollIndicator from "@/lib/hooks/use-scroll-indicator";
import { Card, Dropdown, Table } from "flowbite-react";
import { BiChevronRightCircle } from "react-icons/bi";
import { FaXmark } from "react-icons/fa6";
import { HiCheckCircle } from "react-icons/hi";

export default function HabitsTable() {
  const { calculatedOpacity, onScroll, ScrollIndicator, scrollLeft } =
    useScrollIndicator();

  return (
    <Card className="overflow-x-auto">
      <div className="grid gap-4 lg:gap-6">
        <div className="flex items-center md:justify-between">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Habits Activity
          </h5>
          <Dropdown color="gray" size="sm" label="30 Days">
            <Dropdown.Item>14 Days</Dropdown.Item>
            <Dropdown.Item>30 Days</Dropdown.Item>
            <Dropdown.Item>60 Days</Dropdown.Item>
            <Dropdown.Item>90 Days</Dropdown.Item>
            <Dropdown.Item>All History</Dropdown.Item>
          </Dropdown>
        </div>
        <div
          className="max-w-full overflow-x-auto relative"
          onScroll={onScroll}
        >
          <ScrollIndicator
            className="absolute grid place-items-center z-10 right-0 h-full"
            style={{ opacity: calculatedOpacity() }}
          >
            <div className="bg-cyan-100 dark:bg-cyan-800 border border-cyan-200 dark:border-cyan-900 p-2 flex items-center gap-2 rounded">
              <span className="text-xs dark:text-cyan-400 text-cyan-500 uppercase font-semibold tracking-widest">
                Scroll
              </span>
              <BiChevronRightCircle className="dark:text-cyan-400 text-cyan-500 h-5 w-5" />
            </div>
          </ScrollIndicator>
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell className="text-nowrap">Habit</Table.HeadCell>
              <Table.HeadCell className="text-nowrap">Jan 18</Table.HeadCell>
              <Table.HeadCell className="text-nowrap">Jan 17</Table.HeadCell>
              <Table.HeadCell className="text-nowrap">Jan 16</Table.HeadCell>
              <Table.HeadCell className="text-nowrap">Jan 15</Table.HeadCell>
              <Table.HeadCell className="text-nowrap">Jan 14</Table.HeadCell>
              <Table.HeadCell className="text-nowrap">Jan 13</Table.HeadCell>
              <Table.HeadCell className="text-nowrap">Jan 12</Table.HeadCell>
              <Table.HeadCell className="text-nowrap">Jan 11</Table.HeadCell>
              <Table.HeadCell className="text-nowrap">Jan 10</Table.HeadCell>
              <Table.HeadCell className="text-nowrap">Jan 09</Table.HeadCell>
              <Table.HeadCell className="text-nowrap">Jan 08</Table.HeadCell>
              <Table.HeadCell className="text-nowrap">Jan 07</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell className="text-nowrap">
                  Drink 120 ounces of water
                </Table.Cell>
                <Table.Cell className="text-center text-nowrap text-sm text-red-500 dark:text-red400">
                  90oz
                </Table.Cell>
                <Table.Cell className="text-center text-nowrap text-sm text-green-500 dark:text-green-400">
                  130oz
                </Table.Cell>
                <Table.Cell className="text-center text-nowrap text-sm text-amber-500 dark:text-amber-400">
                  100oz
                </Table.Cell>
                <Table.Cell className="text-center text-nowrap text-sm text-green-500 dark:text-green-400">
                  120oz
                </Table.Cell>
                <Table.Cell className="text-center text-nowrap text-sm text-amber-500 dark:text-amber-400">
                  100oz
                </Table.Cell>
                <Table.Cell className="text-center text-nowrap text-sm text-green-500 dark:text-green-400">
                  130oz
                </Table.Cell>
                <Table.Cell className="text-center text-nowrap text-sm text-red-500 dark:text-red400">
                  90oz
                </Table.Cell>
                <Table.Cell className="text-center text-nowrap text-sm text-green-500 dark:text-green-400">
                  130oz
                </Table.Cell>
                <Table.Cell className="text-center text-nowrap text-sm text-amber-500 dark:text-amber-400">
                  100oz
                </Table.Cell>
                <Table.Cell className="text-center text-nowrap text-sm text-green-500 dark:text-green-400">
                  120oz
                </Table.Cell>
                <Table.Cell className="text-center text-nowrap text-sm text-amber-500 dark:text-amber-400">
                  100oz
                </Table.Cell>
                <Table.Cell className="text-center text-nowrap text-sm text-green-500 dark:text-green-400">
                  130oz
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="text-nowrap">
                  Meditate for 10 minutes in the morning
                </Table.Cell>
                <Table.Cell>
                  <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-green-400" />
                </Table.Cell>
                <Table.Cell>
                  <FaXmark className="text-center w-5 h-5 text-red-500 dark:text-red-400" />
                </Table.Cell>
                <Table.Cell>
                  <FaXmark className="text-center w-5 h-5 text-red-500 dark:text-red-400" />
                </Table.Cell>
                <Table.Cell>
                  <FaXmark className="text-center w-5 h-5 text-red-500 dark:text-red-400" />
                </Table.Cell>
                <Table.Cell>
                  <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-green-400" />
                </Table.Cell>
                <Table.Cell>
                  <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-green-400" />
                </Table.Cell>
                <Table.Cell>
                  <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-green-400" />
                </Table.Cell>
                <Table.Cell>
                  <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-green-400" />
                </Table.Cell>
                <Table.Cell>
                  <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-green-400" />
                </Table.Cell>
                <Table.Cell>
                  <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-400" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="text-nowrap">
                  Complete Daily Workouts
                </Table.Cell>
                <Table.Cell>
                  <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-green-400" />
                </Table.Cell>
                <Table.Cell>
                  <FaXmark className="text-center w-5 h-5 text-red-500 dark:text-red-400" />
                </Table.Cell>
                <Table.Cell>
                  <FaXmark className="text-center w-5 h-5 text-red-500 dark:text-red-400" />
                </Table.Cell>
                <Table.Cell>
                  <FaXmark className="text-center w-5 h-5 text-red-500 dark:text-red-400" />
                </Table.Cell>
                <Table.Cell>
                  <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-green-400" />
                </Table.Cell>
                <Table.Cell>
                  <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-green-400" />
                </Table.Cell>
                <Table.Cell>
                  <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-green-400" />
                </Table.Cell>
                <Table.Cell>
                  <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-green-400" />
                </Table.Cell>
                <Table.Cell>
                  <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-green-400" />
                </Table.Cell>
                <Table.Cell>
                  <HiCheckCircle className="text-center w-5 h-5 text-green-500 dark:text-400" />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </Card>
  );
}
