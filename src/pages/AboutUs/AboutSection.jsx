import { Img } from "../../components";
import React from "react";

export default function AboutSection() {
  return (
    <div className="w-screen overflow-hidden m-0 p-0 relative">

      <div className="relative w-screen h-[637px] sm:h-[350px] xs:h-[300px]">
        <Img
          src="images/img_rectangle4.svg"
          alt="Background"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-0 right-0 flex flex-col items-end">
          <Img
            src="images/img_vector_about_1.png"
            alt="Vector"
            className="md:w-[240px] sm:w-[240px] xs:w-[80px] h-auto"
          />
           <h2 className="absolute bottom-8 left-8 text-[#FFFFFF] text-4xl sm:text-2xl xs:text-xl">
          About Us
        </h2>
        </div>
      </div>
    </div>
  );
}
