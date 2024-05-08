"use client";
import Image from "next/image";
import JapaLogo from "@/assets/CoursesAssets/JapaLogo.svg";
import SearchBar from "./SearchBar";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import React, { useState } from "react";
import { serviceDropdown } from "./NavItems";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [navState, setNavState] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  function handleNavStateChange() {
    setNavState((prevState) => !prevState);
  }

  function handleLinkClick() {
    setNavState(false);
  }

  return (
    <header className="flex items-center justify-center h-[17vh] w-full bg-white border-b border-gray-100">
      <div className="w-full flex justify-between md:flex-row lg:flex-row gap-4 items-center Jcontainer">
        <div
          onClick={handleNavStateChange}
          className="z-10 cursor-pointer lg:hidden"
        >
          <div className="flex h-full">
            <FontAwesomeIcon
              icon={faBars}
              className="flex text-[#7232fa] text-[1.5rem] sm:text-[1.7rem] md:text-[2rem]"
            />
          </div>
        </div>
        <Link href="/#">
          <Image src={JapaLogo} width={100} height={100} alt="JapaLogo" />
        </Link>

        <nav className="flex">
          <div
            className={`fixed z-50 inset-0 bg-[#cbb1ef] h-[100vh] w-[75%] md:w-[60%] p-0 md:pl-8 flex flex-col ${
              navState ? "translate-x-[0%]" : "translate-x-[-100%]"
            } pt-28 gap-5 transition-all lg:static lg:flex-row lg:w-[unset] lg:h-[unset] lg:bg-[unset] lg:pt-0 lg:translate-x-[unset]`}
          >
            <Link
              href="https://docs.google.com/forms/d/1OsZ5mkU3BAB0Cfv_BmcrlCjU7ZUGKm22GSWtSRT7px4/viewform?ref=dishapages&edit_requested=true"
              target="_blank"
              className="mt-6 hover:text-[#7232fa]"
              onClick={handleLinkClick}
            >
              <h3 className="text-xl pl-4 lg:mr-16">Cv Revamp</h3>
            </Link>

            <div className="z-50 relative flex flex-col items-center w-[220px] md:w-[340px] rounded-lg">
              <button
                onClick={toggleDropdown}
                className="lg:text-xl bg-[#cbb1ef] p-4 w-full flex items-center justify-between font-medium text-lg rounded-lg tracking-wider border md:border-2 lg:border-4 border-transparent active:border-white duration-300 active:text-white"
              >
                Courses
                {!isOpen ? (
                  <AiOutlineCaretUp className="h-8" />
                ) : (
                  <AiOutlineCaretDown className="h-8" />
                )}
              </button>
              {isOpen && (
                <div className="bg-purple-400 text-[#000406] absolute top-20 flex flex-col item-start rounded-lg p-2 w-full shadow-lg">
                  {serviceDropdown.map((item) => (
                    <Link
                      href={item.path}
                      onClick={handleLinkClick}
                      key={item.id}
                      className="font-mdeium text-[#000406] hover:text-white lg:text-xl py-4 px-2 flex justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4 "
                    >
                      <h3>{item.title}</h3>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>
        <div
          onClick={handleNavStateChange}
          className={`overflow fixed z-[40] lg:hidden inset-0 h-[100vh] w-full bg-opaque transition-all ${
            navState
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        ></div>
        <SearchBar />
      </div>
    </header>
  );
}
