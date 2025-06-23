import React from "react";
import { Img, Heading, Text, Button } from "../../components";

export default function OurStory() {
  return (
    <div className="w-full bg-white font-dmsans relative overflow-hidden">
      <div className="w-full flex justify-center items-center">
        <div className="h-[207px] w-[900px] md:w-[500px] sm:w-[400px] xs:w-[500px]">
          <Img
            src="images/img_mask_group_14.png"
            alt="Background"
            className="w-full h-full object-cover block"
          />
        </div>
      </div>

      <div className="text-center mt-[-80px] px-4 z-10 relative flex flex-col justify-center">
        <div className="flex justify-center mb-[5px]">
          <Button
            color="gray_200"
            shape="round"
            className="min-w-[134px] rounded-[16px] px-6 font-hankengrotesk font-semibold tracking-[-0.32px] sm:px-5"
            data-aos="fade-up"
          >
            Our Story
          </Button>
        </div>
        <div className="text-center flex flex-col justify-center w-[60%] mx-auto gap-5 sm:w-full">
          <Heading
            as="h2"
            className="text-[#035F5A] text-[40px] sm:text-[32px] font-semibold text-center"
          >
            Revolutionizing businesses with tailored strategies and results
          </Heading>

          <Heading
            size="headings"
            as="h3"
            className="text-center text-[14px] font-semibold leading-[150%] tracking-[-0.56px] !text-gray-800_99 lg:w-[65%] md:mr-0 md:w-[90%] sm:w-full xs:text-[12px]"
          >
            Explore the key pillars of our success that help businesses thrive
            by building strong teams and driving sustainable growth
          </Heading>
        </div>
      </div>

      <div className="relative py-12 px-50 mb-[100px] mx-auto">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <Img
            src="images/img_vector_14.png"
            alt="Left Vector"
            className="absolute left-0 top-0 h-full w-auto object-contain"
          />
        </div>

        <div className="relative z-10 flex justify-center gap-6 flex-wrap">
          {[
            {
              title: "About Us",
              content: `JSK Tech Solutions is a startup focused on staff augmentation and IT consulting. We connect businesses with top tech talent to drive innovation and growth.`,
            },
            {
              title: "Vision",
              content: `To become a global IT leader by transforming businesses with innovation, talent, and trusted partnerships.`,
            },
            {
              title: "Mission",
              content: `We provide expert IT solutions and flexible talent models, building lasting client relationships while fostering a culture of integrity and growth.`,
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${
                index === 1 ? "mt-0" : "mt-10"
              }`}
            >
              <div className="flex items-center self-stretch gap-5 mb-4 w-full ">
                <div
                  className="h-px flex-1 border-t rounded-[10px]"
                  style={{
                    borderImage:
                      "linear-gradient(90deg, rgba(31, 81, 76, 0) 0%, #1F514C 100%) 1",
                    borderTopWidth: "1px",
                    borderImageSlice: 1,
                  }}
                />
                <Button
                  size="xs"
                  className="bg-green-950 min-w-[28px] rounded-lg px-2.5 font-medium tracking-[-0.48px] text-[#FFFFFF]"
                >
                  {index + 1}
                </Button>
                <div
                  className="h-px flex-1 border-t rounded-[10px]"
                  style={{
                    borderImage:
                      "linear-gradient(90deg, #1F514C 0%, rgba(31, 81, 76, 0) 100%) 1",
                    borderTopWidth: "1px",
                    borderImageSlice: 1,
                  }}
                />
              </div>

              <div className="bg-white rounded-[20px] shadow-lg p-6 w-[300px] min-h-[240px] flex flex-col items-start justify-start transition-all hover:shadow-md">
                <Heading
                  as="h3"
                  className="text-lg font-bold text-[#035F5A] mb-3 text-center"
                >
                  {card.title}
                </Heading>
                <Text className="text-sm sm:text-sm md:text-sm text-blue_gray-700 leading-relaxed">
                  {card.content}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
