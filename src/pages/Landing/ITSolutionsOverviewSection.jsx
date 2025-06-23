import React from "react";
import { Img, Heading, Text } from "../../components";

export default function ITSolutionsOverviewSection() {
  return (
    // <div className="flex items-center gap-3.5 lg:gap-3 md:flex-col md:gap-8">
    //       <div className="relative h-[674px] w-[72%] lg:h-[650px] md:h-auto md:w-full md:px-5">

    //         <div className="relative left-1 top-0 my-auto ml-auto mr-[102px] flex h-[677px] flex-1 items-start justify-center bg-[url(/public/images/img_group_10.png)] bg-cover bg-no-repeat p-[18px] lg:mr-[80px] lg:h-[650px] md:mr-0 md:h-[500px] md:w-full sm:h-[180px] sm:left-[-20px] xs:h-[400px]">

    <div className="w-full bg-white-to-f8 font-dmsans relative overflow-hidden items-center gap-3.5 lg:gap-3 md:flex-col md:gap-8">
      <div className="text-center mt-[80px] px-4 z-10 relative w-60% m-auto w-[72%]">
        <Heading
          size="text5xl"
          as="p"
          className="mt-2 text-[#035F5A] text-[50px] sm:text-[32px] md:text-[32px] tracking-[-1px]"
        >
          Comprehensive IT Solutions to Power Your Digital Growth
        </Heading>
        <Heading
          size="textlg"
          as="p"
          className="m-auto w-[60%] text-center text-[14px] font-semibold leading-[150%] tracking-[-0.56px] !text-gray-800_99 lg:w-[65%] md:mr-0 md:w-[90%] sm:w-full xs:text-[12px]"
        >
          From web development to cloud services, we offer end-to-end IT
          expertise to simplify operations and accelerate innovation for
          businesses of all sizes.
        </Heading>
      </div>

      <div className="relative py-12 px-4 sm:px-6 md:px-12 mb-[100px] mx-auto">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <Img
            src="/images/img_vector_14.png"
            alt="Left Vector"
            className="absolute left-0 top-0 h-full w-auto object-contain"
          />
        </div>

        <div className="relative z-10 flex justify-center gap-6 flex-wrap">
          {/* Static Service Cards */}
          {[
            {
              icon: "/images/mage_box-3d.png",
              title: "Software Development",
              content:
                "Robust, scalable software tailored to your business needs.",
            },
            {
              icon: "/images/ri_code-ai-fill.png",
              title: "UI/UX",
              content:
                "User-first designs that blend aesthetics with functionality.",
            },
            {
              icon: "/images/mdi_cart-outline.png",
              title: "DevOps",
              content:
                "Streamlined deployment and infrastructure for faster releases.",
            },
            {
              icon: "/images/mingcute_performance-line.png",
              title: "Staff Augmentation",
              content:
                "On-demand tech talent to scale your team quickly and efficiently.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white-a700 rounded-[20px] shadow-lg p-6 w-[300px] min-h-[240px] flex flex-col items-start justify-start hover:scale-105 transition-transform duration-300"
            >
              <div className="w-10 h-10 bg-green-950 rounded-[8px] flex items-center justify-center mb-4">
                <Img src={card.icon} alt="Card Icon" className="w-5 h-5" />
              </div>
              <Heading
                as="h3"
                className="text-[20px] font-medium tracking-[-0.80px] text-[#035F5A] mb-2"
              >
                {card.title}
              </Heading>
              <Text className="text-sm text-[#4A4A4A] leading-[1.6] sm:text-sm md:text-sm">
                {card.content}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
