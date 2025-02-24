import React from "react";
import { menuData } from "../data";
import Link from "./Link";
const MenuLinks = () => {
  return (
    <div className="w-full flex flex-col items-center gap-6  md:flex-row md:items-start
    md:justify-between">
      {menuData.map((item, index) => {
        return <Link key={index} menuItems={item} />;
      })}
    </div>
  );
};

export default MenuLinks;
