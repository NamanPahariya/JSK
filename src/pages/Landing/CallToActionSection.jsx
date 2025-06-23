import { Button, Heading, Img } from "../../components";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function CallToActionSection() {
    const navigate = useNavigate();
  return (
    <>
      {/* call to action section - Preserving original design with responsive enhancements */}
      <div>
        <div className="relative h-[498px] content-center bg-blue_gray-800 lg:h-[498px] md:h-auto">
          <div className="flex flex-1 items-start justify-center lg:items-start md:flex-col">
            <Heading
              size="text10xl"
              as="h2"
              className="mt-[122px] w-[44%] !font-dmsans text-[46px] font-medium leading-[130%] tracking-[-1.84px] !text-white-a700_02 lg:mt-[122px] lg:w-[44%] md:mt-16 md:w-full md:px-5 md:text-[38px] sm:mt-12 sm:text-[32px] xs:text-[28px]"
            >
              Start Building Your Scalable System Today
            </Heading>
            <Img
              src="images/img_rectangle_3.png"
              alt="Image"
              className="relative ml-[-34px] h-[498px] w-[48%] self-center object-contain lg:ml-[-34px] lg:h-[498px] lg:w-[48%] md:ml-0 md:w-full md:h-auto md:max-h-[400px] sm:max-h-[350px] xs:max-h-[300px]"
            />
          </div>
          <div className="absolute bottom-1/4 left-0 right-0 mx-[100px] flex flex-1 flex-col items-start gap-[34px] lg:bottom-1/4 lg:mx-[100px] md:static md:mx-5 md:mt-6 md:mb-10 sm:gap-6 xs:gap-4">
            <Heading
              size="headings"
              as="h3"
              className="text-[14px] font-semibold tracking-[-0.56px] !text-white-a700_02 md:text-[13px] xs:text-[12px]"
            >
              Take the first step towards a future-proof solution designed to grow with your business.
            </Heading>
            <div className="flex gap-[17px] self-stretch md:flex-wrap sm:gap-4 xs:flex-col">
              <Button
                size="6xl"
                className="min-w-[152px] rounded-[28px] border border-solid border-blue_gray-700 px-[33px] font-hankengrotesk font-semibold tracking-[-0.32px] sm:px-5 xs:w-full"
                onClick={() => navigate("/services#services")}
              >
                Get Started
              </Button>
              <Button
                color="white_A700_02"
                size="6xl"
                onClick={() => navigate("/services#services")}
                className="min-w-[216px] rounded-[28px] px-[34px] font-hankengrotesk font-semibold tracking-[-0.32px] !text-blue_gray-800_01 sm:px-5 xs:w-full"
              >
                Explore our Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
