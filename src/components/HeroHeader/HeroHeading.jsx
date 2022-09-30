/**
 * React Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import Button from "../Button/Button";
import HeaderText from "../Text/HeaderText";
import { heroHeadings } from "../../utils/constants";

const HeroHeading = () => {
  return (
    <div className="mx-auto py-24 text-center">
      <div className="leading-6 sm:leading-10 mb-6 w-full sm:w-4/6 m-auto">
        {heroHeadings.map((heading, index) => (
          <HeaderText
            key={index}
            color={heading?.color}
            className={heading?.className}
          >
            {heading.text}
          </HeaderText>
        ))}
      </div>

      <div className="w-full md:w-5/6 lg:w-3/6 mb-6 m-auto">
        <p className="text-base sm:text-xl text-zinc-300">
          A Finncial Tool that helps you save your money all in one place.
          vester helps you achieve your financial dreams
        </p>
      </div>
      <Button parentClassName="mt-14" text="Get started" />
    </div>
  );
};

export default HeroHeading;
