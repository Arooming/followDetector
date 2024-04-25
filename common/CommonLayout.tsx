"use client";

import { Inter } from "next/font/google";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./Header";
const inter = Inter({ subsets: ["latin"] });

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  // 참조 동일성을 위해 useState로 정의
  // lazy initial state를 활용하여 initialState에 함수를 전달하면 queryClient는 초기 한 번만 생성되고, 이후에는 참조 동일성을 유지함
  const [queryClient] = useState(new QueryClient());

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
