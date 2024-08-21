import { PropsWithChildren } from "react";
import LayoutSidebar from "./layout-sidebar";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { BiChevronLeft } from "react-icons/bi";

type AssessmentLayoutPropTypes = PropsWithChildren & {
  params: { businessId: string; clientId: string };
};

export default function Layout({
  children,
  params: { businessId, clientId },
}: AssessmentLayoutPropTypes) {
  return (
    <div className="2xl:max-w-screen-lg 2xl:mx-auto p-4">
      <div className="grid lg:grid-cols-12 gap-6 relative">
        <div className="lg:col-span-3 relative">
          <div className="mb-4">
            <Breadcrumb>
              <BreadcrumbItem
                icon={BiChevronLeft}
                href={`/${businessId}/clients/${clientId}/assessments`}
              >
                Back to Assessments
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <LayoutSidebar />
        </div>
        <div className="lg:col-span-9 flex flex-col items-start gap-6 relative">
          {children}
        </div>
      </div>
    </div>
  );
}
