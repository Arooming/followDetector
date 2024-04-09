import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/global.css";
import React from "react";
import CommonLayout from "@/common/CommonLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Follow Detector",
  description: "Following by Follow Detector App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <CommonLayout>
        <body className={inter.className}>{children}</body>
      </CommonLayout>
    </html>
  );
}
