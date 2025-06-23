import React from "react";
import { Img, Heading, Text } from "../../components";
import { useParams } from "react-router-dom";
import serviceData from "../../components/Data/servicedata";

const Developmentdiv = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];
  return (
    <div className="bg-green-950 relative pb-20 px-6 sm:px-8 md:px-12  text-white overflow-hidden">
      <div className="w-full flex justify-center items-center">
        <div className="h-[207px] w-[900px] md:w-[500px] sm:w-[400px] xs:w-[500px] ">
          <Img
            src="/images/img_vector_dev.png"
            alt="Background"
            className="w-full h-full object-cover block"
          />
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto -mt-[80px] flex sm-flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full">
          <Heading
            size="textlg"
            as="h3"
            className="self-start text-[45px] font-medium tracking-[-0.56px] text-white-a700 mb-[10px]"
          >
            {service.title}
          </Heading>

          <Text className="text-sm sm:text-sm md:text-sm text-gray-300 mb-[10px]">
            {service.description}
          </Text>

          <ul className="space-y-3 text-sm">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center text-white-a700">
                <span className="mr-2 text-lg text-white-a700">✔</span>{" "}
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full sm:hidden  h-full">
          <Img
            src= {service.image}
            alt= {service.title}
            className="w-full  h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Developmentdiv;
