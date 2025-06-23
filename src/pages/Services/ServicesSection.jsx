import { Heading } from "../../components";
import ServicesUicardtalent from "../../components/ServicesUicardtalent";
import React, { Suspense } from "react";

export default function ServicesSection() {
  const cardData = [
    {
      title: "Flexible Team Expansion",
      description: "Easily scale your development team with vetted professionals who integrate seamlessly into your projects.",
      points: ["Quick Onboarding", "Seamless Integration", "High Retention"],
      linkText: "Explore More"
    },
    {
      title: "Top-tier Project Leaders",
      description: "Hire experienced project managers to lead your remote or hybrid teams and drive successful delivery.",
      points: ["Certified PMs", "Remote Ready", "Agile Expertise"],
      linkText: "Meet Our PMs"
    },
    {
      title: "Creative UX/UI Experts",
      description: "Access world-class designers to elevate user experience and bring visual impact to your product.",
      points: ["Modern Aesthetics", "User-Centered", "Cross-Platform"],
      linkText: "View Portfolios"
    },
    {
      title: "Specialized Recruitment",
      description: "Tailored hiring strategies to find niche tech talent that aligns perfectly with your organizational goals.",
      points: ["Custom Sourcing", "Faster Hiring", "Cultural Fit"],
      linkText: "Hire Smarter"
    }
  ];

  return (
    <>
      {/* services section */}
      <div className="flex flex-col items-center justify-center py-[100px] md:py-5">
        <div className="container-xs flex flex-col gap-[60px] md:px-5 sm:gap-[30px]">
          <div className="ml-[302px] mr-[312px] flex flex-col gap-5 md:mx-0" data-aos="fade-up" data-aos-duration="1000">
            <Heading
              size="text9xl"
              as="h2"
              className="text-center !font-dmsans text-[44.75px] font-medium leading-[111%] tracking-[-1.79px] !text-cyan-900 md:text-[40px] sm:text-[34px]"
            >
              Platform that matches business with top-tier talent
            </Heading>
            <Heading
              size="headings"
              as="h3"
              className="text-center text-[14px] font-semibold leading-[150%] tracking-[-0.56px] !text-gray-800_99"
            >
              We have provided Staff Augmentation Solutions to countless Fortune 500 and Global 1000 organizations over
              the past 25 years.
            </Heading>
          </div>
          <div className="grid grid-cols-2 justify-center gap-7 md:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {cardData.map((data, index) => (
                <ServicesUicardtalent key={"services" + index} {...data} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
