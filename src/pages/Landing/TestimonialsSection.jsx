import { Heading, Button, Img, ChipView, Slider } from "../../components";
import React from "react";

export default function TestimonialsSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      {/* testimonials section - Made fully responsive */}
      <div>
        <div className="flex flex-col items-center gap-2 bg-white-a700_02">
          {/* Testimonials title button */}
          <div className="container-xs mt-[100px] flex flex-col items-start pl-[548px] pr-14 lg:pl-[400px] md:pl-5 md:pr-5 md:mt-[80px] sm:mt-[60px] xs:mt-[40px] xs:items-center">
            <Button
              color="gray_200"
              shape="round"
              className="min-w-[134px] rounded-[16px] px-6 font-hankengrotesk font-semibold tracking-[-0.32px] sm:px-5"
              data-aos='fade-up'
            >
              Testimonials
            </Button>
          </div>
          
          {/* Main content area with relative positioning */}
          <div className="relative h-[608px] w-full lg:h-[620px] md:h-auto">
            {/* Heading and background image section */}
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-start justify-end lg:justify-between md:relative md:flex-col">
              <Heading
                size="text9xl"
                as="h6"
                className="relative z-10 mt-1 !font-dmsans text-[44.75px] font-medium tracking-[-1.79px] !text-cyan-900 md:px-5 md:text-[40px] sm:text-[34px] xs:text-[28px]"
                data-aos='fade-up'
              >
                You're in Good Company
              </Heading>
              <div className="relative ml-[-394px] flex h-[604px] w-[58%] items-start justify-center self-center bg-[url(/public/images/img_vector_604x872.png)] bg-cover bg-no-repeat px-[38px] py-[76px] lg:ml-[-350px] md:ml-0 md:h-[400px] md:w-full md:p-5 sm:h-[136px] xs:h-[250px]">
              {/* <div className="relative ml-[-394px] flex h-[604px] w-[58%] items-start justify-center self-center  px-[38px] py-[76px] lg:ml-[-350px] md:ml-0 md:h-[400px] md:w-full md:p-5 sm:h-[300px] xs:h-[250px]"> */}
                <div className="mb-[164px] flex w-full" data-aos='fade-up'>
                  <Heading as="p" className="mb-[262px] text-[16px] font-medium tracking-[-0.64px] !text-gray-800_99 md:mb-[100px] sm:mb-[80px] xs:mb-[60px] xs:text-[14px]">
                    You don't have to trust our word
                  </Heading>
                </div>
              </div>
            </div>
            
            {/* Testimonial slider section */}
            <div className="absolute bottom-[-1.61px] left-0 right-0 mx-auto flex w-full items-start justify-center p-[38px] md:relative md:bottom-auto md:flex-col md:p-5">
              <div className="mx-auto mb-[62px] flex w-[70%] px-14 lg:w-[80%] md:w-full md:px-5 md:mb-[40px] sm:mb-[30px] xs:px-2">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 } }}
                  disableDotsControls
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setSliderState(e?.item);
                  }}
                  ref={sliderRef}
                  items={[...Array(3)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="flex items-center rounded-[16px] border border-solid border-gray-200_01 bg-white-a700_02 p-3.5 shadow-md md:flex-col md:p-3 xs:p-2">
                        {/* Business type section */}
                        <div className="flex w-[34%] flex-col items-start gap-24 md:w-full md:gap-[72px] sm:gap-6 xs:gap-8">
                          <Heading
                            size="text6xl"
                            as="h2"
                            className="!font-dmsans text-[22px] font-medium tracking-[-0.88px] sm:text-[20px] xs:text-[18px]"
                          >
                            Business Type
                          </Heading>
                          <ChipView
                            options={[
                              { value: 1, label: `Small Business` },
                              { value: 2, label: `Corporation` },
                              { value: 3, label: `Startup` },
                              { value: 4, label: `LLC` },
                            ]}
                            className="flex flex-wrap gap-2 self-stretch"
                          >
                            {(option) => (
                              <React.Fragment key={option.index}>
                                {option.isSelected ? (
                                  <div
                                    onClick={option.toggle}
                                    className="flex h-[32px] cursor-pointer flex-row items-center whitespace-pre-wrap rounded-[16px] border border-solid border-blue_gray-800_99 bg-gray-200 px-[18px] font-dmsans text-[18px] font-medium tracking-[-0.72px] text-blue_gray-800 sm:text-[16px] xs:h-[28px] xs:px-[14px] xs:text-[14px]"
                                  >
                                    <span>{option.label}</span>
                                  </div>
                                ) : (
                                  <div
                                    onClick={option.toggle}
                                    className="flex h-[32px] cursor-pointer flex-row items-center rounded-[16px] bg-gray-200 px-[18px] font-dmsans text-[18px] font-medium tracking-[-0.72px] text-blue_gray-800 sm:text-[16px] xs:h-[28px] xs:px-[14px] xs:text-[14px]"
                                  >
                                    <span>{option.label}</span>
                                  </div>
                                )}
                              </React.Fragment>
                            )}
                          </ChipView>
                        </div>
                        
                        {/* Testimonial content section */}
                        <div className="flex-1 rounded-[12px] border border-solid border-gray-200_01 bg-white-a700_02 px-6 py-[30px] md:mt-4 md:self-stretch md:px-5 sm:p-5 xs:p-4">
                          <div className="flex flex-col gap-8 sm:gap-6 xs:gap-4">
                            <div className="flex items-center gap-3.5">
                              <Img
                                src="images/img_ellipse_3.png"
                                alt="Image"
                                className="h-[60px] w-[14%] rounded-[30px] object-contain sm:h-[50px] xs:h-[40px]"
                              />
                              <div className="flex flex-1 flex-col items-start">
                                <Heading
                                  size="text4xl"
                                  as="h3"
                                  className="!font-dmsans text-[18px] font-medium tracking-[-0.72px] sm:text-[16px] xs:text-[15px]"
                                >
                                  Emily Carter
                                </Heading>
                                <Heading
                                  as="h4"
                                  className="!font-dmsans text-[16px] font-medium tracking-[-0.64px] !text-gray-800 sm:text-[14px] xs:text-[13px]"
                                >
                                  HR Manager
                                </Heading>
                              </div>
                            </div>
                            <Heading
                              size="text7xl"
                              as="h5"
                              className="!font-dmsans text-[24px] font-medium leading-[31px] tracking-[-0.96px] md:text-[22px] sm:text-[20px] xs:text-[18px]"
                            >
                              "The advanced candidate matching process saved us so much time. we quickly found skilled
                              professionals who fit our compnay culture perfectly. Highly recommend their service"
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}