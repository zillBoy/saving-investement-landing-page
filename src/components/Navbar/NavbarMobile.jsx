/**
 * React Dependencies
 */
import React, { useState } from "react";

/**
 * Internal Dependencies
 */
import NavbarItem from "./NavbarItem";
import { mobileNavbarItem } from "../../utils/constants";
import MobileMenu from "../MobileMenu/MobileMenu";

const NavbarMobile = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenuHandler = () => {
    setMenuVisible((prevState) => !prevState);
  };

  return (
    <>
      {menuVisible && <MobileMenu />}
      <div className="block sm:hidden">
        <NavbarItem item={mobileNavbarItem} onClick={toggleMenuHandler} />
      </div>
    </>
  );
};

export default NavbarMobile;
