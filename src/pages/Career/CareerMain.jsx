import { Img } from "../../components";
import React from "react";

export default function CareerMain() {
  return (
    <div className="bg-green-950 w-full overflow-hidden m-0 p-0 relative">
      <div className="relative w-screen h-[637px] sm:h-[350px] xs:h-[300px]">
        <div className="w-full  h-full">
          <Img
            src="images/carrer_image.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        {/* <div className="absolute top-0 right-0 flex flex-col items-end">
          <Img
            src="images/img_vector_gray_300.png"
            alt="Vector"
            className="w-[400px] sm:w-[200px] xs:w-[80px] h-auto"
          />
          <h2 className="absolute bottom-8 left-8 text-green-950 text-4xl sm:text-2xl xs:text-xl">
            Career
          </h2>
        </div> */}
      </div>
    </div>
  );
}
