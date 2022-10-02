/**
 * React Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import { ReactComponent as ChevronRight } from "../../assets/svgs/chevron-right.svg";

const FeatureCard = ({
  title,
  description,
  btnText,
  image,
  className,
  titleClassName,
  descriptionClassName,
}) => {
  return (
    <div
      className={`flex flex-wrap justify-between items-center my-3 p-8 bg-white rounded-lg ${className}`}
    >
      <div>
        <h3 className={`text-2xl font-semibold ${titleClassName}`}>{title}</h3>
        <p
          className={`text-base text-zinc-500 w-72 py-2 ${descriptionClassName}`}
        >
          {description}
        </p>
        {btnText && (
          <button className="flex items-center font-semibold text-lg text-lime-600">
            <span>{btnText}</span>
            <ChevronRight className="mt-1" />
          </button>
        )}
      </div>
      <div className="w-full sm:w-auto">
        <img
          className="-my-10 sm:my-0 w-44 sm:w-52 float-right sm:float-none"
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
};

export default FeatureCard;
