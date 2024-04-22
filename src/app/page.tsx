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
import NavContent from "@/components/NavContent";
import Countries from "@/components/Countries";

export default async function Home() {
  const countriesList = await fetchCountries();

  const countries = countriesList.sort(() => Math.random() - Math.random());

  return (
    <>
      <Countries key={Math.random()} countries={countries} />
      {/* <NavContent countriesList={countriesList} />
      <section className="mt-[2rem] gap-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-very-dark-blue-light dark:text-white-mode-text">
        {countries.map((country: any) => (
          <Link href={`/${country.cca3}`}>
            <CountryCard key={Math.random()} country={country} />
          </Link>
        ))}
      </section> */}
    </>
  );
}
