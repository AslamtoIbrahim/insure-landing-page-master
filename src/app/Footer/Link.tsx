import React from "react";

interface menu {
  title: string;
  links: string[];
}

type prop = {
  menuItems: menu;
};
const Link = ({ menuItems }: prop) => {
  return (
    <div className="w-full flex flex-col text-center gap-6 uppercase font-karla font-semibold 
    md:text-start  ">
      <h1 className="text-neutral-darkGrayishViolet">{menuItems.title}</h1>
      <div className="flex flex-col items-center md:items-start gap-2 text-neutral-veryDarkViolet ">
        {menuItems.links.map((item, index) => {
          return (
            <a className="link whitespace-nowrap" key={index} href="#">
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Link;
