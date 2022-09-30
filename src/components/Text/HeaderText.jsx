/**
 * React Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import { headerTextColorType } from "../../utils/constants";

const HeaderText = ({ color = "", className = "", children, ...props }) => {
  let textColor = "";

  if (color.length !== 0) {
    if (headerTextColorType[color]) {
      textColor = headerTextColorType[color];
    } else {
      textColor = color;
    }
  } else {
    textColor = "text-white";
  }

  return (
    <h1
      className={`text-3xl sm:4xl md:text-5xl lg:text-6xl font-bold ${textColor} ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
};

export default HeaderText;
