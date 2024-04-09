"use client";

import { Inter } from "next/font/google";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./Header";
const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body className={inter.className}>
      <QueryClientProvider client={queryClient}>
        <Header />
        {children}
      </QueryClientProvider>
    </body>
  );
};

export default CommonLayout;
