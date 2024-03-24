import { cn } from "@/lib/utils";
import { ModeToggle } from "./toggle-mode";

export function MainNav() {
  return (
    <nav
      className={cn(
        "bg-white-mode-text dark:bg-dark-blue-dark flex justify-between py-[2rem] px-[3.5rem]"
      )}
    >
      <div>
        <h1>Where in the world</h1>
      </div>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
}
