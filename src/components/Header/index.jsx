import { useNavigate } from "react-router-dom";
import MegaMenu1 from "../MegaMenu1";
import { Button, Heading, Img } from "./..";
import React from "react";

export default function Header({ scrollToContactRef, ...props }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  // Close mobile menu when screen size changes to desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScrollToContact = () => {
    if (scrollToContactRef?.current) {
      scrollToContactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      {...props}
      className={`${props.className} flex self-stretch justify-center items-center py-6 sm:py-5 bg-white-a700_02 relative`}
    >
      <div className="flex items-center justify-between gap-5 container-xs md:px-5 w-full">
        <Img
          src="/images/img_header_logo.png"
          alt="Headerlogo"
          className="h-[100px] w-[180px] object-contain"
        />
        {/* <Img src="images/logo.png" alt="Headerlogo" className="h-[82px] w-[114px] object-contain" /> */}

        {/* Desktop Navigation */}
        <div className="flex rounded-[24px] bg-gray-100 p-2.5 md:hidden">
          <ul className="flex items-center gap-[66px]">
            <li>
              <button
                href="#"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/");
                }}
              >
                <Heading
                  as="p"
                  className="text-[16px] font-medium tracking-[-0.32px] !text-gray-800"
                >
                  Home
                </Heading>
              </button>
            </li>
            <li
              onMouseLeave={() => {
                setMenuOpen(false);
              }}
              onMouseEnter={() => {
                setMenuOpen(true);
              }}
            >
              <div className="flex cursor-pointer items-center gap-1.5">
                <Heading
                  as="p"
                  className="text-[16px] font-medium tracking-[-0.32px] !text-gray-800"
                >
                  Expertise
                </Heading>
                <Img
                  src="/images/img_arrow_down.svg"
                  alt="Arrowdown"
                  className="h-[16px] w-[16px]"
                />
              </div>
              {menuOpen ? (
                <MegaMenu1 onMenuItemClick={handleCloseMenu} />
              ) : null}
            </li>
            <li>
              <button
                href="#"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/aboutus");
                }}
              >
                <Heading
                  as="p"
                  className="text-[16px] font-medium tracking-[-0.32px] !text-gray-800"
                >
                  About us
                </Heading>
              </button>
            </li>
            <li>
              <button
                href="#"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/blog");
                }}
              >
                <Heading
                  as="p"
                  className="!font-hankengrotesk text-[16px] font-medium tracking-[-0.32px] !text-gray-800"
                >
                  Blog
                </Heading>
              </button>
            </li>
            <li>
              <button
                href="#"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/career");
                }}
              >
                <Heading
                  as="p"
                  className="text-[16px] font-medium tracking-[-0.32px] !text-gray-800"
                >
                  Career
                </Heading>
              </button>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <Button
            onClick={handleScrollToContact}
            size="3xl"
            className="min-w-[150px] rounded-[24px] px-[34px] font-hankengrotesk font-semibold tracking-[-0.32px] md:hidden sm:px-5"
          >
            Contact Us
          </Button>

          {/* Hamburger Icon for Mobile */}
          <button
            className="hidden md:flex flex-col justify-center items-center ml-4 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span
              className={`block w-6 h-0.5 bg-gray-800 mb-1.5 transition-transform ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 mb-1.5 transition-opacity ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-transform ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white-a700_02 z-50 shadow-lg">
          <div className="container-xs py-4 px-5">
            <ul className="flex flex-col space-y-4">
              <li>
                <button
                  href="#"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate("/");
                  }}
                >
                  <Heading
                    as="p"
                    className="text-[16px] font-medium tracking-[-0.32px] !text-gray-800"
                  >
                    Home
                  </Heading>
                </button>
              </li>
              <li>
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <Heading
                    as="p"
                    className="text-[16px] font-medium tracking-[-0.32px] !text-gray-800"
                  >
                    Expertise
                  </Heading>
                  <Img
                    src="/images/img_arrow_down.svg"
                    alt="Arrowdown"
                    className={`h-[16px] w-[16px] transition-transform ${
                      menuOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {menuOpen && (
                  <div className="mt-2 ml-4">
                    <div className="flex flex-col space-y-6 py-2">
                      {/* Services Section */}
                      <div className="flex flex-col gap-3">
                        <Heading
                          as="p"
                          className="text-[18px] font-bold !text-black-900"
                        >
                          Services
                        </Heading>
                        {[
                          {
                            label: "Web Development",
                            path: "/detailservices/web-development",
                          },
                          {
                            label: "Mobile App Development",
                            path: "/detailservices/mobile-app-development",
                          },
                          {
                            label: "E-commerce Development",
                            path: "/detailservices/e-commerce-development",
                          },
                          {
                            label: "Enterprise Solution",
                            path: "/detailservices/enterprise-solution",
                          },
                          {
                            label: "Data Analytics",
                            path: "/detailservices/data-anayltics",
                          },
                          {
                            label: "Cloud Computing Services",
                            path: "/detailservices/cloud-computing-services",
                          },
                          {
                            label: "Quality Assurance",
                            path: "/detailservices/quality-assurance",
                          },
                          {
                            label: "Project Consulting and Advisory",
                            path: "/detailservices/project-consulting-and-advisory",
                          },
                          {
                            label: "APIs and Integration",
                            path: "/detailservices/apis-and-integration",
                          },
                          { label: "DevOps", path: "/detailservices/devops" },
                          {
                            label: "UI/UX Solution",
                            path: "/detailservices/ui-ux-solution",
                          },
                         
                        ].map(({ label, path }) => (
                          <button
                            key={label}
                            onClick={() => {
                              navigate(path);
                              setMobileMenuOpen(false);
                              setMenuOpen(false);
                            }}
                            className="text-left text-[15px] !text-black-600 hover:underline"
                          >
                            {label}
                          </button>
                        ))}
                      </div>

                      {/* Platforms Section */}
                      <div className="flex flex-col gap-3">
                        <Heading
                          as="p"
                          className="text-[18px] font-bold !text-black-900"
                        >
                          Platforms
                        </Heading>
                        {[
                          {  path: '/detailservices/aws', src:'https://swift-technologies.com/swift/wp-content/uploads/2021/06/aws.png' },
        {  path: '/detailservices/hcl', src:'https://swift-technologies.com/swift/wp-content/uploads/2021/06/hcl.png' },
        {  path: '/detailservices/ibm', src:'https://swift-technologies.com/swift/wp-content/uploads/2021/06/ibm.png' },
        {  path: '/detailservices/adobe', src:'https://swift-technologies.com/swift/wp-content/uploads/2021/06/Path-161.png' },
        {  path: '/detailservices/microsoft', src:'https://swift-technologies.com/swift/wp-content/uploads/2021/06/microsoft.png' },
        {  path: '/detailservices/google', src:'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },

                        ].map(({ src, path }) => (
                          <button
                            key={path}
                            onClick={() => {
                              navigate(path);
                              setMobileMenuOpen(false);
                              setMenuOpen(false);
                            }}
                            className="text-left text-[15px] !text-black-600 hover:underline"
                          >
                           <img src={src} alt="Platform" className="h-6 w-auto" />
                          </button>
                        ))}
                      </div>

                      {/* Industries Section */}
                      <div className="flex flex-col gap-3">
                        <Heading
                          as="p"
                          className="text-[18px] font-bold !text-black-900"
                        >
                          Industries
                        </Heading>
                        {[
                          {
                            label: "Staff Augmentation",
                            path: "/detailservices/staff-augmentation",
                          },
                          {
                            label: "Recruitment Service",
                            path: "/detailservices/recruitment-service",
                          },
                          {
                            label: "Automotive",
                            path: "/detailservices/automotive",
                          },
                          {
                            label: "Banking & Finance",
                            path: "/detailservices/banking-finance",
                          },
                          {
                            label: "Healthcare",
                            path: "/detailservices/healthcare",
                          },
                          { label: "Retail", path: "/detailservices/retail" },
                          { label: "Travel", path: "/detailservices/travel" },
                        ].map(({ label, path }) => (
                          <button
                            key={label}
                            onClick={() => {
                              navigate(path);
                              setMobileMenuOpen(false);
                              setMenuOpen(false);
                            }}
                            className="text-left text-[15px] !text-black-600 hover:underline"
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <button
                  href="#"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate("/aboutus");
                  }}
                >
                  <Heading
                    as="p"
                    className="text-[16px] font-medium tracking-[-0.32px] !text-gray-800"
                  >
                    About us
                  </Heading>
                </button>
              </li>
              <li>
                <button
                  href="#"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate("/blog");
                  }}
                >
                  <Heading
                    as="p"
                    className="!font-hankengrotesk text-[16px] font-medium tracking-[-0.32px] !text-gray-800"
                  >
                    Blog
                  </Heading>
                </button>
              </li>
              <li>
                <button
                  href="#"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate("/career");
                  }}
                >
                  <Heading
                    as="p"
                    className="text-[16px] font-medium tracking-[-0.32px] !text-gray-800"
                  >
                    Career
                  </Heading>
                </button>
              </li>
              <li className="pt-2">
                <Button
                  size="3xl"
                  onClick={handleScrollToContact}
                  className="w-full rounded-[24px] px-[34px] font-hankengrotesk font-semibold tracking-[-0.32px]"
                >
                  Contact Us
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
