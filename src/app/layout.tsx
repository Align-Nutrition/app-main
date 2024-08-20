import { Flowbite, ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import { customTheme } from "./theme";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Align Nutrition",
  description: "All in one software for coaches",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={twMerge("bg-gray-50 dark:bg-gray-900", openSans.className)}
      >
        <Flowbite theme={{ theme: customTheme }}>{children}</Flowbite>
      </body>
    </html>
  );
}
