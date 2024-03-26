"use client";
import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";

const CountryCard = (props: any) => {
  return (
    <Card className="bg-white-mode-text dark:bg-dark-blue-dark h-[360px] w-[300px] rounded">
      <CardHeader className="w-full h-[180px]">
        <Image
          className="rounded-t h-full w-full"
          src={props.country.flags.png}
          alt=""
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
          {props.country.population}
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
