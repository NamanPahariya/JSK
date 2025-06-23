import React, { useState, useRef, useEffect } from "react";
import { Img, Heading, Text, Button, ChipView, Slider } from "../../components";

const cardData = [
  {
    title: "Resonat",
    description: "Minimal interface for food ordering",
    tags: ["Figma", "React", "Node.js"],
    image: "/images/img_rectangle_11.png",
  },
  {
    title: "Project 2",
    description: "A design system for scalable apps",
    tags: ["Vue", "Express", "MongoDB"],
    image: "/images/img_rectangle_11.png",
  },
  {
    title: "Project 3",
    description: "Elegant finance dashboard",
    tags: ["Angular", "NestJS", "PostgreSQL"],
    image: "/images/img_rectangle_11.png",
  },
];

const logoList = [
  "/images/img_git.png",
  "/images/img_sql.png",
  "/images/img_js.png",
  "/images/img_python.png",
  "/images/img_npm.png",
  "/images/img_html5.png",
  "/images/img_access-logo.png",
  "/images/img_github-filled.png",
  "/images/img_gitlab-filled.png",
  "/images/img_css3.png",
];

export default function Projects() {
  const scrollRef = useRef(null);
  const [sliderState, setSliderState] = useState(0);
  const sliderRef = useRef(null);
  const repeatedData = [...cardData, ...cardData, ...cardData];

  const getCardWidth = () => {
    const container = scrollRef.current;
    if (!container) return 0;
    const firstCard = container.querySelector(".scroll-card");
    return firstCard?.offsetWidth || 0;
  };

  const scrollRight = () => {
    const container = scrollRef.current;
    const cardWidth = getCardWidth();
    const totalWidth = container.scrollWidth;
    const middle = totalWidth / 3;

    if (container.scrollLeft >= totalWidth - middle - cardWidth) {
      container.scrollLeft = container.scrollLeft - middle;
    }

    container.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  const scrollLeft = () => {
    const container = scrollRef.current;
    const cardWidth = getCardWidth();
    const totalWidth = container.scrollWidth;
    const middle = totalWidth / 3;

    if (container.scrollLeft <= cardWidth) {
      container.scrollLeft = container.scrollLeft + middle;
    }

    container.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  // Scroll to middle on mount
  useEffect(() => {
    const container = scrollRef.current;
    const totalWidth = container.scrollWidth;
    const middle = totalWidth / 3;
    container.scrollLeft = middle;
  }, []);

  return (
    <div className="w-full bg-white font-dmsans relative overflow-hidden pb-20">
      {/* Header Section */}
      <div className="text-center mt-[80px] z-10 relative min-h-[50vh]">
        <div className="flex justify-center">
          <Button
            color="gray_200"
            shape="round"
            className="min-w-[134px] rounded-[16px] px-6 font-hankengrotesk font-semibold tracking-[-0.32px] sm:px-5"
            data-aos="fade-up"
          >
            Our Stack
          </Button>
        </div>
        <Heading
          as="h2"
          className="mt-5 text-[#035F5A] text-[40px] sm:text-[32px] font-semibold tracking-[-1px]"
        >
          Technologies we use
        </Heading>
        <Text className="text-center text-base sm:text-sm text-blue_gray-700 leading-relaxed mt-5 px-4 max-w-1xl mx-auto">
          We combine modern frameworks, proven stacks, and best practices to
          build secure, scalable, and high-performing digital products.
        </Text>

        <div className="relative w-full overflow-hidden bg-white mt-20">
          <div className="flex marquee-track whitespace-nowrap gap-20">
            {[...Array(3)].map((_, repeatIndex) =>
              logoList.map((src, i) => (
                <img
                  key={`logo-${repeatIndex}-${i}`}
                  src={src}
                  alt={`logo-${i}`}
                  className="h-12 w-auto mx-6 object-contain"
                  draggable="false"
                />
              ))
            )}
          </div>

          <style>{`
        .marquee-track {
          display: inline-flex;
          animation: marquee 10s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }
      `}</style>
        </div>
      </div>

      {/* Projects Title Section */}
      <div className="text-center mt-[80px] px-4 z-10 relative">
        <div className="flex justify-center">
          <Button
            color="gray_200"
            shape="round"
            className="min-w-[134px] rounded-[16px] px-6 font-hankengrotesk font-semibold tracking-[-0.32px] sm:px-5"
            data-aos="fade-up"
          >
            Our Projects
          </Button>
        </div>
        <Heading
          as="h2"
          className="mt-5 text-[#035F5A] text-[40px] sm:text-[32px] font-semibold tracking-[-1px]"
        >
          Projects That Speak for Themselves
        </Heading>
        <Text className="text-center text-base sm:text-sm md:text-sm text-blue_gray-700 leading-relaxed mt-5 px-4 max-w-1xl mx-auto">
          Explore how we've helped brands grow with thoughtful design and smart
          development.
        </Text>
      </div>

      <div className="relative mb-[100px] mx-auto">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <Img
            src="/images/img_vector_14.png"
            alt="Left Vector"
            className="absolute left-0 top-0 h-full w-auto object-contain"
          />
          <Img
            src="/images/img_vector_14.1.png"
            alt="Right Vector"
            className="absolute right-0 top-0 h-full w-auto object-contain"
          />
        </div>

        <div className="relative max-w-6xl mx-auto py-12">
          <div className="flex items-center justify-center">
            <button
              onClick={scrollLeft}
              className="bg-white shadow w-10 h-10 rounded-full flex items-center justify-center mx-4 z-10"
            >
              ‹
            </button>

            <div ref={scrollRef} className="overflow-hidden w-[50vw] relative">
              <div className="flex transition-all duration-300 ease-in-out">
                {repeatedData.map((card, index) => (
                  <div
                    key={index}
                    className="scroll-card flex-shrink-0 w-full px-4"
                  >
                    <div className="flex min-h-[300px] bg-gray-100_02 border border-black-50 rounded-[18px] shadow-lg p-4">
                      {/* Left Side */}
                      <div className="w-1/2 pr-4">
                        <Heading as="h3" className="text-[22px] font-medium">
                          {card.title}
                        </Heading>
                        <Text className="text-gray-600 text-sm sm:text-sm md:text-sm mt-2">
                          {card.description}
                        </Text>
                        <div className="flex flex-wrap gap-2 mt-4 max-w-full">
                          <ChipView
                            options={card.tags.map((tag, i) => ({
                              value: i,
                              label: tag,
                            }))}
                            className="flex flex-wrap gap-2 mt-4"
                          >
                            {(option) => (
                              <div
                                key={option.index}
                                onClick={option.toggle}
                                className={`flex h-[32px] cursor-pointer items-center rounded-full border ${
                                  option.isSelected
                                    ? "border-blue_gray-800_99"
                                    : "border-transparent"
                                } bg-gray-200 px-4 font-dmsans text-[14px] font-medium text-blue_gray-800`}
                              >
                                <span>{option.label}</span>
                              </div>
                            )}
                          </ChipView>
                        </div>
                      </div>

                      {/* Right Image */}
                      <div className="w-1/2 sm:hidden">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollRight}
              className="bg-white shadow w-10 h-10 rounded-full flex items-center justify-center mx-4 z-10"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
