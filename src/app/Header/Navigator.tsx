"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../public/sources/images/logo.svg";
import hamb from "../../../public/sources/images/icon-hamburger.svg";
import close from "../../../public/sources/images/icon-close.svg";

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
    <div className="bg-neutral-veryLightGray flex items-center justify-between p-4">
      <Image src={logo} alt="Logo" width={112} height={18} />
      <button onClick={handleClick} className="outline-none border-none">
        {open ? (
          <Image src={close} alt="close icon" width={32} height={32} />
        ) : (
          <Image src={hamb} alt="hamburger icon" width={32} height={32} />
        )}
      </button>
    </div>
  );
};

export default Navigator;
