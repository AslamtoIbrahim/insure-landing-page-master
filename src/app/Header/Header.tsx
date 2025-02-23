"use client";
import React, { useEffect, useState } from "react";
import Navigator from "./Navigator";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [menuActive, setmenuActive] = useState(false);

  const toggleMenu = () => {
    setmenuActive(!menuActive);
  };

  useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuActive]);

  return (
    <div className="">
      <Navigator click={toggleMenu} />
      {menuActive && <MobileMenu showMenu={menuActive} />}
    </div>
  );
};

export default Header;
