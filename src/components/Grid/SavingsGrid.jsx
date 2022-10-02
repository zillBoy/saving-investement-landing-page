/**
 * React Dependencies
 */
import React from "react";
import FeatureCard from "../Card/FeatureCard";

/**
 * Internal Dependencies
 */
import GridWrapper from "./GridWrapper";
import { savingsCards } from "../../utils/constants";

const SavingsGrid = () => {
  return (
    <>
      <GridWrapper>
        {savingsCards.map((card, index) => (
          <FeatureCard key={index} {...card} />
        ))}
      </GridWrapper>
    </>
  );
};

export default SavingsGrid;
