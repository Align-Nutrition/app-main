import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Checkbox,
  Label,
  Rating,
  RatingStar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  TextInput,
} from "flowbite-react";
import Link from "next/link";
import { HiHome, HiSearch } from "react-icons/hi";
import { AddClientDrawer } from "./add-client-drawer";
import { InviteClientModal } from "./invite-client-modal";

export default function Page({
  params: { businessId },
}: {
  params: { businessId: string };
}) {
  return (
    <>
      <div className="block items-center justify-between bg-white p-4 sm:flex dark:bg-gray-800">
        <div className="mb-1 w-full">
          <Breadcrumb className="mb-5">
            <BreadcrumbItem href="#">
              <div className="flex items-center gap-x-3">
                <HiHome className="text-xl" />
              </div>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
            Clients
          </h1>
        </div>
      </div>

      <section className="relative bg-white dark:bg-gray-800 grid gap-6 px-4">
        <div className="flex shrink-0 flex-col space-y-3 md:flex-row md:items-center md:space-x-3 md:space-y-0 lg:justify-between">
          <TextInput
            icon={() => (
              <HiSearch className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            )}
            id="default-search"
            name="default-search"
            placeholder="Search for clients"
            required
            type="search"
            className="flex-1 md:mr-32 [&_input]:py-2"
          />
          <div className="flex flex-col gap-y-2 md:flex-row md:space-x-3">
            <AddClientDrawer />
            <InviteClientModal />
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table className="whitespace-nowrap">
            <TableHead>
              <TableHeadCell
                scope="col"
                className="p-4 group-first/head:first:rounded-tl-none"
              >
                <div className="flex items-center">
                  <Checkbox id="checkbox-all" name="checkbox-all" />
                  <Label htmlFor="checkbox-all" className="sr-only">
                    Select all
                  </Label>
                </div>
              </TableHeadCell>
              <TableHeadCell
                scope="col"
                className="px-4 py-3.5 text-gray-500 dark:text-gray-400"
              >
                Name
              </TableHeadCell>
              <TableHeadCell scope="col" className="px-4 py-3.5">
                Category
              </TableHeadCell>
              <TableHeadCell scope="col" className="px-4 py-3.5">
                Stock
              </TableHeadCell>
              <TableHeadCell scope="col" className="px-4 py-3.5">
                Sales/Day
              </TableHeadCell>
              <TableHeadCell scope="col" className="px-4 py-3.5">
                Sales/Month
              </TableHeadCell>
              <TableHeadCell scope="col" className="px-4 py-3.5">
                Rating
              </TableHeadCell>
              <TableHeadCell scope="col" className="px-4 py-3.5">
                Sales
              </TableHeadCell>
              <TableHeadCell scope="col" className="px-4 py-3.5">
                Revenue
              </TableHeadCell>
            </TableHead>
            <TableBody>
              <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                <TableCell className="w-4 p-4">
                  <div className="flex items-center">
                    <Checkbox
                      id="checkbox-table-search-1"
                      name="checkbox-table-search-1"
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                    />
                    <Label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      Select this client
                    </Label>
                  </div>
                </TableCell>
                <TableCell
                  scope="row"
                  className="flex items-center whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white"
                >
                  <picture>
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                  </picture>
                  <Link href={`/${businessId}/clients/1`}>
                    Apple iMac 27&#34;
                  </Link>
                </TableCell>
                <TableCell className="px-4 py-3.5">
                  <Badge className="w-fit">Desktop PC</Badge>
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                  <div className="flex items-center">
                    <div className="mr-2 inline-block h-4 w-4 rounded-full bg-red-700"></div>
                    95
                  </div>
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                  1.47
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                  0.47
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                  <Rating>
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                      5.0
                    </p>
                  </Rating>
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-2 h-5 w-5 text-gray-400"
                      aria-hidden
                    >
                      <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                    </svg>
                    1.6M
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3.5">$3.2M</TableCell>
              </TableRow>
              <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                <TableCell className="w-4 px-4 py-3.5">
                  <div className="flex items-center">
                    <Checkbox
                      id="checkbox-table-search-1"
                      name="checkbox-table-search-1"
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                    />
                    <Label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      Select this client
                    </Label>
                  </div>
                </TableCell>
                <TableCell
                  scope="row"
                  className="flex items-center whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white"
                >
                  <picture>
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Apple iMac 20&quot;
                  </picture>
                </TableCell>
                <TableCell className="px-4 py-3.5">
                  <Badge className="w-fit">Desktop PC</Badge>
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                  <div className="flex items-center">
                    <div className="mr-2 inline-block h-4 w-4 rounded-full bg-red-700"></div>
                    108
                  </div>
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                  1.15
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                  0.32
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                  <Rating>
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                      5.0
                    </p>
                  </Rating>
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-2 h-5 w-5 text-gray-400"
                      aria-hidden
                    >
                      <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                    </svg>
                    6M
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3.5">$785K</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  );
}
