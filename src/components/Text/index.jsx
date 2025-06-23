import React from "react";

const sizes = {
  text12xl: "text-[40px] font-light md:text-[30px] sm:text-[30px]",
};

const Text = ({ children, className = "", as, size = "text12xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-cyan-900 font-dmsans ${className} ${sizes[size]} `} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
