"use client";
import { NextPage } from "next";
import Borders from "./Borders";

interface Props {
  country: any;
}

const CountryDetails: NextPage<Props> = ({ country }) => {
  let countryNativeNameKeys = Object.keys(country?.name?.nativeName);
  return (
    <>
      <div>
        <h1 className="text-very-dark-blue-light dark:text-white-mode-text">
          {country.name.common}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-sm">
            <span className="font-semibold">Native Names: </span>
            {/* {countryNativeNameKeys.map(
                (item) =>
                  // let nativeName = country.name.nativeName[item]
                  country.name.nativeName[item].common
              )} */}
            {country.name.nativeName[countryNativeNameKeys[0]].official}
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
      <div className="flex mt-12 md:mt-3">
        <p className="text-sm my-auto">Border Countries:</p>

        {!country.borders ? (
          <p className="mx-2 text-sm py-2 px-3 rounded text-very-dark-blue-light dark:text-white-mode-text bg-white-mode-text dark:bg-dark-blue-dark">
            Definitely an Island
          </p>
        ) : (
          <div className="flex flex-wrap gap-3">
            {country.borders.map((border: any) => (
              <Borders key={Math.random()} borderCode={border} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CountryDetails;
