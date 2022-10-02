/**
 * React Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import GridWrapper from "./GridWrapper";
import InfoCard from "../Card/InfoCard";
import { customerInfo } from "../../utils/constants";

const CustomerGrid = () => {
  return (
    <GridWrapper type="primary-gradient" className="p-8 rounded-lg mb-8">
      {customerInfo.map((customer) => (
        <InfoCard key={customer.id} {...customer} />
      ))}
    </GridWrapper>
  );
};

export default CustomerGrid;
