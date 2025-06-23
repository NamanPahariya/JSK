import React from "react";
import { Img, Heading, Text, Button } from "../../components";
import { useParams } from "react-router-dom";
import serviceData from "../../components/Data/servicedata";

export default function OurServices() {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];
  return (
    <div className="w-full bg-white-to-f8 font-dmsans relative overflow-hidden">
      <div className="text-center mt-[80px] px-4 z-10 relative">
        <div className="flex justify-center ">
          <Button
            color="gray_200"
            shape="round"
            className="min-w-[134px] rounded-[16px] px-6 font-hankengrotesk font-semibold tracking-[-0.32px] sm:px-5"
            data-aos="fade-up"
          >
            Our Services
          </Button>
        </div>

        <Heading
          as="h2"
          className="mt-2 text-[#035F5A] text-[50px] sm:text-[32px] md:text-[32px] tracking-[-1px]"
        >
          {service.heading}
        </Heading>

        <Text className="text-center text-base sm:text-sm md:text-sm text-blue_gray-700 leading-relaxed mt-2 px-4 max-w-1xl mx-auto">
          {service.subheading}
        </Text>
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
          {service.cards?.map((card, index) => (
            <div
              key={index}
              className="bg-white-a700 rounded-[20px] shadow-lg p-6 w-[300px] min-h-[240px] flex flex-col items-start justify-start hover:scale-105 transition-transform duration-300"
            >
              <div className="w-10 h-10 bg-green-950 rounded-[8px] flex items-center justify-center mb-4">
                <Img src={card.icon} alt="Card Icon" className="w-5 h-5" />
              </div>

              <Heading
                as="h3"
                className="text-[18px] font-semibold text-[#035F5A] mb-2"
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
