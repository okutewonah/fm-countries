"use client";
import CountryDetails from "@/components/CountryDetails";
import { fetchCountry } from "@/utils/requests";
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
    console.log(country);
  }, [cca3, country]);

  return (
    <>
      <section>
        <a
          href="/"
          className="py-2 px-8 rounded text-very-dark-blue-light dark:text-white-mode-text bg-white-mode-text dark:bg-dark-blue-dark"
        >
          Back
        </a>
      </section>
      {country && (
        <section className="mt-[5rem] text-very-dark-blue-light dark:text-white-mode-text flex justify-between">
          <CountryDetails country={country[0]} />
        </section>
      )}
    </>
  );
}
