import { fetchCountry } from "@/utils/requests";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import BorderLinks from "./BorderLinks";

interface Props {
  // country: any;
  borderCode: any;
}

const Borders: NextPage<Props> = ({ borderCode }) => {
  const [border, setBorder] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      if (!borderCode) return;
      try {
        const countryData = await fetchCountry(borderCode);
        setBorder(countryData);
      } catch (error) {
        console.log("Error fetching country", error);
      }
    };
    if (border === null) {
      fetchCountryData();
    }
  }, [borderCode, border]);
  return (
    <>{border && <BorderLinks key={Math.random()} border={border[0]} />}</>
  );
};

export default Borders;
