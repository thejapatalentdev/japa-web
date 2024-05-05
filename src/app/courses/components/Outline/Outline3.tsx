//@ts-nocheck

"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { DataAnalysis } from "./course-content";
import autoAnimate from "@formkit/auto-animate";
import EmojiIcon from "@/assets/CoursesAssets/similey.svg";

const Outline3 = () => {
  const [openQuestion, setOpenQuestion] = useState(undefined);

  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);
  return (
    <div className="mb-5 flex flex-col gap-[22px]">
      {DataAnalysis.map((item, index) => (
        <div
          className="rounded-[15px] flex flex-col border-[0.3px] border-[#5F5E5E] text-[#3D3D3D] bg-white shadow  text-lg lg:text-[22px]"
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
              <p>{item.question}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Outline3;
