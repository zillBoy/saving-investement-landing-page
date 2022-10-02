/**
 * React Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import { gradientGridType } from "../../utils/constants";

const GridWrapper = ({ type = "default", className, children }) => {
  return (
    <div
      className={`flex flex-wrap justify-between w-full pb-8 ${gradientGridType[type]} ${className}`}
    >
      {children}
    </div>
  );
};

export default GridWrapper;
