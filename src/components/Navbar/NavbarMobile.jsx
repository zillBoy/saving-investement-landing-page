/**
 * React Dependencies
 */
import React, { useState } from "react";

/**
 * Internal Dependencies
 */
import NavbarItem from "./NavbarItem";
import MobileMenu from "../MobileMenu/MobileMenu";
import ReactPortal from "../ReactPortal/ReactPortal";
import { mobileNavbarItem } from "../../utils/constants";

const NavbarMobile = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenuHandler = () => {
    setMenuVisible((prevState) => !prevState);
  };

  return (
    <>
      {menuVisible && (
        <ReactPortal wrapperId="portal-mobilemenu">
          <MobileMenu
            isOpen={menuVisible}
            handleClose={() => setMenuVisible(false)}
          />
        </ReactPortal>
      )}
      <div className="block md:hidden">
        <NavbarItem item={mobileNavbarItem} onClick={toggleMenuHandler} />
      </div>
    </>
  );
};

export default NavbarMobile;
