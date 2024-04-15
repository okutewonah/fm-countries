"use client";
import { NextPage } from "next";
import Link from "next/link";

interface Props {
  border: any;
}

const BorderLinks: NextPage<Props> = ({ border }) => {
  return (
    <Link
      className="mx-2 text-sm py-2 px-3 rounded text-very-dark-blue-light dark:text-white-mode-text bg-white-mode-text dark:bg-dark-blue-dark"
      href={border.cca3}
    >
      {border.name.common}
    </Link>
  );
};

export default BorderLinks;
