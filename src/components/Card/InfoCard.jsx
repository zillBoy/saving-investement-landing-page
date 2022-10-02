/**
 * React Dependencies
 */
import React from "react";

const InfoCard = ({ Image, title, description }) => {
  return (
    <div className="my-8">
      <Image className="w-12 h-12 text-white border-2 border-white rounded-full p-2" />
      <h3 className="text-white text-xl font-semibold pt-4 pb-2">{title}</h3>
      <p className="text-white w-full sm:w-96">{description}</p>
    </div>
  );
};

export default InfoCard;
