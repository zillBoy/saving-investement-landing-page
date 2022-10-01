/**
 * React Dependencies
 */
import React from "react";

const SectionText = ({ kicker, title }) => {
  return (
    <div className="text-center py-8">
      <h3 className="text-lg text-zinc-400">{kicker}</h3>
      <p className="text-3xl sm:text-4xl font-semibold text-zinc-800">
        {title}
      </p>
    </div>
  );
};

export default SectionText;
