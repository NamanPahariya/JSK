import { useNavigate } from "react-router-dom";
import { Heading, Button, Img } from "./..";
import React from "react";

export default function Footer({ scrollToContactRef, ...props }) {
  const navigate = useNavigate();
  const handleScrollToContact = () => {
    if (scrollToContactRef?.current) {
      scrollToContactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      {...props}
      className={`${props.className} flex flex-col items-center gap-[100px] md:gap-[75px] sm:gap-[50px]`}
    >
      <div className="flex items-start justify-between gap-3 self-stretch md:flex-col">
        <div className="flex w-[18%] flex-col self-center md:w-full">
          <Img
            src="/images/img_header_logo.png"
            alt="Footerlogo"
            className="h-[100px] w-[200px] object-contain"
          />
          <Heading
            as="p"
            className="mt-[26px] !font-hankengrotesk text-[16px] font-medium leading-[180%] tracking-[-0.64px] !text-gray-800_b2"
          >
            Address.....
          </Heading>
          <div className="mt-[74px] flex gap-4">
            <Button
              color="gray_300_01"
              size="md"
              variant="outline"
              shape="circle"
              className="w-[36px] rounded-[18px] !border px-2.5"
            >
              <Img src="/images/img_ri_facebook_fill.svg" />
            </Button>
            <Button
              color="gray_300_01"
              size="md"
              variant="outline"
              shape="circle"
              className="w-[36px] rounded-[18px] !border px-2.5"
            >
              <Img src="/images/img_airplane.svg" />
            </Button>
            <Button
              color="gray_300_01"
              size="md"
              variant="outline"
              shape="circle"
              className="w-[36px] rounded-[18px] !border px-2.5"
            >
              <Img src="/images/img_info.svg" />
            </Button>
          </div>
        </div>
        <div className="flex w-[52%] items-start justify-between gap-3 md:w-full sm:flex-col">
          <div className="flex w-[54%] items-start justify-between gap-5 self-center sm:w-full">
            <div className="flex w-[72%] flex-col items-start gap-5 self-center">
              <Heading
                size="text7xl"
                as="p"
                className="!font-hankengrotesk text-[24px] font-normal tracking-[-0.96px] !text-black-900 md:text-[22px]"
              >
                Navigate
              </Heading>
              <ul className="flex flex-col items-start gap-5">
                <li>
                  <button
                    href="#"
                    onClick={() => {
                     navigate("/", {
                        state: { scrollTo: "home" },
                      });
                    }}
                  >
                    <Heading
                      as="p"
                      className="!font-hankengrotesk text-[16px] font-normal tracking-[-0.32px] !text-gray-800"
                    >
                      Home
                    </Heading>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/aboutus", {
                        state: { scrollTo: "about" },
                      });
                    }}
                  >
                    <Heading
                      as="p"
                      className="!font-hankengrotesk text-[16px] font-normal tracking-[-0.32px] !text-gray-800"
                    >
                      About
                    </Heading>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                       navigate("/services", {
                        state: { scrollTo: "services" },
                      });
                    }}
                  >
                    <Heading
                      as="p"
                      className="!font-hankengrotesk text-[16px] font-normal tracking-[-0.32px] !text-gray-800"
                    >
                      Services
                    </Heading>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                       navigate("/blog", {
                        state: { scrollTo: "blog" },
                      });
                    }}
                  >
                    <Heading
                      as="p"
                      className="!font-hankengrotesk text-[16px] font-normal tracking-[-0.32px] !text-gray-800"
                    >
                      Blog
                    </Heading>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/career", {
                        state: { scrollTo: "careers" },
                      });
                    }}
                  >
                    <Heading
                      as="p"
                      className="!font-hankengrotesk text-[16px] font-normal tracking-[-0.32px] !text-gray-800"
                    >
                      Career
                    </Heading>
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-5">
              <Heading
                size="text7xl"
                as="p"
                className="!font-hankengrotesk text-[24px] font-normal tracking-[-0.96px] !text-black-900 md:text-[22px]"
              >
                Company
              </Heading>
              <ul className="flex flex-col items-start gap-5">
                <li>
                  <button onClick={handleScrollToContact}>
                    <Heading
                      as="p"
                      className="!font-hankengrotesk text-[16px] font-normal tracking-[-0.32px] !text-gray-800"
                    >
                      Contact Us
                    </Heading>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/", {
                        state: { scrollTo: "testimonials" },
                      });
                    }}
                  >
                    <Heading
                      as="p"
                      className="!font-hankengrotesk text-[16px] font-normal tracking-[-0.32px] !text-gray-800"
                    >
                      Testimonials
                    </Heading>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5">
            <Heading
              size="text7xl"
              as="p"
              className="!font-hankengrotesk text-[24px] font-normal tracking-[-0.96px] !text-black-900 md:text-[22px]"
            >
              Contact
            </Heading>
            <Heading
              as="p"
              className="!font-hankengrotesk text-[16px] font-normal tracking-[-0.32px] !text-gray-800"
            >
              md@edithtis.com
            </Heading>
            <Heading
              as="p"
              className="!font-hankengrotesk text-[16px] font-normal tracking-[-0.32px] !text-gray-800"
            >
              +91-478-469-4672
            </Heading>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-9 self-stretch md:px-5">
        <div className="h-px bg-black-900_3a" />
        <div className="ml-1.5 mr-4 flex justify-center gap-5 md:mx-0 md:flex-col">
          <Heading
            as="p"
            className="!font-hankengrotesk text-[16px] font-normal tracking-[-0.32px] !text-gray-800"
          >
            © Copyright 2025, All Rights reserved by JSK
          </Heading>
        </div>
      </div>
    </footer>
  );
}
