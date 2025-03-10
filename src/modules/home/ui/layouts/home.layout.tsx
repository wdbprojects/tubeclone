import { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import HomeNavbar from "@/modules/home/ui/components/home-navbar";

interface LayoutProps {
  children: ReactNode;
}

export const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <HomeNavbar />
        <div>{children}</div>
      </div>
    </SidebarProvider>
  );
};
