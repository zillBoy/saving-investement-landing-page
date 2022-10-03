/**
 * React Dependencies
 */
import React from "react";

const FAQ = () => {
  return (
    <div>
      <h2 className="text-4xl w-full sm:w-1/2 font-semibold pb-2">
        Frequently asked questions
      </h2>
      <p className="text-zinc-300">
        Contact the Vester Support team at{" "}
        <span className="text-lime-500 hover:underline hover:cursor-pointer">
          support@Vester.com
        </span>{" "}
        or submit a request here:{" "}
        <a
          href="#support"
          className="text-lime-500 decoration-lime-500 underline underline-offset-4"
        >
          Vester Support.
        </a>
      </p>
    </div>
  );
};

export default FAQ;
