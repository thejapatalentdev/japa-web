//@ts-nocheck

"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { SocialMedia } from "./course-content";
import autoAnimate from "@formkit/auto-animate";
import EmojiIcon from "@/assets/CoursesAssets/similey.svg";
import { DropdownIcon } from "./DropdownIcon";

const Outline2 = () => {
  const [openQuestion, setOpenQuestion] = useState(undefined);

  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);
  return (
    <div className="mx-auto lg:mx-0 mb-5 flex flex-col gap-[22px]">
      {SocialMedia.map((question, index) => (
        <div
          className="rounded-[15px] flex flex-col text-[#3D3D3D] bg-white shadow  text-lg lg:text-[22px]"
          key={index}
          ref={parentRef}
        >
          {/* Question */}
          <div
            className="py-[25px] pl-[15px] pr-[29px] flex items-center justify-between"
            onClick={() =>
              openQuestion === index
                ? setOpenQuestion(undefined)
                : setOpenQuestion(index)
            }
          >
            <div className="flex items-center gap-[26px] cursor-pointer flex-wrap">
              <Image src={EmojiIcon} alt="" />
              <p>{question.question}</p>
            </div>
            <div>
              <DropdownIcon
                className={
                  openQuestion === index
                    ? "duration-500 rotate-180"
                    : "duration-500 rotate-0"
                }
              />
            </div>
          </div>

          {/* Answer */}
          {openQuestion === index && (
            <div className="pt-0 p-[48px] ">
              {SocialMedia.map((answer) => (
                <li key={answer.question} className="px-4 mb-4">
                  {answer.question}
                </li>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Outline2;
