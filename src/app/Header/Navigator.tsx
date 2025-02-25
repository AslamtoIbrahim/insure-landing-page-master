"use client";
import React from "react";
import Image from "next/image";
import hamb from "../../../public/sources/images/icon-hamburger.svg";
import close from "../../../public/sources/images/icon-close.svg";
import Logo from "../Logo";
import NavLinks from "./NavLinks";

type prop = {
  click?: () => void;
};

const Navigator = ({ click }: prop) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
    if (click) click();
  };
  return (
    <div className="bg-neutral-veryLightGray flex items-center justify-between p-4
    md:px-8 lg:px-16 xl:px-32 xl:py-8 ">
      <Logo />
      <button
        onClick={handleClick}
        className="outline-none border-none md:hidden"
      >
        {open ? (
          <Image src={close} alt="close icon" width={32} height={32} />
        ) : (
          <Image src={hamb} alt="hamburger icon" width={32} height={32} />
        )}
      </button>
      <NavLinks />
    </div>
  );
};

export default Navigator;
