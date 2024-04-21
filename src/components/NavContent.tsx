"use client";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState } from "react";

type Props = {
  onFiltersChange: (filters: any) => void;
};

const NavContent = (props: Props) => {
  const [filters, setFilters] = useState<{ keyword?: any; region?: any }>({});

  const handleChange = (e: any) => {
    const searchTerm = e.target.value;
    setFilters({ ...filters, keyword: searchTerm });
    props.onFiltersChange({ ...filters, keyword: searchTerm });
  };

  const handleRegionChange = (e: any) => {
    setFilters({ ...filters, region: e });
    props.onFiltersChange({ ...filters, region: e });
  };

  return (
    <section className="flex flex-col md:flex-row justify-between">
      <div className="relative">
        <Search className="absolute left-6 top-3 h-4 2-4 " />
        <Input
          className="pl-14 bg-white-mode-text dark:bg-dark-blue-dark text-very-dark-blue-light dark:text-white-mode-text h-[2.5rem] w-[16rem]"
          type="text"
          name="search"
          id="search"
          onChange={handleChange}
          placeholder="Search for a country..."
        />
      </div>
      <div className="mt-[2rem] md:mt-0">
        <Select onValueChange={handleRegionChange}>
          <SelectTrigger className="bg-white-mode-text dark:bg-dark-blue-dark text-very-dark-blue-light dark:text-white-mode-text h-[2.5rem] w-[12rem] pl-4">
            <SelectValue placeholder="Filter by Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="africa">Africa</SelectItem>
              <SelectItem value="americas">Americas</SelectItem>
              <SelectItem value="asia">Asia</SelectItem>
              <SelectItem value="europe">Europe</SelectItem>
              <SelectItem value="oceania">Oceania</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
};

export default NavContent;
