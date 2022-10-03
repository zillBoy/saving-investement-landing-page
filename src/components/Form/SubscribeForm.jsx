/**
 * React Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import Button from "../Button/Button";
import { gradientGridType } from "../../utils/constants";

const SubscribeForm = () => {
  return (
    <div className="py-16">
      <div
        className={`flex justify-between flex-col sm:flex-row rounded-lg p-8 py-16 ${gradientGridType["primary-gradient"]}`}
      >
        <div>
          <p className="text-white text-2xl font-semibold">Join 140 people.</p>
          <p className="text-white text-2xl font-semibold">
            Start investing today.
          </p>
        </div>
        <div className="flex items-center pt-8">
          <input
            style={{
              background: "rgba(190,237,113, 1)",
            }}
            className="text-black py-4 sm:py-6 w-36 sm:w-40 md:w-96 px-2"
          />
          <Button
            text="Get started"
            type="tertiary"
            style={{
              border: "6px solid rgba(190,237,113, 1)",
            }}
            className="text-green-600 text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
