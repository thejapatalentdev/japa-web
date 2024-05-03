import React from "react";
import Button from "../Button/Button";
import Link from "next/link";
// import { mainVideoLink } from '@/functions/variables';

const GetStartedButton = () => {
  return (
    <Link href="https://japa-courses-q1sg.vercel.app/">
      <Button className="!h-[76px] !w-[200px]">Get started</Button>
    </Link>
  );
};

export default GetStartedButton;
