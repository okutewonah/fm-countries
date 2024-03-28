import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

export const metadata: Metadata = {
  title: "Where in the World",
  description:
    "A simple app that makes an API call to countries around the globe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="icon.png" type="image/x-icon" />
      </head>
      <body
        className={`${nunitoSans.className} bg-very-light-gray-light dark:bg-very-dark-blue-dark w-full`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainNav />
          <main className="px-[2rem] py-[2rem]">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
