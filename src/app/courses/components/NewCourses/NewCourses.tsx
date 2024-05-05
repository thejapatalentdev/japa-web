import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "./Card";

export default function NewCourses() {
  return (
    <div className="Jcontainer w-full flex justify-center flex-col text-black ">
      <div className="mb-8">
        <h1 className="text-2xl md:text-4xl my-12 lg:text-5xl font-bold mb-4">
          A broad selection of courses
        </h1>
        <p className="lg:text-2xl md:text-2xl lg:px-0 md:px-0">
          Learn skills to be more competitive in top industries without limits
        </p>
      </div>
      <div className="flex justify-between my-8">
        <h2 className="lg:text-4xl md:text-4xl sm:text-2xl px-0 mb-4 md:mb-6 lg:mb-8 text-lg lg:px-0 font-semibold">
          Newly Added Courses
        </h2>
      </div>
      <Card />
    </div>
  );
}
