import React from "react";

const sizes = {
  textxs: "text-[5px] font-medium",
  texts: "text-[6px] font-medium",
  textmd: "text-[12px] font-medium",
  textlg: "text-[14px] font-medium",
  textxl: "text-[15px] font-medium",
  text2xl: "text-[16px] font-medium sm:text-[13px]",
  text3xl: "text-[17px] font-medium sm:text-[14px]",
  text4xl: "text-[18px] font-medium sm:text-[15px]",
  text5xl: "text-[20px] font-medium sm:text-[17px]",
  text6xl: "text-[22px] font-medium sm:text-[18px]",
  text7xl: "text-[24px] font-medium md:text-[22px] sm:text-[20px]",
  text8xl: "text-[28px] font-medium md:text-[26px] sm:text-[23px]",
  text9xl: "text-[44px] font-medium md:text-[40px] sm:text-[37px]",
  text10xl: "text-[46px] font-medium md:text-[42px] sm:text-[39px]",
  text11xl: "text-[52px] font-medium md:text-[44px]",
  headingxs: "text-[9px] font-semibold",
  headings: "text-[14px] font-semibold",
  headingmd: "text-[16px] font-semibold sm:text-[13px]",
  headinglg: "text-[20px] font-semibold sm:text-[17px]",
};

const Heading = ({ children, className = "", size = "text2xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-800 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
