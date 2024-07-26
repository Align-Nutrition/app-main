import { PropsWithChildren, ReactNode } from "react";
import LayoutHeader from "./layout-header";
import { notFound } from "next/navigation";

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
