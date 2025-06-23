import { Img, Heading, Text } from "../../components";
import UserStatistics from "../../components/UserStatistics";
import React, { Suspense, useState, useEffect, useRef } from "react";

// Original achievement stats list
const achievementStatsList = [
  { userCount: "300K", userHiredText: "users got hired" },
  { userCount: "125+", userHiredText: "platforms deployed" },
  { userCount: "10+", userHiredText: "years of proven success" },
];

// Modified UserStatistics component with visibility-based animation logic
const AnimatedUserStatistics = ({ userCount, userHiredText, className, index }) => {
  // Extract the numeric value and suffix
  const numericValue = parseInt(userCount.replace(/\D/g, ''));
  const suffix = userCount.replace(/[0-9]/g, '');
  
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const startTimeRef = useRef(null);
  const requestRef = useRef(null);
  
  // Set up intersection observer to detect when element becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once we've detected visibility, no need to observe anymore
          observer.unobserve(elementRef.current);
        }
      },
      {
        // Adjust threshold as needed - 0.1 means when 10% of the element is visible
        threshold: 0.1,
      }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  
  // Start the animation when the element becomes visible
  useEffect(() => {
    if (!isVisible) return;
    
    // Add staggered delay based on index
    const delay = index * 300;
    const duration = 2500; // 2.5 seconds for the animation
    
    const delayTimeout = setTimeout(() => {
      startTimeRef.current = null;
      
      const animate = (timestamp) => {
        if (startTimeRef.current === null) {
          startTimeRef.current = timestamp;
        }
        
        const elapsed = timestamp - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for a more natural animation
        const easeOutQuad = t => t * (2 - t);
        const easedProgress = easeOutQuad(progress);
        
        setCount(Math.floor(easedProgress * numericValue));
        
        if (progress < 1) {
          requestRef.current = requestAnimationFrame(animate);
        }
      };
      
      requestRef.current = requestAnimationFrame(animate);
    }, delay);
    
    return () => {
      clearTimeout(delayTimeout);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isVisible, numericValue, index]);
  
  return (
    <div ref={elementRef} className={`flex flex-col gap-1.5 ${className}`}>
      <Text
        as="p"
        className="text-[57px] font-bold tracking-[-2.28px] sm:text-[48px] xs:text-[40px]"
      >
        {count}{suffix}
      </Text>
      <Text
        size="txtHankenGroteskMedium16"
        as="p"
        className="text-[16px] font-medium leading-[150%] tracking-[-0.64px] !text-gray-800_99 xs:text-[14px]"
      >
        {userHiredText}
      </Text>
    </div>
  );
};

export default function WhyChooseUsSection() {
  // Ref for the data-aos element to connect with intersection observer
  const sectionRef = useRef(null);
  
  return (
    <>
      {/* why choose us section - Made responsive */}
      <div className="relative h-[636px] lg:h-[636px] md:h-auto md:pb-[450px] sm:pb-[324px] sm:bottom-[15px] xs:pb-[550px]">
        {/* Top right decorative image */}
        <Img
          src="images/img_vector_gray_300.png"
          alt="Vector"
          className="absolute right-0 top-0 m-auto h-[270px] w-[29%] object-contain lg:h-[270px] lg:w-[29%] md:h-[200px] md:w-[35%] sm:h-[150px] sm:w-[40%] xs:h-[120px]"
        />
        
        {/* Main content container with ref for visibility detection */}
        <div 
          ref={sectionRef}
          className="absolute bottom-[-1px] left-0 right-0 mx-auto flex flex-1 flex-col items-start lg:bottom-[-1px] md:static" 
          data-aos='fade-up'
        >
          {/* Why choose us label */}
          <div className="relative z-[4] ml-[118px] flex w-[10%] justify-center rounded-[16px] bg-gray-200 p-1.5 lg:ml-[118px] lg:w-[10%] md:ml-[50px] md:w-[180px] sm:ml-[30px] sm:w-[160px] xs:ml-[20px] xs:w-[140px] sm:top-[40px]">
            <Heading
              size="headingmd"
              as="h2"
              className="!font-hankengrotesk text-[16px] font-semibold tracking-[-0.32px] !text-blue_gray-800_01 xs:text-[14px] "
            >
              Why chose us?
            </Heading>
          </div>
          
          {/* Background image with content */}
          <div className="relative mt-[-26px] flex h-[510px] w-[72%] items-start justify-center bg-[url(/public/images/img_group_9.png)] bg-cover bg-no-repeat p-12 lg:h-[510px] lg:w-[72%] md:h-auto md:w-[90%] md:p-8 sm:w-full sm:p-6 xs:p-4">
            <div className="mb-[72px] flex w-[88%] flex-col gap-[46px] md:w-full md:mb-10 sm:mb-8 sm:gap-8 xs:gap-6">
              {/* Text content */}
              <div className="flex flex-col items-start gap-3.5">
                <Text
                  as="p"
                  className="w-[72%] text-[60.75px] font-light leading-[121%] tracking-[-2.43px] lg:w-[72%] md:w-full md:text-[52px] sm:text-[42px] xs:text-[32px] sm:mt-[50px]"
                >
                  Recognized excellence in IT services
                </Text>
                <Heading
                  size="textlg"
                  as="h3"
                  className="w-[72%] text-[14px] font-medium leading-[150%] tracking-[-0.56px] !text-gray-800_99 lg:w-[72%] md:w-full sm:text-[13px] xs:text-[12px]"
                >
                  Empowering businesses with expert IT services that drive real growth and efficiency. We've helped
                  startups scale faster, reduce hiring time, and boost team productivity.
                </Heading>
              </div>
              
              {/* Stats section with animated counters */}
              <div className="mr-[264px] flex gap-[74px] lg:mr-[264px] md:mr-0 md:gap-12 sm:gap-8 md:flex-wrap sm:flex-wrap xs:flex-col xs:gap-6">
                <Suspense fallback={<div>Loading stats...</div>}>
                  {achievementStatsList.map((d, index) => (
                    <AnimatedUserStatistics 
                      {...d} 
                      key={"list300K" + index}
                      index={index}
                      className="w-[30%] lg:w-[30%] md:w-[45%] sm:w-[45%] xs:w-full" 
                    />
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side image */}
        <Img
          src="images/img_rectangle_4.png"
          alt="Image"
          className="absolute bottom-0 right-[7%] top-0 my-auto h-[436px] w-[38%] rounded-[16px] object-contain lg:h-[436px] lg:w-[38%] md:top-auto md:bottom-[20px] md:h-auto md:w-[45%] sm:w-[90%] sm:right-[5%] xs:w-[80%] xs:right-[10%]"
          data-aos='zoom-in-up'
          data-duration='1200'
        />
      </div>
    </>
  );
}