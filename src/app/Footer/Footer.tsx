import React from "react";
import Logo from "../Logo";
import SocialIcons from "./SocialIcons";
import MenuLinks from "./MenuLinks";

const Footer = () => {
  return (
    <div
      className="bg-neutral-veryLightGray flex flex-col items-center justify-center gap-8 mt-24 px-6 py-12
    bg-intrTop bg-no-repeat bg-[top_-5%_center] 
    md:bg-intrTopDes md:bg-[top_-43%_left_-27%]  xl:bg-[top_-2%_left_2%]
    lg:px-16 xl:px-32"
    >
      <section className="flex flex-col items-center justify-center gap-8 w-full 
      md:flex-row md:justify-between ">
        <Logo />
        <SocialIcons />
      </section>
      <hr className="border-neutral-darkGrayishViolet/35  w-full" />
      <section className="md:w-full">
        <MenuLinks />
      </section>
    </div>
  );
};

export default Footer;
