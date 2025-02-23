import React from "react";
import { menuItems } from "../data";
import ViewButton from "./ViewButton";

type prop = {
  showMenu?: boolean;
};
const MobileMenu = ({ showMenu }: prop) => {
  return (
    <div
      className={`h-screen bg-menuBg bg-bottom bg-no-repeat
    bg-neutral-veryDarkViolet flex flex-col items-center gap-10 py-12 px-8 
   opacity-0 transition-opacity  duration-700 ease-in-out 
    ${showMenu && "opacity-100"}`}
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
