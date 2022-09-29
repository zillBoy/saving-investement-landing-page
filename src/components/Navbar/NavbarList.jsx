/**
 * React Dependencies
 */
import React, { useLayoutEffect, useState } from "react";

/**
 * Internal Dependencies
 */
import NavbarItem from "./NavbarItem";
import { navbarItems, navbarItemType } from "../../utils/constants";

const NavbarList = ({ className = "hidden", type = "desktop" }) => {
  const [itemClassName, setItemClassName] = useState(navbarItems[type]);

  useLayoutEffect(() => {
    if (!navbarItemType[type]) {
      setItemClassName(navbarItemType["desktop"]);
    } else {
      setItemClassName(navbarItemType[type]);
    }
  }, [type]);

  return (
    <div className={`sm:block ${className}`}>
      {navbarItems.map((item, index) => (
        <NavbarItem key={index} item={item} className={itemClassName} />
      ))}
    </div>
  );
};

export default NavbarList;
