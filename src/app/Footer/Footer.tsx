import React from "react";
import Logo from "../Logo";
import SocialIcons from "./SocialIcons";
import MenuLinks from "./MenuLinks";

const Footer = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-8 mt-24 px-6 py-12
    bg-intrTop bg-no-repeat bg-[top_-5%_center] "
    >
      <section className="flex flex-col items-center justify-center gap-8 w-full">
        <Logo />
        <SocialIcons />
      </section>
      <hr className="border-neutral-darkGrayishViolet/35  w-full" />
      <section>
        <MenuLinks />
      </section>
    </div>
  );
};

export default Footer;
