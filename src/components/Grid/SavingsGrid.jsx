/**
 * React Dependencies
 */
import React from "react";
import FeatureCard from "../Card/FeatureCard";

/**
 * Internal Dependencies
 */
import { savingsCards } from "../../utils/constants";

const SavingsGrid = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between w-full ">
        {savingsCards.map((card, index) => (
          <FeatureCard key={index} {...card} />
        ))}
      </div>
    </>
  );
};

export default SavingsGrid;
