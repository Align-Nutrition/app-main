import { ReactElement } from "react";

export default function Layout({
  children,
  ...rest
}: {
  children: ReactElement;
}) {
  return children;
}
