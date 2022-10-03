/**
 * React Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import FooterNavItem from "./FooterNavItem";
import { ReactComponent as LinkedInIcon } from "../../assets/svgs/linkedin.svg";
import { ReactComponent as TwitterIcon } from "../../assets/svgs/twitter.svg";
import { ReactComponent as InstagramIcon } from "../../assets/svgs/instagram.svg";
import { footerNavigation } from "../../utils/constants";

const FooterNav = () => {
  return (
    <div className="flex flex-col sm:justify-between sm:flex-row items-start sm:items-center pt-16">
      <div className="flex">
        {footerNavigation.map((navigation, index) => (
          <FooterNavItem key={index} navigation={navigation} />
        ))}
      </div>
      <div className="mt-8 sm:mt-0">
        <div>
          <img
            className="w-28"
            src={require("../../assets/images/footer-logo.png")}
            alt=""
          />
        </div>
        <div className="flex space-x-4 py-4">
          <TwitterIcon />
          <LinkedInIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
