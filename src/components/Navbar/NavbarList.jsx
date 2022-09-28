/**
 * React Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import NavbarItem from "./NavbarItem";
import { navbarItems } from "../../utils/constants";

const NavbarList = () => {
  return (
    <div className="hidden sm:block">
      {navbarItems.map((item, index) => (
        <NavbarItem key={index} item={item} />
      ))}
    </div>
  );
};

export default NavbarList;
