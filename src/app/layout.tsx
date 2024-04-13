import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "font-awesome/css/font-awesome.min.css";
import MainLayout from "@/containers/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Myanmar Immigrant Directory",
  description:
    "An community website for sharing essential knowledge for Immigration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
