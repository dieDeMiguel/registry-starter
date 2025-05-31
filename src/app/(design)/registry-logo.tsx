import { Logo } from "@/components/logo";
import { Squirrel } from "lucide-react";

export function RegistryLogo() {
  return (
    <>
      <div className="flex-shrink-0 rounded-md p-1">
        <Logo />
      </div>
      <span className="font-semibold">SAP Registry</span>
    </>
  );
}
