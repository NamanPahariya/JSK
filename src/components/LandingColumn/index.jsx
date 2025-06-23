import { Heading, Img, Button } from "./..";
import React from "react";

export default function LandingColumn({ index = 1, title, description, ...props }) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-[32%] md:w-full gap-3.5`}>
      <div className="flex flex-col items-start self-stretch gap-5 sm:mt-20">
        <Button
          color="white_A700_02"
          size="xs"
          className="min-w-[28px] rounded-lg px-2.5 font-medium tracking-[-0.48px]"
        >
           {index}
        </Button>
        <Img src="images/img_group_1.svg" alt="Image" className="w-full h-px" />
      </div>
      <div className="flex flex-col items-start justify-center gap-1.5 self-stretch ">
        <Heading size="headinglg" as="h5" className="text-[20px] font-semibold tracking-[-0.80px] !text-white-a700_02">
         {title}
        </Heading>
        <Heading
          size="headings"
          as="p"
          className="w-full text-[14px] font-semibold leading-[150%] tracking-[-0.56px] !text-white-a700_02"
        >
          {description}
        </Heading>
      </div>
    </div>
  );
}
