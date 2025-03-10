import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";

const AuthButton = () => {
  /* // TODO: add different auth states */

  return (
    <Button
      size="default"
      variant="outline"
      className="cursor-pointer text-sm font-semibold !px-4 py-2 rounded-full hover:border-transparent [&_svg]:size-5"
    >
      <UserCircleIcon />
      Sign in
    </Button>
  );
};
export default AuthButton;
