import {
  Dropdown,
  DropdownDivider,
  DropdownItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  theme,
} from "flowbite-react";
import Link from "next/link";
import { BiDotsHorizontal } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export default function Page({
  params: { businessId, clientId },
}: {
  params: { businessId: string; clientId: string };
}) {
  return (
    <div className="bg-white dark:bg-gray-800">
      <Table
        theme={{
          root: {
            wrapper: "static whitespace-nowrap",
          },
        }}
        className="w-full text-left text-sm text-gray-500 dark:text-gray-400"
      >
        <TableHead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <TableHeadCell scope="col" className="px-5 py-4">
            Date
          </TableHeadCell>
          <TableHeadCell scope="col" className="px-5 py-4">
            Target Protein
          </TableHeadCell>
          <TableHeadCell scope="col" className="px-5 py-4">
            Target Carb
          </TableHeadCell>
          <TableHeadCell scope="col" className="px-5 py-4">
            Target Fats
          </TableHeadCell>
          <TableHeadCell />
        </TableHead>
        <TableBody>
          <TableRow className="border-b dark:border-gray-700">
            <TableCell
              scope="row"
              className="whitespace-nowrap p-5 font-medium text-gray-900 dark:text-white"
            >
              <Link href={`/${businessId}/clients/${clientId}/assessments/1`}>
                January 1st, 2024
              </Link>
            </TableCell>
            <TableCell className="p-5">20</TableCell>
            <TableCell className="p-5">30</TableCell>
            <TableCell className="p-5">10</TableCell>
            <TableCell className="flex items-center justify-end p-5">
              <Dropdown
                inline
                label={
                  <>
                    <span className="sr-only">Manage entry</span>
                    <BiDotsHorizontal className="h-5 w-5" />
                  </>
                }
                theme={{
                  arrowIcon: "hidden",
                  floating: {
                    base: twMerge(theme.dropdown.floating.base, "w-40"),
                  },
                }}
              >
                <DropdownItem>
                  <FaEdit className="mr-2 h-4 w-4" />
                  Edit
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem className="text-red-600">
                  <HiOutlineTrash className="mr-2 h-4 w-4" />
                  Delete
                </DropdownItem>
              </Dropdown>
            </TableCell>
          </TableRow>
          <TableRow className="border-b dark:border-gray-700">
            <TableCell
              scope="row"
              className="whitespace-nowrap p-5 font-medium text-gray-900 dark:text-white"
            >
              <Link href={`/${businessId}/clients/${clientId}/assessments/1`}>
                January 1st, 2024
              </Link>
            </TableCell>
            <TableCell className="p-5">20</TableCell>
            <TableCell className="p-5">30</TableCell>
            <TableCell className="p-5">10</TableCell>
            <TableCell className="flex items-center justify-end p-5">
              <Dropdown
                dismissOnClick={false}
                inline
                label={
                  <>
                    <span className="sr-only">Manage entry</span>
                    <BiDotsHorizontal className="h-5 w-5" />
                  </>
                }
                theme={{
                  arrowIcon: "hidden",
                  floating: {
                    base: twMerge(theme.dropdown.floating.base, "w-40"),
                  },
                }}
              >
                <DropdownItem>
                  <FaEdit className="mr-2 h-4 w-4" />
                  Edit
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem className="text-red-600">
                  <HiOutlineTrash className="mr-2 h-4 w-4" />
                  Delete
                </DropdownItem>
              </Dropdown>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
