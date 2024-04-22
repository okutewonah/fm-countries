"use client";
import { NextPage } from "next";
import Link from "next/link";
import { Button } from "./ui/button";

interface Props {
  border: any;
}

const BorderLinks: NextPage<Props> = ({ border }) => {
  return (
    <Button
      className="mx-2 text-sm py-2 px-3 rounded text-very-dark-blue-light hover:text-white dark:text-white-mode-text bg-white-mode-text dark:bg-dark-blue-dark"
      asChild
    >
      <Link prefetch={false} href={border.cca3}>
        {border.name.common}
      </Link>
    </Button>
  );
};

export default BorderLinks;
