import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { ClientsTable } from "./clients-table";

export default function Page() {
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

      <ClientsTable
        users={[
          {
            id: "1",
            name: "Neil Sims",
            email: "neil.sims@flowbite.com",
            position: "Front-end developer",
            country: "United States",
            status: "Active",
            avatar: "/images/users/neil-sims.png",
          },
        ]}
      />
    </>
  );
}
