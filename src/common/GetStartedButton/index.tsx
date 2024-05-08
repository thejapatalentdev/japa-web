import React from "react";
import Button from "../Button/Button";
import Link from "next/link";
// import { mainVideoLink } from '@/functions/variables';

const GetStartedButton = () => {
  return (
    <Link
      href="https://www.japatalent.com/courses"
      target="_blank"
      rel="noreferrer noopener"
    >
      <Button className="!h-[76px] !w-[200px]">Get started</Button>
    </Link>
  );
};

export default GetStartedButton;
