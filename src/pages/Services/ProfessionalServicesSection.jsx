import { useNavigate } from "react-router-dom";
import { Button, Img, Heading, Slider } from "../../components";
import React from "react";

export default function ProfessionalServicesSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const navigate = useNavigate();
  
  const serviceItems = [
    {
      image: "/images/web_development_image.jpg",
      title: "Web Development",
      path: "/detailservices/web-development"
    },
    {
      image: "/images/app_development_image.jpg",
      title: "Mobile App Development",
      path: "/detailservices/mobile-app-development"
    },
    {
      image: "/images/ecommmerce_development_image.jpg",
      title: "E-commerce Development",
      path: "/detailservices/e-commerce-development"
    },
    {
      image: "/images/enterprise_solution_image.jpg",
      title: "Enterprise Solutions",
      path: "/detailservices/enterprise-solution"
    },
    {
      image: "/images/img_rectangle_4_img.png",
      title: "Data Analytics",
      path: "/detailservices/data-anayltics"
    },
    {
      image: "/images/automation_image.jpg",
      title: "Automation Services",
      path: "/detailservices/automotive"
    },
    // repeat or add more as needed...
  ];

  const handleCardClick = (e, path) => {
    // Prevent event bubbling up to the slider
    e.stopPropagation();
    // Navigate to the path
    console.log("Navigating to:", path);
    navigate(path);
  };

  // Custom slide renderer to add navigation functionality
  const renderSlide = (item, index) => {
    return (
      <div key={index} className="px-2 md:px-1.5 sm:px-1">
        <button
          className="relative h-[286px] w-full rounded-[14px] bg-cover bg-center transition-transform hover:scale-105 cursor-pointer block overflow-hidden"
          style={{ backgroundImage: `url(${item.image})` }}
          onClick={(e) => handleCardClick(e, item.path)}
          aria-label={`View ${item.title} services`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-[14px] hover:bg-opacity-30 transition-opacity"></div>
          <Heading
            size="text5xl"
            as="h4"
            className="absolute bottom-5 left-5 text-[20px] font-medium tracking-[-0.80px] text-white-a700_02 pointer-events-none"
          >
            {item.title}
          </Heading>
        </button>
      </div>
    );
  };

  return (
    <>
      {/* professional services section */}
      <div>
        <div className="relative min-h-[744px] bg-blue_gray-800 pb-10 lg:h-[644px] md:pb-16 sm:pb-20">
          {/* Background image - adjusted for responsiveness */}
          <Img
            src="images/img_mask_group.png"
            alt="Image"
            className="absolute left-0 right-0 top-0 mx-auto h-auto w-[64%] max-w-full object-contain md:w-[80%] sm:w-[90%]"
          />

          <div className="container-xs relative z-10 mx-auto flex min-h-[644px] flex-col justify-center gap-10 px-4 pt-16 md:px-5 md:pt-20 sm:pt-16">
            {/* Text content - improved responsiveness */}
            <div className="flex flex-col items-start gap-4" data-aos='fade-up'>
              <Heading
                size="text9xl"
                as="h2"
                className="w-[50%] !font-dmsans text-[44.75px] font-medium leading-[111%] tracking-[-1.79px] !text-white-a700_02 lg:w-[50%] md:w-[80%] md:text-[40px] sm:w-full sm:text-[34px]"
              >
                Professional Talent Across Industries and Roles
              </Heading>
              <Heading
                size="textlg"
                as="h3"
                className="w-[62%] text-[14px] font-medium leading-[150%] tracking-[-0.56px] !text-white-a700_99 lg:w-[62%] md:w-[85%] sm:w-full"
              >
                With a deep understanding of our client's business needs areas, extensive resources, and a client people
                focused approach, Collabera has developed specialized recruiting teams who provide resources in various
                areas in the following categories:
              </Heading>
            </div>

            {/* Slider section - improved responsiveness */}
            <div className="relative h-[346px] w-full md:h-auto">
              <div className="w-full md:relative">
                <Slider
                  autoPlay={true} // Temporarily disable autoplay for easier debugging
                  autoPlayInterval={2000}
                  responsive={{
                    0: { items: 1 },
                    480: { items: 1 },
                    768: { items: 2 },
                    1024: { items: 3 },
                    1280: { items: 4 },
                  }}
                  disableDotsControls
                  activeIndex={sliderState}
                  onSlideChanged={(e) => setSliderState(e.item)}
                  ref={sliderRef}
                  className="overflow-visible"
                >
                  {serviceItems.map((item, idx) => renderSlide(item, idx))}
                </Slider>
              </div>

              {/* Gradient overlay and navigation buttons */}
              <div className="absolute bottom-0 right-0 top-0 z-10 flex h-full w-full items-center justify-between bg-gradient3 px-4 pointer-events-none">
                <Button
                  color="white_A700"
                  size="2xl"
                  shape="circle"
                  onClick={(e) => {
                    e.stopPropagation();
                    sliderRef?.current?.slidePrev();
                  }}
                  className="h-12 w-12 rounded-full border border-solid border-gray-300_02 p-0 pointer-events-auto"
                >
                  <Img src="images/img_arrow_left.svg" className="h-5 w-5" />
                </Button>
                <Button
                  color="white_A700"
                  size="2xl"
                  shape="circle"
                  onClick={(e) => {
                    e.stopPropagation();
                    sliderRef?.current?.slideNext();
                  }}
                  className="h-12 w-12 rounded-full border border-solid border-gray-300_02 p-0 rotate-180 pointer-events-auto"
                >
                  <Img src="images/img_arrow_left.svg" className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}