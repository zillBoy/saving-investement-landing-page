/**
 * React Dependencies
 */
import React, { useState, useLayoutEffect } from "react";

/**
 * Internal Dependencies
 */
import { btnType } from "../../utils/constants";

const Button = ({
  text = "",
  parentClassName,
  className,
  type = "primary",
  ...props
}) => {
  const [color, setColor] = useState(type);

  useLayoutEffect(() => {
    if (!btnType[type]) {
      setColor(btnType["primary"]);
    } else {
      setColor(btnType[type]);
    }
  }, [type]);

  return (
    <div className={parentClassName}>
      <button
        className={`py-3 px-6 text-base sm:py-4 sm:px-9 sm:text-lg text-white bg-gradient-to-br ${color}  ${className}`}
        {...props}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
