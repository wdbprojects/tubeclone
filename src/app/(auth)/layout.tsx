import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      {children}
    </div>
  );
};
export default AuthLayout;
