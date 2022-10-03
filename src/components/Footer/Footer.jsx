/**
 * React Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import FAQ from "./FAQ";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <div className="py-16 text-white">
      <FAQ />
      <FooterNav />
    </div>
  );
};

export default Footer;
