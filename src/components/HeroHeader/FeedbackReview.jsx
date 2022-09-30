/**
 * React Dependencies
 */
import React from "react";

const FeedbackReview = ({ number, text }) => {
  return (
    <div className="flex items-center">
      <span className="w-6 h-6 bg-gradient-to-r from-lime-700 via-lime-500 to-lime-200 rounded-full"></span>
      <div className="ml-4">
        <p className="text-zinc-200">{number}</p>
        <p className="text-zinc-200">{text}</p>
      </div>
    </div>
  );
};

export default FeedbackReview;
