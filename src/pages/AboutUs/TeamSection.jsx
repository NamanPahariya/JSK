import React, { useEffect, useRef } from "react";
import { Heading, Img, Text } from "../../components";
// const teamMembers = [
//   {
//     title: "Rose Jack",
//     position: "CEO",
//     image: "https://randomuser.me/api/portraits/women/1.jpg",
//     content: "Personalised solutions tailored to your business needs.",
//   },
//   {
//     title: "Alex John",
//     position: "Founder",
//     image: "https://randomuser.me/api/portraits/men/2.jpg",
//     content: "We connect you with the best talent quickly.",
//   },
//   {
//     title: "Jimmy Louis",
//     position: "Sr. Developer",
//     image: "https://randomuser.me/api/portraits/men/3.jpg",
//     content: "Efficient and scalable engineering solutions.",
//   },
//   {
//     title: "Emma Watson",
//     position: "UI Designer",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//     content: "Clean, user-centric interface designs.",
//   },
// ];
// const repeatedTeam = [...teamMembers, ...teamMembers, ...teamMembers];
export default function TeamSection() {
  // const scrollRef = useRef(null);
  // const cardRef = useRef(null);
  // const getCardWidth = () => {
  //   if (cardRef.current) {
  //     return cardRef.current.offsetWidth + 16;
  //   }
  //   return 0;
  // };
  // useEffect(() => {
  //   const container = scrollRef.current;
  //   const scrollToMiddle = () => {
  //     const middle = container.scrollWidth / 3;
  //     container.scrollLeft = middle;
  //   };
  //   scrollToMiddle();
  // }, []);
  // const handleScroll = () => {
  //   const container = scrollRef.current;
  //   const totalWidth = container.scrollWidth;
  //   const middle = totalWidth / 3;
  //   const cardWidth = getCardWidth();
  //   const maxScroll = middle + cardWidth * repeatedTeam.length;
  //   if (container.scrollLeft <= cardWidth) {
  //     container.scrollLeft += middle;
  //   } else if (container.scrollLeft >= totalWidth - middle) {
  //     container.scrollLeft -= middle;
  //   }
  // };

  //   useEffect(() => {
  //   const container = scrollRef.current;
  //   const scrollToMiddle = () => {
  //     const middle = container.scrollWidth / 3;
  //     container.scrollLeft = middle;
  //   };
  //   scrollToMiddle();

  //   const interval = setInterval(() => {
  //     handleNext();
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  //   const handleNext = () => {
  //   const container = scrollRef.current;
  //   const cardWidth = getCardWidth();
  //   const totalWidth = container.scrollWidth;
  //   const middle = totalWidth / 3;
  //   if (container.scrollLeft >= totalWidth - middle - cardWidth) {
  //     container.scrollLeft = container.scrollLeft - middle;
  //   }
  //   container.scrollBy({ left: cardWidth, behavior: "smooth" });
  // };
  // const handlePrev = () => {
  //   const container = scrollRef.current;
  //   const cardWidth = getCardWidth();
  //   const totalWidth = container.scrollWidth;
  //   const middle = totalWidth / 3;
  //   if (container.scrollLeft <= cardWidth) {
  //     container.scrollLeft = container.scrollLeft + middle;
  //   }
  //   container.scrollBy({ left: -cardWidth, behavior: "smooth" });
  // };

  return (
    // <div className="w-full bg-[#F7F7F7] font-dmsans relative pb-16 overflow-hidden">
    //    <Heading
    //     size="text10xl"
    //     as="h2"
    //     className="mt-[122px] max-w-[700px] mx-auto px-4 text-center text-[46px] font-medium leading-[130%] tracking-[-1.84px] text-[#035F5A]
    //        lg:mt-[122px] md:mt-16 md:text-[38px] sm:mt-12 sm:text-[32px] xs:text-[28px]"
    //   >
    //     Meet Our Team
    //   </Heading>
    //   <div className="relative py-12 px-4 mx-auto z-10">
    //     <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
    //       <Img
    //         src="images/img_vector_15.2.png"
    //         alt="Left Vector"
    //         className="absolute left-0 top-0 h-full w-auto object-contain"
    //       />
    //       <Img
    //         src="images/img_vector_15.3.png"
    //         alt="Right Vector"
    //         className="absolute right-0 top-0 h-full w-auto object-contain"
    //       />
    //     </div>
    //   <div className="relative py-12 px-4 mx-auto max-w-[990px]">
    //     <button
    //       onClick={handlePrev}
    //       className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 text-xl bg-[#FFFFFF] shadow rounded-full w-10 h-10 flex items-center justify-center"
    //     >
    //       ‹
    //     </button>
    //     <button
    //       onClick={handleNext}
    //       className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 text-xl bg-[#FFFFFF] shadow rounded-full w-10 h-10 flex items-center justify-center"
    //     >
    //       ›
    //     </button>
    //      <div
    //      className="overflow-hidden mx-auto px-4 w-[795px] md:w-[530px] sm:w-[270px] xs:w-[500px]"
    //       onScroll={handleScroll}
    //       ref={scrollRef}
    //     >
    //       <div className="flex gap-4 w-max transition-all duration-300 ease-in-out">
    //         {repeatedTeam.map((member, index) => (
    //           <div
    //             ref={index === 0 ? cardRef : null}
    //             key={index}
    //             className="bg-[#FFFFFF] rounded-xl p-6 shadow-md text-center w-[250px] xs:w-[150px] flex-shrink-0"
    //           >
    //             <img
    //               src={member.image}
    //               alt={member.title}
    //               className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
    //             />
    //             <Heading as="h3" className="text-lg font-bold text-[#035F5A]">
    //               {member.title}
    //             </Heading>
    //              <Text className="text-sm sm:text-sm md:text-sm text-gray-500 mb-2">{member.position}</Text>
    //               <Text className="text-sm sm:text-sm md:text-sm text-blue_gray-700 leading-relaxed">
    //                 {member.content}
    //               </Text>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // </div>

    <div className="w-full flex justify-center items-start min-h-screen bg-white px-6 py-8 relative">
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
            <Heading
              as="h2"
              className="text-[#035F5A] text-[50px] sm:text-[32px] md:text-[32px] tracking-[-1px] mb-[20px]"
            >
              About Our Services
            </Heading>
          </div>
          <Text className="text-center text-base sm:text-sm md:text-sm text-blue_gray-700 leading-relaxed px-4 mx-auto">
            Explore how we drive digital transformation across industries with
            innovation, intelligence, and impact.
          </Text>
          {/* Single About Content Section */}
          <div className="bg-white p-5 md:p-16 rounded-2xl shadow-2xl max-w-5xl px-6 sm:px-4 m-auto">
            <Text className="text-gray-700 text-lg  sm:text-base leading-relaxed sm:leading-normal text-justify sm:px-2">
              At JSK, we take pride in offering a wide range of services that
              are carefully crafted to support individuals, startups, and
              established businesses in achieving their unique goals. Our team
              of experienced professionals is dedicated to understanding your
              vision and delivering tailored solutions that combine creativity,
              technology, and strategy. From web development and mobile app
              creation to digital marketing and business consulting, we approach
              every project with a strong emphasis on quality, innovation, and
              customer satisfaction. We believe in building long-term
              partnerships with our clients, which is why we focus on clear
              communication, transparency, and continuous improvement throughout
              the entire process. Whether you're looking to launch a new
              product, enhance your digital presence, or streamline your
              operations, our services are designed to bring measurable results
              and real value. With a passion for excellence and a commitment to
              staying ahead of industry trends, we ensure that you always
              receive modern, scalable, and effective solutions tailored
              specifically to your needs.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
