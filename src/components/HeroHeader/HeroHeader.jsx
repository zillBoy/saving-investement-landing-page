/**
 * React Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import HeroHeading from "./HeroHeading";
import FeedbackReviewList from "./FeedbackReview/FeedbackReviewList";

const HeroHeader = () => {
  return (
    <div>
      <HeroHeading />
      <div className="flex flex-wrap justify-between py-8">
        <div className="text-zinc-200">
          <p>Trusted by More than</p>
          <p>10,000 Companies</p>
        </div>
        <FeedbackReviewList />
      </div>
    </div>
  );
};

export default HeroHeader;
