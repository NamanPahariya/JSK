import { Heading, Img, ChipView, Slider, Button } from "../../components";
import React from "react";

export default function TestimonialsSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      {/* testimonials section */}
      <div>
        <div className="flex flex-col items-center gap-3.5 bg-white-a700_02">
          <div className="container-xs mt-20 flex flex-col items-start pl-[552px] pr-14 md:px-5">
            <Button
              color="gray_200"
              shape="round"
              className="mr-2.5 min-w-[134px] rounded-[16px] px-6 font-hankengrotesk font-semibold tracking-[-0.32px] md:mr-0 sm:px-5"
            >
              Testimonials
            </Button>
          </div>
          <div className="relative h-[622px] self-stretch">
            <div className="absolute bottom-[-1.79px] left-0 m-auto h-[480px] w-[66%]" />
            <div className="absolute bottom-0 right-0 top-0 my-auto flex h-[604px] w-[60%] items-start justify-center bg-[url(/public/images/img_vector_604x872.png)] bg-cover bg-no-repeat px-[38px] py-14 md:h-auto md:py-5 sm:p-5">
              <div className="mb-[204px] flex w-full flex-col items-start gap-[214px] md:gap-40 sm:gap-[107px]">
                <Heading as="h2" className="text-[16px] font-medium tracking-[-0.64px] !text-gray-800_99">
                  You don’t have to trust our word
                </Heading>
                <div className="flex w-full justify-between gap-5">
                  <Button
                    onClick={() => {
                      sliderRef?.current?.slidePrev();
                    }}
                    color="white_A700"
                    size="2xl"
                    shape="circle"
                    className="w-[48px] rounded-[24px] border border-solid border-gray-300_4c px-4"
                  >
                    <Img src="images/img_arrow_left.svg" />
                  </Button>
                  <Button
                    onClick={() => {
                      sliderRef?.current?.slideNext();
                    }}
                    color="white_A700"
                    size="2xl"
                    shape="circle"
                    className="w-[48px] rotate-[-180deg] rounded-[24px] border border-solid border-gray-300_4c px-4"
                  >
                    <Img src="images/img_arrow_left.svg" />
                  </Button>
                </div>
              </div>
            </div>
            <Heading
              size="text9xl"
              as="h3"
              className="absolute left-0 right-0 top-0 mx-auto w-max !font-dmsans text-[44.75px] font-medium tracking-[-1.79px] !text-cyan-900 md:text-[40px] sm:text-[34px]"
            >
              You’re in Good Company
            </Heading>
            <div className="absolute bottom-[19%] left-0 right-0 mx-auto w-full px-14 md:px-5">
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
                    <div className="flex items-center rounded-[16px] border border-solid border-gray-200_01 bg-white-a700_02 p-3.5 shadow-md md:flex-col">
                      <div className="flex w-[34%] flex-col items-start gap-24 md:w-full md:gap-[72px] sm:gap-12">
                        <Heading
                          size="text6xl"
                          as="h4"
                          className="!font-dmsans text-[22px] font-medium tracking-[-0.88px]"
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
                                  className="flex h-[32px] cursor-pointer flex-row items-center whitespace-pre-wrap rounded-[16px] border border-solid border-blue_gray-800_99 bg-gray-200 px-[18px] font-dmsans text-[18px] font-medium tracking-[-0.72px] text-blue_gray-800"
                                >
                                  <span>{option.label}</span>
                                </div>
                              ) : (
                                <div
                                  onClick={option.toggle}
                                  className="flex h-[32px] cursor-pointer flex-row items-center rounded-[16px] bg-gray-200 px-[18px] font-dmsans text-[18px] font-medium tracking-[-0.72px] text-blue_gray-800"
                                >
                                  <span>{option.label}</span>
                                </div>
                              )}
                            </React.Fragment>
                          )}
                        </ChipView>
                      </div>
                      <div className="flex-1 rounded-[12px] border border-solid border-gray-200_01 bg-white-a700_02 px-6 py-[30px] md:self-stretch md:px-5 sm:p-5">
                        <div className="flex flex-col gap-8">
                          <div className="flex items-center gap-3.5">
                            <Img
                              src="images/img_ellipse_3.png"
                              alt="Image"
                              className="h-[60px] w-[14%] rounded-[30px] object-contain"
                            />
                            <div className="flex flex-1 flex-col items-start">
                              <Heading
                                size="text4xl"
                                as="h5"
                                className="!font-dmsans text-[18px] font-medium tracking-[-0.72px]"
                              >
                                Emily Carter
                              </Heading>
                              <Heading
                                as="h6"
                                className="!font-dmsans text-[16px] font-medium tracking-[-0.64px] !text-gray-800"
                              >
                                HR Manager
                              </Heading>
                            </div>
                          </div>
                          <Heading
                            size="text7xl"
                            as="p"
                            className="!font-dmsans text-[24px] font-medium leading-[31px] tracking-[-0.96px] md:text-[22px]"
                          >
                            “The advanced candidate matching process saved us so much time. we quickly found skilled
                            professionals who fit our compnay culture perfectly. Highly recommend their service”
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
    </>
  );
}
