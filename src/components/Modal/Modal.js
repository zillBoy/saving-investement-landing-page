/**
 * React Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import Button from "../Button/Button";

const Modal = ({ children, isOpen, handleClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed flex column items-center z-50 p-4 inset-0 bg-black opacity-60 ">
      <Button text="Close" onClick={handleClose} />
      <div>{children}</div>
    </div>
  );
};

export default Modal;
