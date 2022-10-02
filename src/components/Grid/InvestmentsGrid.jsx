/**
 * React Dependencies
 */
import React from "react";

/**
 * Intenral Dependencies
 */
import GridWrapper from "./GridWrapper";
import FeatureCard from "../Card/FeatureCard";
import { investementsCards } from "../../utils/constants";

const InvestmentsGrid = () => {
  return (
    <>
      <GridWrapper>
        {investementsCards.map((card, index) => (
          <FeatureCard key={index} {...card} />
        ))}
      </GridWrapper>
    </>
  );
};

export default InvestmentsGrid;
