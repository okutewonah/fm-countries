"use client";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {
  country: any;
}

const CountryDetails: NextPage<Props> = ({ country }) => {
  let countryNativeNameKeys = Object.keys(country?.name?.nativeName);
  return (
    <>
      <div className="h-[360px] w-[600px] shadow-2xl">
        <Image
          className="h-full w-full"
          src={country.flags.svg}
          alt={country.flags.alt}
          height={0}
          width={0}
          sizes="100vw"
        />
      </div>
      <div className="flex flex-col justify-between py-[2.5rem]">
        <div>
          <h1 className="text-very-dark-blue-light dark:text-white-mode-text">
            {country.name.common}
          </h1>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-sm">
              <span className="font-semibold">Native Names: </span>
              {countryNativeNameKeys
                .map(
                  (item) =>
                    // let nativeName = country.name.nativeName[item]
                    country.name.nativeName[item].common
                )
                .join(", ")}
              {/* {country.name.nativeName[countryNativeNameKeys[1]].common} */}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Population: </span>
              {Intl.NumberFormat().format(country.population)}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Region: </span>
              {country.region}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Sub Region: </span>
              {country.subregion}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Capital: </span>
              {country.capital}
            </p>
          </div>
          <div>
            <p className="text-sm">
              <span className="font-semibold">Top Level Domain: </span>
              {country.tld}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Currencies: </span>
              {Object.keys(country.currencies)
                .map((currency: any) => country.currencies[currency].name)
                .join(", ")}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Languages: </span>
              {Object.keys(country.languages)
                .map((lang: any) => country.languages[lang])
                .join(", ")}
            </p>
          </div>
        </div>
        {!country.borders ? (
          <p>Definitely an Island</p>
        ) : (
          <div className="flex">
            <p className="text-sm my-auto">Border Countries:</p>
            <div className="grid grid-cols-5 gap-2">
              {country.borders.map((border: any) => (
                <Link
                  className="mx-2 text-sm py-2 px-3 rounded text-very-dark-blue-light dark:text-white-mode-text bg-white-mode-text dark:bg-dark-blue-dark"
                  href={`/${border}`}
                >
                  {border}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CountryDetails;
