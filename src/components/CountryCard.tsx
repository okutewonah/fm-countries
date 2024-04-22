"use client";
import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";

const CountryCard = (props: any) => {
  return (
    <Card className="bg-white-mode-text dark:bg-dark-blue-dark w-[85vw] h-[360px] md:w-[300px] rounded transition ease-in-out duration-[2000ms] delay-[1500ms] hover:-translate-y-1 hover:scale-110 shadow-2xl">
      <CardHeader className="w-full h-[180px]">
        <Image
          className="rounded h-full w-full"
          src={props.country.flags.svg}
          alt={props.country.flags.alt}
          height={0}
          width={0}
          sizes="100vw"
        />
      </CardHeader>
      <CardContent className="p-4 flex flex-col">
        <h2 className="font-bold text-base my-4">
          {props.country.name.common}
        </h2>
        <p className="text-sm">
          <span className="font-semibold">Population: </span>
          {new Intl.NumberFormat().format(props.country.population)}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Region: </span>
          {props.country.region}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Capital: </span>
          {props.country.capital}
        </p>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
