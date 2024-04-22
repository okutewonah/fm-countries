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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryData = async () => {
      if (!borderCode) return;
      try {
        const countryData = await fetchCountry(borderCode);
        setBorder(countryData);
      } catch (error) {
        console.log("Error fetching country", error);
      } finally {
        setLoading(false);
      }
    };
    if (border === null) {
      fetchCountryData();
    }
  }, []);
  return loading ? (
    <p className="mx-2 text-sm py-2 px-3 rounded text-very-dark-blue-light dark:text-white-mode-text bg-white-mode-text dark:bg-dark-blue-dark">
      Loading
    </p>
  ) : (
    <>{border && <BorderLinks key={Math.random()} border={border[0]} />}</>
  );
};

export default Borders;
