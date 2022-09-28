/**
 * React Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import NavbarList from "./NavbarList";
import Button from "../Button/Button";
import NavbarLogo from "./NavbarLogo";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  return (
    <div className="flex py-4 px-4 sm:px-8 items-center justify-between bg-neutral-900">
      <NavbarLogo />
      <NavbarList />
      <Button text="Get started" parentClassName="hidden sm:block" />
      <NavbarMobile />
    </div>
  );
};

export default Navbar;
