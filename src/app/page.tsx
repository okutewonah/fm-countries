import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-between">
        <div className="relative">
          <Search className="absolute left-6 top-3 h-4 2-4 " />
          <Input
            className="pl-14 bg-white-mode-text dark:bg-dark-blue-dark text-very-dark-blue-light dark:text-white-mode-text h-[2.5rem] w-[16rem]"
            type="text"
            name="search"
            id="search"
            placeholder="Search for a country..."
          />
        </div>
        <div className="mt-[2rem] md:mt-0">
          <Select>
            <SelectTrigger className="bg-white-mode-text dark:bg-dark-blue-dark text-very-dark-blue-light dark:text-white-mode-text h-[2.5rem] w-[12rem] pl-4">
              <SelectValue placeholder="Filter by Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="africa">Africa</SelectItem>
                <SelectItem value="america">America</SelectItem>
                <SelectItem value="asia">Asia</SelectItem>
                <SelectItem value="europe">Europe</SelectItem>
                <SelectItem value="oceania">Oceania</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </section>
    </>
  );
}
