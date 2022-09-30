/**
 * React Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import FeedbackReview from "../FeedbackReview";
import { feedbackReviews } from "../../../utils/constants";

const FeedbackReviewList = () => {
  return (
    <div className="flex flex-wrap gap-4 sm:gap-8 mt-6 sm:mt-0">
      {feedbackReviews.map((feedbackReview) => (
        <FeedbackReview key={feedbackReview.id} {...feedbackReview} />
      ))}
    </div>
  );
};

export default FeedbackReviewList;
