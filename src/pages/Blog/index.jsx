import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContactUs from "components/ContactUs/contactUs";
import BlogMain from "./BlogMain";
import Blogtop from "./Blogtop";
import Aos from "aos";

export default function Blog() {
    const contactRef = useRef(null);
    useEffect(() => {
        Aos.init();
    }, [])
    const location = useLocation();
  const BlogRef = useRef(null);

  useEffect(() => {
    if (
      location.state?.scrollTo === "blog" &&
      BlogRef.current
    ) {
      BlogRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
    return (
        <>
            <div className="flex w-full flex-col items-center bg-white-a700_02" ref={BlogRef} id="blog">
                <Header scrollToContactRef={contactRef}/>
                <Blogtop/>
                <BlogMain/>
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
