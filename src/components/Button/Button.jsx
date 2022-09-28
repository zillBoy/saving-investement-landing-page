/**
 * Internal Dependencies
 */
import React from "react";

const Button = ({ text = "", parentClassName, className, ...props }) => {
  return (
    <div className={parentClassName}>
      <button
        className={`py-4 px-6 text-lg text-white bg-gradient-to-br from-green-600 to-lime-600  ${className}`}
        {...props}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
