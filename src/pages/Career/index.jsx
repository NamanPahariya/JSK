import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContactUs from "components/ContactUs/contactUs";
import CareerMain from "./CareerMain";
import Career from "./Career";
import Aos from "aos";

export default function CareerIndex() {
    const contactRef = useRef(null);
    useEffect(() => {
        Aos.init();
    }, [])
    
  const location = useLocation();
  const careerRef = useRef(null);

  useEffect(() => {
    if (
      location.state?.scrollTo === "careers" &&
      careerRef.current
    ) {
      careerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

    return (
        <>
            <div className="flex w-full flex-col items-center bg-white-a700_02" ref={careerRef} id="careers">
                <Header scrollToContactRef={contactRef}/>
                <CareerMain/>
                <Career/>
                <div className="self-stretch">
                    <div ref={contactRef} className="w-full">
                        <ContactUs />
                    </div>
                </div>
                <div className="container-xs mb-1 mt-24 md:px-5">
                    <Footer scrollToContactRef={contactRef}/>
                </div>
            </div>
        </>
    );
}
