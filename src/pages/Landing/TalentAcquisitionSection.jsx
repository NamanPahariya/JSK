import { Heading, Button, Img, Radio, RadioGroup } from "../../components";
import React from "react";

export default function TalentAcquisitionSection() {
  return (
    <>
      {/* talent acquisition section */}
      <div>
        <div className="flex flex-col items-center justify-center bg-white-a700_02 py-[100px] md:py-5">
          <div className="container-xs flex flex-col items-center px-14 md:px-5">
            <Heading
              size="text9xl"
              as="h2"
              className="w-[64%] text-center !font-dmsans text-[44.75px] font-medium leading-[111%] tracking-[-1.79px] !text-cyan-900 md:w-full md:text-[40px] sm:text-[34px]"
              data-aos='fade-up'
            >
              We help your business grow by connecting you with the right talent.
            </Heading>
            <div className="mr-2.5 mt-[60px] flex w-[84%] justify-center gap-2 md:mr-0 md:w-full md:flex-col">
              <div className="flex w-full flex-col items-center rounded-[36px] bg-gray-100_01 p-8 sm:p-5">
                <Heading
                  size="text7xl"
                  as="h3"
                  className="ml-1.5 mt-[18px] self-start !font-dmsans text-[24px] font-medium tracking-[-0.96px] !text-cyan-900 md:ml-0 md:text-[22px]"
                >
                  Streamline your hirng Process
                </Heading>
                <Heading
                  as="h4"
                  className="mt-2 w-[90%] text-[16px] font-medium leading-[150%] tracking-[-0.64px] !text-gray-800_99 md:w-full"
                >
                  Our platform customizes recruitment strategies to meet your unique business needs.
                </Heading>
                <div className="ml-7 mr-[18px] mt-8 flex w-[90%] justify-center md:mx-0 md:w-full">
                  <div className="flex w-full items-center">
                    <div className="relative z-[7] flex h-[190px] w-[38%] rotate-[-4deg] flex-col items-start gap-[122px] rounded-md bg-[url(/public/images/img_frame_193.png)] bg-cover bg-no-repeat md:h-auto md:gap-[91px] sm:gap-[61px]">
                      <Heading
                        size="textxs"
                        as="h5"
                        className="ml-1.5 mt-2 rounded-md bg-white-a700_02 px-2.5 !font-dmsans text-[5.42px] font-medium tracking-[-0.22px] md:ml-0"
                      >
                        Top rated specialist
                      </Heading>
                      <div className="h-[42px] self-stretch bg-[url(/public/images/img_group_13.png)] bg-cover bg-no-repeat p-1.5 md:h-auto">
                        <div className="mt-1 flex flex-col items-start">
                          <Heading
                            size="headingxs"
                            as="h6"
                            className="!font-dmsans text-[9.04px] font-semibold tracking-[-0.36px] !text-white-a700_02"
                          >
                            Dave Chapel
                          </Heading>
                          <Heading
                            size="texts"
                            as="p"
                            className="!font-dmsans text-[6.33px] font-medium tracking-[-0.25px] !text-white-a700_02"
                          >
                            Talent Acquisition Specialist
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="relative ml-[-66px] flex flex-1 items-center">
                      <div className="relative z-[6] flex h-[194px] w-full flex-col items-start gap-[130px] rounded-md bg-[url(/public/images/img_frame_191.png)] bg-cover bg-no-repeat shadow-4xl md:h-auto md:gap-[97px] sm:gap-[65px]">
                        <Heading
                          size="textxs"
                          as="p"
                          className="ml-1.5 mt-1 flex items-center justify-center rounded bg-white-a700_02 px-2.5 !font-dmsans text-[5.77px] font-medium tracking-[-0.23px] md:ml-0"
                        >
                          Top rated specialist
                        </Heading>
                        <div className="flex flex-col items-start self-stretch bg-gradient1 p-1.5">
                          <Heading
                            size="headingxs"
                            as="p"
                            className="mt-1.5 !font-dmsans text-[9.62px] font-semibold tracking-[-0.38px] !text-white-a700_02"
                          >
                            Sarah Mitchell
                          </Heading>
                          <Heading
                            size="texts"
                            as="p"
                            className="!font-dmsans text-[6.74px] font-medium tracking-[-0.27px] !text-white-a700_02"
                          >
                            Talent Acquisition Specialist
                          </Heading>
                        </div>
                      </div>
                      <div className="relative ml-[-58px] flex h-[192px] w-full rotate-[4deg] flex-col items-start gap-[126px] rounded-md bg-[url(/public/images/img_frame_192.png)] bg-cover bg-no-repeat md:h-auto md:gap-[94px] sm:gap-[63px]">
                        <Heading
                          size="textxs"
                          as="p"
                          className="ml-[18px] mt-1 rounded-lg bg-white-a700_02 px-2.5 py-0.5 !font-dmsans text-[5.42px] font-medium tracking-[-0.22px] md:ml-0"
                        >
                          Top rated specialist
                        </Heading>
                        <div className="mr-1 h-[44px] self-stretch bg-[url(/public/images/img_group_12.png)] bg-cover bg-no-repeat p-1.5 md:mr-0 md:h-auto">
                          <div className="flex flex-col items-start">
                            <Heading
                              size="headingxs"
                              as="p"
                              className="!font-dmsans text-[9.04px] font-semibold tracking-[-0.36px] !text-white-a700_02"
                            >
                              Sarah Mitchell
                            </Heading>
                            <Heading
                              size="texts"
                              as="p"
                              className="!font-dmsans text-[6.33px] font-medium tracking-[-0.25px] !text-white-a700_02"
                            >
                              Talent Acquisition Specialist
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start rounded-[36px] bg-gray-100_01 px-12 py-[34px] md:px-5 sm:p-5">
                <RadioGroup name="ourplatform" className="mx-1.5 flex flex-col self-stretch md:mx-0">
                  <Radio
                    value="frontend"
                    label="Front-end"
                    className="w-[78%] gap-2.5 rounded-[16px] bg-white-a700_02 py-3.5 pr-[34px] text-[16px] font-medium tracking-[-0.64px] text-yellow-900 shadow-xl sm:pr-5"
                  />
                  <Radio
                    size="xs"
                    value="projectmanagement"
                    label="project Management"
                    className="mt-2.5 w-[78%] gap-2.5 rounded-[16px] bg-white-a700_02 py-3.5 pr-[34px] text-[16px] font-medium tracking-[-0.64px] text-indigo-a100 shadow-xl sm:pr-5"
                  />
                  <Radio
                    value="uiuxdesign"
                    label="UI/UX Design"
                    className="mt-2.5 w-[78%] gap-2.5 rounded-[16px] bg-white-a700_02 py-3.5 pr-[34px] text-[16px] font-medium tracking-[-0.64px] text-purple-a100 shadow-xl sm:pr-5"
                  />
                </RadioGroup>
                <Heading
                  size="text7xl"
                  as="p"
                  className="ml-2 mt-[42px] !font-dmsans text-[24px] font-medium tracking-[-0.96px] !text-cyan-900 md:ml-0 md:text-[22px]"
                >
                  End-to-End Tech Solutions
                </Heading>
                <Heading
                  as="p"
                  className="mb-5 ml-2 mt-2.5 w-full text-[16px] font-medium leading-[150%] tracking-[-0.64px] !text-gray-800_99 md:ml-0"
                >
                  From frontend to backend, we handle it all for seamless integration.
                </Heading>
              </div>
            </div>
            <div className="mr-2.5 mt-2 flex w-[84%] items-center justify-center rounded-[20px] bg-gray-100_01 px-14 py-[84px] md:mr-0 md:w-full md:flex-col md:p-5">
              <div className="flex w-[48%] flex-col items-start gap-2 md:w-full">
                <Heading
                  size="text7xl"
                  as="p"
                  className="!font-dmsans text-[24px] font-medium tracking-[-0.96px] !text-cyan-900 md:text-[22px]"
                >
                  Top Talent, Built for You
                </Heading>
                <Heading
                  as="p"
                  className="w-[90%] text-[16px] font-medium leading-[150%] tracking-[-0.64px] !text-gray-800_99 md:w-full"
                >
                  We provide expert professionals and create tailored systems to fuel your success.
                </Heading>
              </div>
              <div className="relative h-[114px] flex-1 content-center md:h-auto md:w-full md:flex-none md:self-stretch">
                <div className="flex flex-1 flex-col items-end">
                  <div className="relative z-[8] flex w-[92%] justify-center rounded-[16px] bg-white-a700_01 p-3 shadow-2xl md:w-full">
                    <div className="flex w-full justify-center">
                      <div className="flex flex-1 items-center gap-3">
                        <Img
                          src="images/img_rectangle_2.png"
                          alt="Image"
                          className="h-[56px] w-[18%] rounded-[10px] object-contain"
                        />
                        <div className="flex flex-1 flex-col items-start">
                          <Heading
                            size="text5xl"
                            as="p"
                            className="!font-dmsans text-[20px] font-medium tracking-[-0.80px] !text-cyan-900"
                          >
                            {/* Sarah Mitchell */}
                          </Heading>
                          <Heading
                            as="p"
                            className="!font-dmsans text-[16px] font-medium tracking-[-0.64px] !text-gray-700"
                          >
                            Senior Software Developer
                          </Heading>
                        </div>
                      </div>
                      <Button size="5xl" shape="round" className="w-[54px] rounded-[16px] px-3.5">
                        <Img src="images/img_material_symbols_add.svg" />
                      </Button>
                    </div>
                  </div>
                  <div className="relative mr-[46px] mt-[-36px] flex w-[78%] flex-col items-start justify-center rounded-[12px] bg-white-a700_02 py-2.5 pl-16 pr-14 shadow-3xl md:mr-0 md:w-full md:px-5">
                    <Heading
                      size="textxl"
                      as="p"
                      className="!font-dmsans text-[15.27px] font-medium tracking-[-0.61px] !text-cyan-900"
                    >
                      Sarah Mitchell
                    </Heading>
                    <Heading
                      size="textmd"
                      as="p"
                      className="!font-dmsans text-[12.22px] font-medium tracking-[-0.49px] !text-gray-700"
                    >
                      Talent Acquisition Specialist
                    </Heading>
                  </div>
                  {/* <div className="absolute bottom-3.5 right-[26px] z-[9] my-auto ml-14 mr-[26px] flex flex-1 flex-col items-start justify-center rounded-[14px] bg-white-a700_02 py-3 pl-[74px] pr-14 shadow-sm md:mx-0 md:px-5">
                  <Heading
                    size="text3xl"
                    as="p"
                    className="!font-dmsans text-[17.71px] font-medium tracking-[-0.71px] !text-cyan-900"
                  >
                    Sarah Mitchell
                  </Heading>
                  <Heading
                    size="textlg"
                    as="p"
                    className="!font-dmsans text-[14.17px] font-medium tracking-[-0.57px] !text-gray-700"
                  >
                    Talent Acquisition Specialist
                  </Heading>
                </div> */}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
