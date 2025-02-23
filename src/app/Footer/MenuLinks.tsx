import React from "react";
import { menuData } from "../data";
import Link from "./Link";
const MenuLinks = () => {
  return (
    <div className="w-fill flex flex-col items-center gap-6">
      {menuData.map((item, index) => {
        return <Link key={index} menuItems={item} />;
      })}
    </div>
  );
};

export default MenuLinks;
