import React from "react";
import { useParams } from "react-router-dom";
import serviceData from "components/Data/servicedata";
import { Img, Heading, Text, Button } from "../../components";

const ServicesDescription = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId] || {};

  return (
    <div className="flex justify-center items-start min-h-screen bg-white px-6 py-12 relative">
      <div className="absolute inset-0 w-full h-full -z-1 pointer-events-none">
        <Img
          src="/images/img_vector_15.1.png"
          alt="Right Vector"
          className="absolute right-0 top-0 h-full w-auto object-contain"
        />
      </div>
        <div className="w-full font-dmsans relative overflow-hidden space-y-6">
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
          className="mt-2 text-[#035F5A] text-[50px] sm:text-[32px] md:text-[32px] tracking-[-1px] w-full text-center"
          >
            {service.title || "Service Details"}
          </Heading>

          {service.subheading && (
            <Text
              className="text-center text-base sm:text-sm md:text-sm text-blue_gray-700 leading-relaxed px-4 mx-auto"
              data-aos="fade-up"
            >
              {service.subheading}
            </Text>
          )}
        </div>
        {/* Description */}
        <div className="bg-white p-5 md:p-16 rounded-2xl shadow-2xl max-w-5xl px-6 sm:px-4 m-auto">
          <Text className="text-gray-700 text-lg  sm:text-base leading-relaxed sm:leading-normal text-justify sm:px-2">
            {service.para || "No description available for this service."}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ServicesDescription;
