"use client";
import { NextPage } from "next";
import Image from "next/image";

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
              <span className="font-semibold">Native Name: </span>
              {/* {
                countryNativeNameKeys.map(item => {
                    let nativeName = country.name.nativeName[item]
                    return <span>{nativeName.}</span>
                })
              } */}
              {country.name.nativeName[countryNativeNameKeys[0]].common}
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
              {Object.keys(country.currencies).map(
                (currency: any) => country.currencies[currency].name
              )}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Languages: </span>
              {Object.keys(country.languages).map(
                (lang: any) => country.languages[lang]
              )}
            </p>
          </div>
        </div>
        <div className="flex">
          <p className="text-sm my-auto">Border Countries:</p>
          <a
            href="#"
            className="mx-2 text-sm py-2 px-3 rounded text-very-dark-blue-light dark:text-white-mode-text bg-white-mode-text dark:bg-dark-blue-dark"
          >
            France
          </a>
          <a
            href="#"
            className="mx-2 text-sm py-2 px-3 rounded text-very-dark-blue-light dark:text-white-mode-text bg-white-mode-text dark:bg-dark-blue-dark"
          >
            Germany
          </a>
          <a
            href="#"
            className="mx-2 text-sm py-2 px-3 rounded text-very-dark-blue-light dark:text-white-mode-text bg-white-mode-text dark:bg-dark-blue-dark"
          >
            Netherlands
          </a>
          <a
            href="#"
            className="mx-2 text-sm py-2 px-3 rounded text-very-dark-blue-light dark:text-white-mode-text bg-white-mode-text dark:bg-dark-blue-dark"
          >
            Luxembourg
          </a>
        </div>
      </div>
    </>
  );
};

export default CountryDetails;
