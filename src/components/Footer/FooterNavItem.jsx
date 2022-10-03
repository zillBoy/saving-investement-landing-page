/**
 * React Dependencies
 */
import React from "react";

const FooterNavItem = ({ navigation: { title, items } }) => {
  return (
    <div className="w-full  mr-4 sm:mr-16">
      <h4 className="font-semibold hover:cursor-pointer">{title}</h4>
      <div className="mt-6">
        {items.map((item, index) => (
          <p
            key={index}
            className="text-sm sm:text-base text-zinc-300 py-1 hover:cursor-pointer"
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FooterNavItem;
