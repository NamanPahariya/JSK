import { Helmet } from "react-helmet";
import { Heading, Img, Button, Text, Input } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContactUs from "components/ContactUs/contactUs";
import CallToActionSection from "./CallToActionSection";
import HowItWorksSection from "./HowItWorksSection";
import ITSolutionsOverviewSection from "./ITSolutionsOverviewSection";
import ServicesOverviewSection from "./ServicesOverviewSection";
import TalentAcquisitionSection from "./TalentAcquisitionSection";
import TestimonialsSection from "./TestimonialsSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import { useLocation } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "./slider.css";

// Typed Text Animation Component
const TypedText = () => {
  const phrases = [
    "Smart Solutions.",
    "Innovative Technology.",
    "Custom Software.",
    "Digital Transformation.",
    "Technical Excellence.",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [typingSpeed, setTypingSpeed] = React.useState(150);

  React.useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing effect
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));

        // Slow down at the end of typing
        setTypingSpeed(150);

        // When finished typing, pause before deleting
        if (displayText === currentPhrase) {
          setTypingSpeed(1500); // Pause
          setIsDeleting(true);
        }
      } else {
        // Deleting effect
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        setTypingSpeed(75); // Delete faster than typing

        // When finished deleting, move to next phrase
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, currentPhraseIndex, isDeleting, typingSpeed]);

  return (
    <span className="font-semibold">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Enhanced Auto Slider Component
const EnhancedAutoSlider = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  const slides = [
    {
      image: "/images/img_frame_166.png",
      title: "Top rated specialist",
      name: "Sarah Mitchell",
      role: "Available for you",
    },
    {
      image: "/images/img_rectangle_4.png",
      title: "Technical expert",
      name: "John Davis",
      role: "DevOps specialist",
    },
    {
      image: "/images/img_rectangle_1.png",
      title: "Solution architect",
      name: "Emma Wilson",
      role: "Available for consulting",
    },
  ];

  // Auto-slide effect that pauses on hover
  React.useEffect(() => {
    if (isHovered) return; // Don't auto-slide when hovered

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  // Navigation functions
  const goToSlide = (index) => setActiveSlide(index);
  const goToNextSlide = () =>
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const goToPrevSlide = () =>
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div
      className="relative mr-[160px] mt-[-185px] h-[404px] w-[22%] rounded-[16px] overflow-hidden lg:mr-[120px] lg:w-[28%] md:hidden z-10"
      data-aos="zoom-in-up"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* All slides (only active one visible) */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex flex-col items-start justify-between transition-opacity duration-700 ${
            activeSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          } bg-cover bg-center`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <Heading
            size="textmd"
            as="h1"
            className="ml-3 mt-3 flex items-center justify-center rounded-[12px] bg-white-a700_02 px-[22px] py-0.5 !font-dmsans text-[12px] font-medium tracking-[-0.48px]"
          >
            {slide.title}
          </Heading>
          <div className="flex flex-col items-start justify-center gap-0.5 self-stretch bg-gradient1 px-3.5 py-3 w-full">
            <Heading
              size="headinglg"
              as="h2"
              className="!font-dmsans text-[20px] font-semibold tracking-[-0.80px] !text-white-a700_02"
            >
              {slide.name}
            </Heading>
            <Heading
              size="textlg"
              as="h3"
              className="!font-dmsans text-[14px] font-medium tracking-[-0.56px] !text-white-a700_02"
            >
              {slide.role}
            </Heading>
          </div>
        </div>
      ))}

      {/* Navigation arrows - improved visibility */}
      <div
        className={`absolute inset-0 flex items-center justify-between px-2 z-20`}
      >
        <button
          onClick={goToPrevSlide}
          className={`flex h-8 w-8 items-center justify-center rounded-full bg-black bg-opacity-40 text-white hover:bg-opacity-60 transition-all ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </button>
        <button
          onClick={goToNextSlide}
          className={`flex h-8 w-8 items-center justify-center rounded-full bg-black bg-opacity-40 text-white hover:bg-opacity-60 transition-all ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              activeSlide === index ? "bg-white w-4" : "bg-white bg-opacity-50"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function LandingPage() {
  useEffect(() => {
    Aos.init();
  }, []);
  const navigate = useNavigate();
  const contactRef = useRef(null);

  const location = useLocation();
  const testimonialsRef = useRef(null);
  const homeRef = useRef(null);
  useEffect(() => {
    if (
      location.state?.scrollTo === "testimonials" &&
      testimonialsRef.current
    ) {
      testimonialsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  useEffect(() => {
    if (location.state?.scrollTo === "home" && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <>
      <Helmet>
        <title>Comprehensive IT Solutions for Business Growth | JSK</title>
        <meta
          name="description"
          content="Discover end-to-end IT solutions with JSK, from software development to DevOps. Empower your business with scalable systems and expert services to drive innovation and efficiency."
        />
      </Helmet>
      <div
        className="flex w-full flex-col items-center bg-white-a700_02"
        ref={homeRef}
        id="home"
      >
        <Header scrollToContactRef={contactRef} />
        <div className="self-stretch">
          {/* Hero Section - Enhanced responsiveness */}
          <div
            id="first-section"
            className="relative min-h-[550px] w-full overflow-hidden lg:min-h-[650px] md:min-h-[750px] sm:min-h-[950px] xs:min-h-[1050px] "
          >
            {/* Background Vector */}
            <div className="absolute right-0 top-0 flex flex-1 flex-col items-end">
              <Img
                src="images/img_vector_gray_300.png"
                alt="Vector"
                className="h-auto w-full max-w-[34%] object-contain lg:max-w-[40%] md:max-w-[50%] sm:max-w-[70%] xs:max-w-[80%]"
              />

              {/* Auto-rotating Specialist Slider */}
              <EnhancedAutoSlider />
            </div>

            {/* Left Content */}
            <div
              className="ml-24 flex flex-col lg:ml-16 md:ml-10 sm:ml-5 xs:ml-3 sm:mt-6"
              data-aos="fade-up"
            >
              <div className="container-xs relative z-[2] md:px-5 xs:px-2 pl-8 md:pl-12 lg:pl-16">
                <div className="flex flex-col items-start gap-5 relative right-[180px] top-10 lg:right-[140px] md:right-[100px] sm:right-[50px] xs:right-0">
                  {/* <Input
                    color="gray_200"
                    size="xs"
                    variant="fill"
                    name="frame166"
                    placeholder={`250+ Trusted Partners`}
                    className=" numberText w-[16%] rounded-[16px] px-6 font-hankengrotesk font-semibold tracking-[-0.32px] lg:w-[20%] md:w-[30%] sm:w-[45%] xs:w-[70%] sm:px-4 xs:px-3"
                  /> */}
                  <Text
                    as="p"
                    className=" stringText w-[48%] text-[60.75px] font-light leading-[121%] tracking-[-2.43px] lg:w-[60%] lg:text-[54px] md:text-[48px] sm:text-[36px] xs:w-full xs:text-[28px]"
                  >
                    <span>Enhance</span>
                    <span>&nbsp;</span>
                    <span>your business</span>
                    <span>&nbsp;with&nbsp;</span>
                    <TypedText />
                  </Text>
                </div>
              </div>

              <div className="absolute mt-[280px] flex items-start lg:flex-wrap md:flex-col w-[120%] lg:w-[100%] sm:mt-[190px]">
                <Heading
                  as="h4"
                  className=" FromText  relative z-[1] mt-10 w-[38%] text-[16px] font-normal leading-[140%] tracking-[-0.64px] !text-gray-800  lg:w-[50%] md:w-[80%] sm:w-[90%] xs:w-full xs:text-[14px] sm:right-5 sm:px-5 xs:px-3"
                >
                  From building powerful software to scaling your tech team, we
                  deliver tailored digital services that drive innovation and
                  business growth.
                </Heading>
                {/* <Img
                  src="images/img_vector_492x934.png"
                  alt="Vector"
                  className="relative ml-[-154px] h-auto w-[62%] max-h-[492px] object-contain lg:ml-[-100px] lg:w-[55%] md:ml-0 md:mt-8 md:w-full sm:w-full"
                /> */}
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="absolute bottom-[20%] left-0 right-0 mx-24 flex flex-1 gap-[17px] lg:mx-16 lg:bottom-[38%] md:mx-10 md:bottom-[35%] sm:mx-5 sm:bottom-[50%] sm:flex-col xs:mx-3 xs:bottom-[25%]"
              data-aos="zoom-in-up"
            >
              <Button
                size="6xl"
                className="min-w-[152px] rounded-[28px] px-[34px] font-hankengrotesk font-semibold tracking-[-0.32px] sm:px-5 sm:w-full xs:text-[14px] xs:py-3"
              >
                Get Started
              </Button>
              <Button
                color="gray_200"
                size="6xl"
                className="min-w-[216px] rounded-[28px] px-[34px] font-hankengrotesk font-semibold tracking-[-0.32px] sm:px-5 sm:w-full xs:text-[14px] xs:py-3"
                onClick={() => navigate("/services")}
              >
                Explore our Services
              </Button>
            </div>

            {/* Stats Card */}
            <div className=" statsCard absolute right-[7%] top-[17%] z-[3] m-auto flex w-[44%] flex-col items-start gap-[140px] rounded-[16px] border border-solid border-black-900 bg-blue_gray-800 p-6 lg:w-[48%] lg:gap-[120px] lg:right-[5%] md:w-[50%] md:gap-[105px] md:right-[5%] md:p-5 sm:w-[85%] sm:gap-[70px] sm:right-0 sm:left-0 sm:mx-auto sm:top-[52%] xs:w-[90%] xs:gap-[50px] xs:p-4">
              <Heading
                size="text7xl"
                as="h5"
                className="w-[34%] !font-dmsans text-[24px] font-medium leading-[121%] tracking-[-0.96px] !text-white-a700_02 lg:w-[45%] md:w-[60%] sm:w-full sm:text-[20px] xs:text-[18px]"
              >
                <span className="text-white-a700_02">Empowered&nbsp;</span>
                <span className="text-light_green-300">
                  1,000 businesses with scalable systems.
                </span>
              </Heading>
              <Heading
                size="textlg"
                as="h6"
                className="w-[34%] !font-dmsans text-[14px] font-medium leading-[140%] tracking-[-0.56px] !text-white-a700_02 lg:w-[45%] md:w-[60%] sm:w-full xs:text-[12px]"
              >
                Increasing efficiency by 30% and improving conversions
              </Heading>
            </div>

            {/* Partner Logos - Desktop and Tablet */}
            {/* <div
              className="absolute bottom-[0%] left-0 right-0 mx-auto w-full flex flex-wrap items-center justify-between px-24 lg:px-16 md:bottom-[5%] md:px-10 sm:hidden animate-marquee"
              data-aos="fade-up"
            >
              <Img
                src="images/img_clip_path_group.svg"
                alt="Image"
                className="h-[32px] w-auto object-contain"
              />
              <Img
                src="images/img_clip_path_group.svg"
                alt="Image"
                className="h-[32px] w-auto object-contain"
              />
              <Img
                src="images/img_a_o_smith_corporation.svg"
                alt="Aosmith"
                className="h-[36px] w-auto object-contain"
              />
              <Img
                src="images/img_advance_auto_parts.svg"
                alt="Advanceauto"
                className="h-[30px] w-auto object-contain"
              />
              <Img
                src="images/img_abbvie_inc.svg"
                alt="Abbvieinc"
                className="h-[24px] w-auto object-contain"
              />
              <Img
                src="images/img_albemarle_corporation.svg"
                alt="Albemarle"
                className="h-[14px] w-auto object-contain"
              />
            </div> */}

            {/* Mobile Partner Logos */}
            {/* <div className="hidden sm:flex sm:absolute sm:bottom-[14%] sm:left-0 sm:right-0 sm:flex-wrap sm:justify-center sm:gap-[0.5rem] sm:px-5 xs:bottom-[3%] xs:gap-3 xs:px-2">
              <div className="flex flex-wrap justify-center gap-4 xs:gap-3">
                <Img
                  src="images/img_clip_path_group.svg"
                  alt="Image"
                  className="h-[20px] w-auto object-contain xs:h-[20px]"
                />
                <Img
                  src="images/img_clip_path_group.svg"
                  alt="Image"
                  className="h-[20px] w-auto object-contain xs:h-[20px]"
                />
                <Img
                  src="images/img_a_o_smith_corporation.svg"
                  alt="Aosmith"
                  className="h-[20px] w-auto object-contain xs:h-[22px]"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-4 xs:gap-3">
                <Img
                  src="images/img_advance_auto_parts.svg"
                  alt="Advanceauto"
                  className="h-[10px] w-auto object-contain xs:h-[18px]"
                />
                <Img
                  src="images/img_abbvie_inc.svg"
                  alt="Abbvieinc"
                  className="h-[10px] w-auto object-contain xs:h-[16px]"
                />
                <Img
                  src="images/img_albemarle_corporation.svg"
                  alt="Albemarle"
                  className="h-[10px] w-auto object-contain xs:h-[10px]"
                />
              </div>
            </div> */}
          </div>

          <div className="bg-gradient">
            {/* IT solutions overview section */}
            <ITSolutionsOverviewSection />
          </div>

          {/* why choose us section */}
          <WhyChooseUsSection />

          {/* services overview section */}
          <ServicesOverviewSection />

          {/* how it works section */}
          <HowItWorksSection />

          {/* talent acquisition section */}
          <TalentAcquisitionSection />

          <div ref={testimonialsRef} id="testimonials">
            <TestimonialsSection />
          </div>
          {/* call to action section */}
          <CallToActionSection />
        </div>
        <div ref={contactRef} className="w-full">
          <ContactUs />
        </div>
        <div className="container-xs mb-1 mt-24 px-5 w-full lg:mt-20 md:mt-16 sm:mt-12 xs:mt-8 xs:px-3">
          <Footer scrollToContactRef={contactRef} />
        </div>
      </div>
    </>
  );
}
