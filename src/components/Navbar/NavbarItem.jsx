/**
 * React Dependencies
 */
import React from "react";

const NavbarItem = ({ item = {}, className = "", ...props }) => {
  return (
    <a
      className={`text-zinc-300 mx-3 ${className}`}
      href={item?.link}
      {...props}
    >
      {item?.name}
    </a>
  );
};

export default NavbarItem;
