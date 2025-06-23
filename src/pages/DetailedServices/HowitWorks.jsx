import { Button, Heading, Img } from "../../components";
import { useNavigate } from "react-router-dom";
import LandingColumn from "../../components/LandingColumn";
import React, { Suspense, useState, useEffect } from "react";

export default function HowItWorksSection({scrollToContactRef, ...props}) {
  const navigate = useNavigate();
  const sliderData = [
    {
      image: "/images/frame_193.png",
      heading: "Unlock faster, smarter growth with JSK today.",
      buttonText: "Get started",
    },
    {
      image: "/images/frame_192.png",
      heading:
        "Build stronger teams with our expert IT services and solutions.",
      buttonText: "Learn more",
    },
    {
      image: "/images/frame_194.png",
      heading:
        "Accelerate your growth with specialized IT talent and resources.",
      buttonText: "Contact us",
    },
  ];

  const landingContent = [
    {
      title: "Understand your Needs",
      description:
        "Our team listens closely to your business goals and challenges to provide the most relevant solutions.",
    },
    {
      title: "Design Tailored Solutions",
      description:
        "We craft customized strategies that align with your unique requirements and objectives.",
    },
    {
      title: "Deliver and Support",
      description:
        "Ensuring seamless implementation and providing ongoing support for sustained success.",
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
    <div className="bg-green-950 relative px-6 sm:px-8 md:px-12 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 w-full z-0 flex justify-center items-center pointer-events-none">
        <div className="w-full max-w-[900px] px-4 sm:max-w-full">
          <Img
            src="/images/img_vector_dev.png"
            alt="Background"
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="container-xs pt-20 pb-20 flex justify-center md:px-5 relative z-10">
        <div className="w-full">
          <div className="relative flex flex-col gap-[100px] md:gap-[75px] sm:gap-[50px]">
            {/* Top Text Content */}
            <div className="flex flex-col items-start">
              <Button
                color="blue_gray_700_01"
                shape="round"
                className="min-w-[142px] rounded-[16px] px-6 font-hankengrotesk font-semibold tracking-[-0.32px] sm:px-5"
                data-aos="fade-up"
              >
                How it Works
              </Button>
              <div
                className="mt-5 flex flex-col items-start gap-5 self-stretch"
                data-aos="fade-up"
              >
                <Heading
                  size="text9xl"
                  as="h2"
                  className="w-[52%] !font-dmsans text-[44.75px] font-medium leading-[111%] tracking-[-1.79px] !text-white-a700_02 md:w-full md:text-[40px] sm:text-[34px]"
                >
                  Connecting Businesses with What They Need, Effortlessly
                </Heading>
                <Heading
                  size="headings"
                  as="h3"
                  className="w-[50%] text-[14px] font-semibold leading-[150%] tracking-[-0.56px] !text-white-a700_99 md:w-full"
                >
                  We simplify how businesses connect with the services they
                  need—faster, smarter, and fully customized.
                </Heading>
              </div>

              {/* Process Steps */}
              <div className="mt-[110px] flex gap-7 self-stretch md:flex-col">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {landingContent.map((content, index) => (
                    <LandingColumn
                      key={`listone${index}`}
                      index={index + 1}
                      title={content.title}
                      description={content.description}
                    />
                  ))}
                </Suspense>
              </div>
            </div>

            {/* Slider Section */}
            <div className="relative mr-2.5 md:mr-0">
              <div className="relative h-[540px] w-full overflow-hidden rounded-[16px] md:h-auto">
                {sliderData.map((slide, index) => {
                  let slideState = "hidden";
                  if (index === currentSlide) slideState = "active";
                  else if (index === previousSlide) slideState = "leaving";

                  let slideClasses =
                    "absolute top-0 left-0 h-full w-full flex flex-col items-start gap-8 rounded-[16px] bg-cover bg-no-repeat py-[60px] pl-[60px] pr-14 transition-all md:h-auto md:p-5 ";

                  if (slideState === "active") {
                    slideClasses +=
                      "opacity-100 z-20 translate-x-0 duration-500 pointer-events-auto";
                  } else if (slideState === "leaving") {
                    slideClasses +=
                      "opacity-0 z-10 -translate-x-full duration-500 pointer-events-none";
                  } else {
                    slideClasses +=
                      "opacity-0 z-0 translate-x-full duration-0 pointer-events-none";
                  }

                  return (
                    <div
                      key={index}
                      className={slideClasses}
                      style={{ backgroundImage: `url(${slide.image})` }}
                      data-aos=""
                    >
                      <Heading
                        size="text9xl"
                        as="h4"
                        className="w-[68%] !font-dmsans text-[44.75px] font-medium leading-[111%] tracking-[-1.79px] !text-white-a700_02 md:w-full md:text-[40px] sm:text-[34px]"
                      >
                        {slide.heading}
                      </Heading>
                      <Button
                        color="white_A700"
                        size="3xl"
                        onClick={() => handleButtonClick(slide.buttonText)}
                        className="mb-[238px] min-w-[208px] rounded-[24px] px-[34px] font-hankengrotesk font-semibold tracking-[-0.32px] text-blue_gray-800 sm:px-5"
                      >
                        {slide.buttonText}
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
