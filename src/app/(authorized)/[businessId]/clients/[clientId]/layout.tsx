import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";
import LayoutHeader from "./layout-header";

type LayoutProps = PropsWithChildren<{
  params: { clientId: string };
}>;

export default function Layout({
  children,
  params: { clientId },
}: LayoutProps) {
  if (Number.isNaN(Number(clientId))) notFound();

  return (
    <>
      <LayoutHeader clientId={clientId} />
      {children}
    </>
  );
}
