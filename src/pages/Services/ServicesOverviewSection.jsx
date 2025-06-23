import { Heading, Img, Button, Text } from "../../components";
import React from "react";

export default function ServicesOverviewSection() {
  return (
    <>
      {/* services overview section */}
      <div className="relative bg-gray-100_01">
        <div className="container mx-auto px-4 py-16 md:py-12 sm:py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left side content */}
            <div className="flex flex-col w-full lg:w-1/2 space-y-8 z-10 pl-8 md:pl-12 lg:pl-16">
              <div>
                <Button
                  color="gray_200"
                  shape="round"
                  className="min-w-[208px] rounded-[16px] px-6 font-hankengrotesk font-medium tracking-[-0.32px] sm:px-5"
                >
                  Expert Talent Solutions
                </Button>
              </div>
              
              <Text
                as="p"
                className="text-6xl font-light tracking-[-2.43px] md:text-5xl sm:text-4xl"
              >
                Staff Augmentation
              </Text>
              
              <Heading
                as="h1"
                className="text-base font-normal leading-[140%] tracking-[-0.64px] text-gray-800 max-w-lg"
              >
                Discover our range of services designed to optimize talent acquisition, development, and retention
              </Heading>
              
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <Img src="images/img_ci_check_all.svg" alt="Cicheckall" className="h-6 w-6" />
                  <Heading as="h2" className="text-base font-medium tracking-[-0.64px]">
                    Better Talent fit
                  </Heading>
                </div>
                <div className="flex items-center gap-2">
                  <Img src="images/img_ci_check_all.svg" alt="Cicheckall" className="h-6 w-6" />
                  <Heading as="h3" className="text-base font-medium tracking-[-0.64px]">
                    Enhanced Hiring Quality
                  </Heading>
                </div>
                <div className="flex items-center gap-2">
                  <Img src="images/img_ci_check_all.svg" alt="Cicheckall" className="h-6 w-6" />
                  <Heading as="h4" className="text-base font-medium tracking-[-0.64px]">
                    Reduced Turnover
                  </Heading>
                </div>
              </div>
            </div>
            
            {/* Right side image */}
            <div className="relative w-full lg:w-1/2 h-[436px]">
              <Img
                src="images/img_rectangle_4_436x568.png"
                alt="Services image"
                className="rounded-[16px] object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        
        {/* Background elements */}
        <Img
          src="images/img_vector_332x934.png"
          alt="Vector"
          className="absolute bottom-0 right-0 z-0 h-[332px] w-1/2 object-contain"
        />
        <Img
          src="images/img_vector_gray_300.png"
          alt="Vector"
          className="absolute right-0 top-0 z-0 h-[270px] w-1/4 object-contain"
        />
      </div>
    </>
  );
}