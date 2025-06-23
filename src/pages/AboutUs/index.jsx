import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Aos from "aos";
import "aos/dist/aos.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactUs from "components/ContactUs/contactUs";

import AboutSection from "../AboutUs/AboutSection";
import OurStorySection from "../AboutUs/OurStory";
import GetStarted from "./GetStarted";
import TeamSection from "../AboutUs/TeamSection";

export default function AboutPage() {
  const contactRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const location = useLocation();
  const aboutRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollTo === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>About Us | JSK Technologies</title>
        <meta
          name="description"
          content="Learn about JSK Technologies - our mission, vision, leadership, and journey transforming digital innovation across industries."
        />
      </Helmet>

      <div
        className="flex w-full flex-col items-center bg-white"
        ref={aboutRef}
        id="about"
      >
        <Header scrollToContactRef={contactRef} />

        <AboutSection />
        <OurStorySection />
        <GetStarted scrollToContactRef={contactRef} />
        <TeamSection />
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
