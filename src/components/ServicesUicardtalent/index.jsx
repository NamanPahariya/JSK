import { Heading, Img } from "./..";
import React from "react";

export default function ServicesUicardtalent({ title, description, points = [], ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-full px-7 py-[30px] sm:p-5 bg-gray-100_01 rounded-[16px]`}
      data-aos="zoom-in-up"
      data-aos-duration="1100"
    >
      <Heading
        size="text6xl"
        as="p"
        className="!font-dmsans text-[22px] font-medium tracking-[-0.88px] !text-cyan-900 sm:text-[18px]"
      >
        {title}
      </Heading>
      <Heading
        size="textlg"
        as="p"
        className="mt-3 w-[74%] text-[14px] font-normal leading-[150%] tracking-[-0.56px] !text-gray-800_99 sm:w-full"
      >
        {description}
      </Heading>
      <div className="mt-6 flex flex-col gap-2.5 self-stretch sm:gap-2.5">
        {points.map((point, idx) => (
          <div className="flex items-center gap-2" key={idx}>
            <Img src="images/img_ci_check_all.svg" alt={point} className="h-[24px]" />
            <Heading as="p" className="text-[16px] font-medium tracking-[-0.64px] sm:text-[13px]">
              {point}
            </Heading>
          </div>
        ))}
      </div>
    </div>
  );
}
