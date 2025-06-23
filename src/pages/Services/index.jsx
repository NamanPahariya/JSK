import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContactUs from "components/ContactUs/contactUs";
import ProfessionalServicesSection from "./ProfessionalServicesSection";
import ServicesOverviewSection from "./ServicesOverviewSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "../Landing/TestimonialsSection";
import React, { useEffect,useRef } from "react";
import { useLocation } from "react-router-dom";
import Aos from "aos";

export default function ServicesPage() {
    const contactRef = useRef(null);
    useEffect(()=>{
      Aos.init();
    },[])
    useEffect(() => {
  const hash = window.location.hash;
  if (hash) {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}, []);

const location = useLocation();
  const serviceRef = useRef(null);

  useEffect(() => {
    if (
      location.state?.scrollTo === "services" &&
      serviceRef.current
    ) {
      serviceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <>
      <Helmet>
        <title>Expert Talent Solutions and Staff Augmentation Services | JSK</title>
        <meta
          name="description"
          content="Optimize your talent acquisition with JSK's Staff Augmentation and Talent Solutions. Connect with top-tier talent and develop strong, effective teams for your business."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-a700_02" ref={serviceRef} id="services">
        <Header scrollToContactRef={contactRef}/>
        <div className="self-stretch" id="service">
          {/* services overview section */}
          <ServicesOverviewSection />

          {/* services section */}
          <ServicesSection />

          {/* professional services section */}
          <ProfessionalServicesSection />

          {/* testimonials section */}
          <TestimonialsSection />

          {/* contact us section */}
          <div ref={contactRef} className="w-full"> <ContactUs /></div>
        
        </div>
        <div className="container-xs mb-1 mt-24 md:px-5">
          <Footer scrollToContactRef={contactRef}/>
        </div>
      </div>
    </>
  );
}
