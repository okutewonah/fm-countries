"use client";
import Borders from "@/components/Borders";
import CountryDetails from "@/components/CountryDetails";
import CountryFlag from "@/components/CountryFlag";
import { fetchCountry } from "@/utils/requests";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CountryPage() {
  const { cca3 } = useParams();
  //   const country = await fetchCountry(cca3);

  //   console.log(country.name.common);

  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      if (!cca3) return;
      try {
        const countryData = await fetchCountry(cca3);
        setCountry(countryData);
      } catch (error) {
        console.log("Error fetching country", error);
      }
    };
    if (country === null) {
      fetchCountryData();
    }
    // console.log(country);
  }, [cca3, country]);

  return (
    <>
      <section>
        <Link
          href="/"
          className="py-2 px-8 rounded text-very-dark-blue-light dark:text-white-mode-text bg-white-mode-text dark:bg-dark-blue-dark"
        >
          Back
        </Link>
      </section>
      {country && (
        <section className="mt-[5rem] text-very-dark-blue-light dark:text-white-mode-text grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="h-[360px] w-[85vw] md:w-[600px] shadow-2xl">
            <CountryFlag key={Math.random()} country={country[0]} />
          </div>
          <div className="flex flex-col justify-between py-[2.5rem]">
            <CountryDetails key={Math.random()} country={country[0]} />
          </div>
        </section>
      )}
    </>
  );
}
