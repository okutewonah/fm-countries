// "use client";
import CountryCard from "@/components/CountryCard";
import { Input } from "@/components/ui/input";
import { fetchCountries } from "@/utils/requests";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const countriesList = await fetchCountries();

  const countries = countriesList.sort(() => Math.random() - Math.random());

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
      <section className="mt-[2rem] gap-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-very-dark-blue-light dark:text-white-mode-text">
        {countries.map((country: any) => (
          <Link href={`/${country.cca3}`}>
            <CountryCard key={Math.random()} country={country} />
          </Link>
        ))}
      </section>
    </>
  );
}
