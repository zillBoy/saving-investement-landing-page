/**
 * React Dependencies
 */
import React from "react";

const NavbarItem = ({ item = {}, ...props }) => {
  return (
    <a className="text-zinc-300 text-lg mx-3" href={item?.link} {...props}>
      {item?.name}
    </a>
  );
};

export default NavbarItem;
