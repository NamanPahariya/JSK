import { Img, Heading, Button } from "../../components";
import React from "react";
import { useNavigate } from "react-router-dom";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function ServicesOverviewSection() {
  const tabData = [
    {
      title: "Staff augmentation",
      heading: "We know every business has unique hiring needs.",
      subheading:
        "With personalised solutions tailored to your business needs, we connect you with the best talent quickly and efficiently, helping you build stronger, more effective teams.",
      features: [
        "Better Talent Fit",
        "Enhanced Hiring Quality",
        "Reduced Turnover",
      ],
      image: "images/staff_argumentation_image.jpg",
    },
    {
      title: "IT consulting",
      heading: "Technology is key to your business success.",
      subheading:
        "We deliver expert IT strategies and solutions tailored to your business to boost efficiency, scalability, and innovation.",
      features: [
        "Tailored IT Roadmaps",
        "Cost-Effective Solutions",
        "Access to Expert Consultants",
      ],
      image: "images/web_development_image.jpg",
    },
    {
      title: "Project Based services",
      heading: "Focus on your outcomes, not just resources.",
      subheading:
        "Our project-based services ensure clear deliverables, timelines, and quality, giving you peace of mind and successful results.",
      features: [
        "End-to-End Delivery",
        "Clear Milestones & KPIs",
        "Scalable Execution Teams",
      ],
      image: "images/enterprise_solution_image.jpg",
    },
  ];

  const navigate = useNavigate();
  return (
    <>
      {/* services overview section */}
      <div className="mt-16 md:mt-12 sm:mt-8 w-full mb-16">
        <div className="flex flex-col items-center gap-4">
          {/* Services Title Button */}
          {/* <div className="container w-full max-w-6xl px-5">
            <Button
              color="gray_200"
              shape="round"
              className="min-w-[138px] rounded-[16px] px-6 font-hankengrotesk font-semibold tracking-[-0.32px] sm:px-5"
            >
              Our Services
            </Button>
          </div> */}

          <Tabs
            className="w-full relative"
            selectedTabClassName="!text-light_green-300 bg-blue_gray-800 rounded-[16px]"
            selectedTabPanelClassName="p-2 mx-auto !relative tab-panel--selected"
          >
            {/* Main Heading and Image Container */}
            <div className="flex flex-col md:flex-col-reverse w-full" data-aos='fade-up'>
              {/* Heading Section */}
              <div className="flex flex-col w-full px-5 mb-8">
                <Heading
                  size="text9xl"
                  as="h2"
                  className="w-full max-w-2xl mx-auto md:text-center !font-dmsans text-[44.75px] font-medium leading-[111%] tracking-[-1.79px] !text-cyan-900 md:text-[40px] sm:text-[32px]"
                >
                  Platform that matches business with top-tier services
                </Heading>

                <Heading
                  size="textlg"
                  as="h3"
                  className="mt-4 w-full max-w-2xl mx-auto md:text-center text-[14px] font-medium leading-[150%] tracking-[-0.56px] !text-gray-800_99"
                >
                  Our marketplace offers tailored solutions to help your business thrive, from expert talent to innovative
                  services that drive growth.
                </Heading>
              </div>

              {/* Background Image and CTA Button */}
              <div className="relative w-full">
                <div className="w-full h-[100px] md:h-[300px] sm:h-[83px]">
                  <div className="absolute bottom-8 left-0 w-full flex justify-center">
                    <Button
                      size="3xl"
                      className="min-w-[176px] rounded-[24px] px-[34px] font-hankengrotesk font-semibold tracking-[-0.32px] sm:px-5"
                      onClick={() => navigate('/services')}
                    >
                      Our Services
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs Navigation */}
            <TabList className="flex flex-wrap justify-center gap-3 px-5 py-6 overflow-x-auto whitespace-nowrap">
              {tabData.map((tab, idx) => (
                <Tab
                  key={idx}
                  className="px-6 py-2 font-hankengrotesk text-[16px] font-semibold tracking-[-0.32px] text-gray-500 sm:px-4 sm:text-[14px]"
                >
                  {tab.title}
                </Tab>
              ))}
            </TabList>

            {/* Tab Content */}
            {tabData.map((tab, index) => (
              <TabPanel key={`tab-panel-${index}`} className="w-full p-2">
                <div className="flex w-full max-w-4xl mx-auto items-center md:flex-col gap-8">
                  <div className="flex flex-col flex-1 items-start gap-5">
                    <Heading
                      size="text8xl"
                      as="h4"
                      className="!font-dmsans text-[28px] font-medium leading-[111%] tracking-[-1.15px] !text-cyan-900 md:text-[24px] sm:text-[20px]"
                    >
                      {tab.heading}
                    </Heading>
                    <Heading
                      size="headings"
                      as="h5"
                      className="text-[14px] font-semibold leading-[150%] tracking-[-0.56px] !text-gray-800_99"
                    >
                      {tab.subheading}
                    </Heading>
                    <div className="flex flex-col gap-3 w-full">
                      {tab.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Img src="images/img_ci_check_all.svg" alt="Check Icon" className="h-6 w-6" />
                          <Heading as="p" className="text-[16px] font-medium tracking-[-0.64px]">
                            {feature}
                          </Heading>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full max-w-[300px] md:max-w-full">
                    <Img
                      src={tab.image}
                      alt="Service Image"
                      className="w-full h-auto rounded-[12px] object-cover"
                      data-aos="zoom-in-up"
                    />
                  </div>
                </div>
              </TabPanel>
            ))}

          </Tabs>
        </div>
      </div>
    </>
  );
}