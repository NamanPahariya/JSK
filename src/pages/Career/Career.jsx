import React from "react";

const Career = () => {
  return (
    <div className="relative  py-16 px-4 sm:px-6 lg:px-8 text-black">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-10 md:p-12 flex flex-col md:flex-column gap-10">
        
        {/* Left Column */}
        <div className="w-full">
          <p className="text-xl sm:text-2xl font-bold text-blue-800 mb-2">
            Openings
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Testing / QA Engineers
          </h1>
          <p className="text-base sm:text-lg font-medium text-gray-700 mb-4">
            Full Time: <span role="img" aria-label="location pin">📍</span> Centerville, OH
          </p>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed md:text-justify sm:text-justify">
            Participate in all aspects of testing a web application. Analyze business and system
            requirements. Write SQL queries. Use automated testing tools such as WinRunner and
            Selenium (Java) for regression testing. Some domestic travel required (5% of the time).
            Telecommuting permitted.
          </p>

          <div className="mt-6 sm:mt-8">
            <p className="text-sm sm:text-base font-medium text-gray-800">Send résumé to:</p>
            <div className="mt-2 space-y-1 text-sm sm:text-base text-gray-600">
              <p>JSK Tech Solution</p>
              <p>1440 Yankee Park Place</p>
              <p>Suite #B, Centerville</p>
              <p>Ohio 45458</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full flex justify-start ">
          <div className="bg-blue-100 rounded-lg p-4 sm:p-6 w-full max-w-sm shadow-md">
            <p className="font-semibold text-blue-900 text-sm sm:text-base">
              Job Title:
            </p>
            <p className="text-sm sm:text-base mt-1">
              Testing / QA Engineers
            </p>
            <p className="mt-4 font-semibold text-blue-900 text-sm sm:text-base">
              Location:
            </p>
            <p className="text-sm sm:text-base mt-1">
              Centerville, OH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
