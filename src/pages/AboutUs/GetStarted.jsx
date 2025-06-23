import React, { useState, useEffect } from "react";
import { Button, Heading, Text } from "../../components";
import { useNavigate } from "react-router-dom";

export default function GetStarted({scrollToContactRef}) {
      const navigate = useNavigate();
    
    const sliderData = [
        {
            image: "/images/frame_193.png",
            heading: "Unlock faster, smarter growth with JSK today.",
            buttonText: "Get started",
        },
        {
            image: "/images/frame_192.png",
            heading: "Build stronger teams with our expert IT services and solutions.",
            buttonText: "Learn more",
        },
        {
            image: "/images/frame_194.png",
            heading: "Accelerate your growth with specialized IT talent and resources.",
            buttonText: "Contact us",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [previousSlide, setPreviousSlide] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            goToNextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    const goToSlide = (slideIndex) => {
        if (slideIndex !== currentSlide) {
            setPreviousSlide(currentSlide);
            setCurrentSlide(slideIndex);
        }
    };

    const goToNextSlide = () => {
        const nextIndex = (currentSlide + 1) % sliderData.length;
        goToSlide(nextIndex);
    };

    const handleButtonClick = (text) => {
    const normalized = text.trim().toLowerCase();
    if (normalized === "get started") {
      navigate("/services");
    } else if (normalized === "learn more") {
      navigate("/services");
    } else if (normalized === "contact us") {
      if (scrollToContactRef?.current) {
      scrollToContactRef.current.scrollIntoView({ behavior: "smooth" });
    }
      // navigate("/contact");
    } else {
      console.warn("Unhandled button:", text);
    }
  };
    return (
        <div className="bg-green-950 w-full px-20 py-20 md:px-10 flex flex-col">
            {/* Slider Section */}
            <div className="relative w-full overflow-hidden rounded-[16px] mb-20">
                <div className="relative w-full h-[60vh] sm:h-[50vh] md:h-[80vh] lg:h-[100vh]">
                    {sliderData.map((slide, index) => {
                        let slideState = "hidden";
                        if (index === currentSlide) slideState = "active";
                        else if (index === previousSlide) slideState = "leaving";

                        let slideClasses =
                            "absolute inset-0 flex flex-col md:flex-row items-center justify-center " +
                            "p-8 sm:p-4 md:p-[30px] transition-all duration-500 " +
                            "bg-cover bg-center rounded-[16px]";

                        if (slideState === "active") {
                            slideClasses += " opacity-100 z-20 translate-x-0 pointer-events-auto";
                        } else if (slideState === "leaving") {
                            slideClasses += " opacity-0 z-10 -translate-x-full pointer-events-none";
                        } else {
                            slideClasses += " opacity-0 z-0 translate-x-full pointer-events-none";
                        }

                        return (
                            <div
                                key={index}
                                className={slideClasses}
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                <div className="w-full flex flex-col gap-6">
                                    <Heading
                                        size="text9xl"
                                        as="h4"
                                        className="w-[40%] text-[2rem] sm:text-sm md:text-sm lg:text-[3.5rem] font-medium leading-tight tracking-tight text-white-a700"
                                    >
                                        {slide.heading}
                                    </Heading>
                                    <Button
                                        color="white_A700"
                                        size="3xl"
                                        className="w-fit rounded-[24px] px-6 py-3 font-semibold text-blue_gray-800"
                                        onClick={() => handleButtonClick(slide.buttonText)}
                                    >
                                        {slide.buttonText}
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex flex-row md:flex-col w-full justify-between gap-10">
                {/* Left Text Block */}
                <div className="text-left max-w-2xl">
                    <Text size="text12xl" className="text-white-a700 leading-relaxed font-light">
                        Striving for excellence with every solution:{" "}
                        <span className="text-[#ACD893] font-medium">
                            a closer look at the key metrics
                        </span>{" "}
                        that define our success
                    </Text>
                </div>

                {/* Right Metric Block */}
                <div className="text-right md:text-left">
                    <Text className="text-white-a700 text-[2.5rem] md:text-[2rem] sm:text-[1.8rem] font-bold">
                        95%
                    </Text>
                    <Text className="text-white-a700 text-sm sm:text-sm md:text-sm font-light mt-1">
                        satisfied clients confirm the
                        effectiveness of our tailored solutions
                    </Text>
                </div>
            </div>

        </div>
    );
}
