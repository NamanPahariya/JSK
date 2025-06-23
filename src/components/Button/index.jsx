import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[16px]",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    white_A700_02: "bg-white-a700_02 text-blue_gray-800",
    blue_gray_700_01: "bg-blue_gray-700_01 text-light_green-300",
    white_A700: "bg-white-a700 shadow-xs",
    blue_gray_800: "bg-blue_gray-800 text-white-a700_02",
    gray_200: "bg-gray-200 text-blue_gray-800_01",
  },
  outline: {
    gray_300_01: "border-gray-300_01 border border-solid",
  },
};
const sizes = {
  xl: "h-[44px] px-8 text-[16px]",
  "4xl": "h-[52px] px-2.5",
  "5xl": "h-[56px] px-3.5",
  lg: "h-[40px] px-2.5",
  xs: "h-[28px] px-2.5 text-[12px]",
  "6xl": "h-[56px] px-[34px] text-[16px]",
  "3xl": "h-[48px] px-[34px] text-[16px]",
  sm: "h-[32px] px-6 text-[16px]",
  "2xl": "h-[48px] px-4",
  md: "h-[36px] px-2.5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "blue_gray_800",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xl", "4xl", "5xl", "lg", "xs", "6xl", "3xl", "sm", "2xl", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "white_A700_02",
    "blue_gray_700_01",
    "white_A700",
    "blue_gray_800",
    "gray_200",
    "gray_300_01",
  ]),
};

export { Button };
