import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import DevelopmentSection from "./DevelopmentSection";
import OurServices from "./OurServices";
import HowItWorks from "./HowitWorks";
import Projects from "./Projects";
import ContactUs from "components/ContactUs/contactUs";
import Aos from "aos";
import ServicesDescription from "./ServicesDescription";

export default function DetailedServices() {
    const contactRef = useRef(null);
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
            <Helmet>
                <title>Expert Talent Solutions and Staff Augmentation Services | JSK</title>
                <meta
                    name="description"
                    content="Optimize your talent acquisition with JSK's Staff Augmentation and Talent Solutions. Connect with top-tier talent and develop strong, effective teams for your business."
                />
            </Helmet>
            <div className="flex w-full flex-col items-center bg-white-a700_02">
                <Header scrollToContactRef={contactRef}/>
                <div className="self-stretch">
                    <DevelopmentSection />
                    <ServicesDescription/>
                    <OurServices />
                    <HowItWorks />
                    <Projects />
                    {/* contact us section */}
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
