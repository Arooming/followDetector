"use client";

import React, { useState } from "react";
import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./Header";
const inter = Inter({ subsets: ["latin"] });

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

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
