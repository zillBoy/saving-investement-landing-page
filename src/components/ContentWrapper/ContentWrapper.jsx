/**
 * React Dependencies
 */
import React from "react";

const ContentWrapper = ({ children, className }) => {
  return <div className={`px-4 sm:px-8 md:px-12 ${className}`}>{children}</div>;
};

export default ContentWrapper;
