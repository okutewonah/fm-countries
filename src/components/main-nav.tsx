import { cn } from "@/lib/utils";
import { ModeToggle } from "./toggle-mode";
import Link from "next/link";

export function MainNav() {
  return (
    <nav
      className={cn(
        "bg-white-mode-text dark:bg-dark-blue-dark flex justify-between py-[2rem] px-[2rem] sticky top-0"
      )}
    >
      <div>
        <Link href="/">Where in the world</Link>
      </div>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
}
