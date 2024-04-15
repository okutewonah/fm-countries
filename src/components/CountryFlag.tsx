import { NextPage } from "next";
import Image from "next/image";

interface Props {
  country: any;
}

const CountryFlag: NextPage<Props> = ({ country }) => {
  return (
    <Image
      className="h-full w-full"
      src={country.flags.svg}
      alt={country.flags.alt}
      height={0}
      width={0}
      sizes="100vw"
      priority
    />
  );
};

export default CountryFlag;
