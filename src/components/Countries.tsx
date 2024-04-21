"use client";
import CountryCard from "@/components/CountryCard";
import Link from "next/link";
import NavContent from "@/components/NavContent";
import { useState } from "react";

export default function Countries(props: { countries: Array<any> }) {
  const [filteredCountries, setFilteredCountries] = useState(props.countries);

  const [filters, setFilters] = useState<{ keyword?: any; region?: any }>({});

  const handleFilterChange = (newFilters: { keyword?: any; region?: any }) => {
    setFilters({ ...filters, ...newFilters });

    var filteredItems = [...props.countries];

    if (newFilters.keyword && newFilters.keyword.length > 0) {
      filteredItems = filteredItems.filter((country: any) =>
        country.name.common
          .toLowerCase()
          .includes(newFilters.keyword.toLowerCase())
      );
    }

    if (newFilters.region) {
      filteredItems = filteredItems.filter(
        (country: any) =>
          country.region.toLowerCase() === newFilters.region.toLowerCase()
      );
    }

    setFilteredCountries(filteredItems);
  };

  return (
    <>
      <NavContent onFiltersChange={handleFilterChange} />
      <section className="mt-[2rem] gap-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-very-dark-blue-light dark:text-white-mode-text">
        {filteredCountries.map((country: any) => (
          <Link href={`/${country.cca3}`} key={Math.random()}>
            <CountryCard key={Math.random()} country={country} />
          </Link>
        ))}
      </section>
    </>
  );
}
