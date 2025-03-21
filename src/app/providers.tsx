"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { TRPCProvider } from "@/trpc/client";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <TRPCProvider>
      <ClerkProvider afterSignOutUrl={"/"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </ClerkProvider>
    </TRPCProvider>
  );
};

export default Providers;
