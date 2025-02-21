import React from "react";
import { menuItems } from "../data";
import ViewButton from "./ViewButton";
 
const MobileMenu = () => {
  return (
    <div
      className={`h-screen bg-menuBg bg-bottom bg-no-repeat
    bg-neutral-veryDarkViolet flex flex-col items-center gap-10 py-12 px-8 
    transition-transform duration-300 ease-in-out
    `}
    >
      <ul className="flex flex-col items-center gap-8">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              className="text-center text-neutral-veryLightGray uppercase font-karla
            text-xl"
              href="#"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <ViewButton />
    </div>
  );
};

export default MobileMenu;
