import React from "react";
import { menuItems } from "../data";
import ViewButton from "./ViewButton";

const NavLinks = () => {
  return (
    <div className="hidden  md:flex items-center gap-4 font-karla ">
      <ul className=" w-full flex items-center md:gap-6 ">
        {menuItems.map((item, index) => (
          <li key={index} className="">
            <a
              className="whitespace-nowrap uppercase text-neutral-darkGrayishViolet font-semibold
            hover:text-neutral-veryDarkViolet transition duration-300 "
              target="_blank"
              rel="noopener noreferrer"
              href="#"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <ViewButton
        styles="md:text-neutral-veryDarkViolet md:border-neutral-veryDarkViolet md:px-3 md:py-1 
         whitespace-nowrap
        md:hover:bg-neutral-veryDarkViolet md:hover:text-neutral-veryLightGray "
      />
    </div>
  );
};

export default NavLinks;
