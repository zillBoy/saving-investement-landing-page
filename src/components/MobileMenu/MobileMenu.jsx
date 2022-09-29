/**
 * React Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import Button from "../Button/Button";
import NavbarList from "../Navbar/NavbarList";

const MobileMenu = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bg-neutral-900 w-full inset-0 p-4">
      <Button
        text="Close"
        onClick={handleClose}
        parentClassName="fixed right-4"
        type="secondary"
      />
      <NavbarList
        className="flex flex-col items-center justify-center h-5/6"
        type="mobile"
      />
    </div>
  );
};

export default MobileMenu;
