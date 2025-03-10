import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import SearchInput from "@/modules/home/ui/components/home-navbar/search-input";
import DarkMode from "@/components/shared/dark-mode";
import AuthButton from "@/modules/auth/ui/components/auth-button";

const HomeNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-background flex items-center px-2 pr-5 z-50">
      <div className="flex items-center gap-4 w-full">
        {/* //NOTE: MENU & LOGO */}
        <div className="flex items-center flex-shrink-0 ">
          <SidebarTrigger className="cursor-pointer" />
          <Link href="/">
            <div className="flex flex-row items-center gap-1 p-4">
              <Image
                src="./logo.svg"
                width={32}
                height={32}
                alt="Tubeclone Logo"
              />
              <p className="text-foreground font-medium text-lg tracking-tight">
                Tubeclone
              </p>
            </div>
          </Link>
        </div>
        {/* //NOTE: SEARCHBAR */}
        <div className="flex-1 flex justify-center max-w-[720px] mx-auto">
          <SearchInput />
        </div>
        {/* //NOTE: RIGHT BUTTONS (AUTH ....)*/}
        <div className="flex flex-shrink-0 items-center gap-4">
          <DarkMode />
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
export default HomeNavbar;
