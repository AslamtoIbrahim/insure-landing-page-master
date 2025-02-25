import React from "react";
import Image from "next/image";
import hero from "../../../public/sources/images/image-intro-mobile.jpg";
import heroDes from "../../../public/sources/images/image-intro-desktop.jpg";
import Humanize from "./Humanize";
import Different from "./Different";
import FindOut from "./FindOut";

const Main = () => {
  return (
    <div className="md:overflow-hidden">
      <section className="bg-primary-darkViolet md:grid md:grid-cols-2 md:items-center
      md:px-8 md:py-8 md:gap-4 md:relative  
      md:bg-intrLeftDesk md:bg-no-repeat md:bg-[bottom_-377px_left_-40px]
      lg:px-16 xl:px-32 lg:gap-8 xl:gap-[25rem]
      ">
        <picture className="md:col-start-2 md:relative md:top-16 lg:top-20 xl:top-32">
          <source media="(min-width: 768px)" srcSet={heroDes.src} />
          <Image
            className="w-full h-auto md:w-fit "
            src={hero}
            alt="Hero image"
            width={375}
            height={451}
            priority={true}
          />
        </picture>
        <div className="md:row-start-1">
          <hr className="hidden md:block border-neutral-veryLightGray/45 w-1/3 md:mt-16
          lg:mt-20 xl:mt-32" />
          <Humanize />
        </div>
        <div className="hidden md:block mdIntro w-1/2 lg:1/3 xl:w-1/4 h-full absolute top-0 right-0 "></div>
      </section>

      <section className="bg-intrRight bg-no-repeat bg-[top_-26%_right] 
      md:bg-intrLeftDesk md:bg-[left_-3.15rem_top_-9rem] ">
        <Different />
      </section>
      <section>
        <FindOut />
      </section>
    </div>
  );
};

export default Main;
