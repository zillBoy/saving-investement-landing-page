/**
 * React Dependencies
 */
import React from "react";
import Button from "../Button/Button";

/**
 * Intenral Dependencies
 */
import HeaderText from "../Text/HeaderText";

const heroHeading = [
  { text: "Save", color: "primary-gradient", className: "inline pr-2 sm:pr-4" },
  { text: "and", className: "inline pr-2 sm:pr-4" },
  {
    text: "Invest",
    color: "secondary-gradient",
    className: "inline pr-2 sm:pr-4",
  },
  {
    text: "your Money all in one place.",
    className: "inline pr-2 sm:pr-4",
  },
];

const HeroHeader = () => {
  return (
    <div>
      <div className="mx-auto py-24 text-center">
        <div className="leading-6 sm:leading-10 mb-6 w-full sm:w-4/6 m-auto">
          {heroHeading.map((heading, index) => (
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
    </div>
  );
};

export default HeroHeader;
