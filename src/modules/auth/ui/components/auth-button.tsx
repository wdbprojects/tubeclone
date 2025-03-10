"use client";

import { Button } from "@/components/ui/button";
import { UserButton, SignedIn, SignInButton, SignedOut } from "@clerk/nextjs";
import { UserCircleIcon } from "lucide-react";

const AuthButton = () => {
  /* // TODO: add different auth states */

  return (
    <>
      <SignedIn>
        <UserButton />
        {/* // TODO: add menu items for Studio and User profile */}
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            size="default"
            variant="outline"
            className="cursor-pointer text-sm font-semibold !px-4 py-2 rounded-full hover:border-transparent [&_svg]:size-5"
          >
            <UserCircleIcon />
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
export default AuthButton;
