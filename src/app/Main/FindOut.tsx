import React from "react";
import ViewButton from "../Header/ViewButton";

const FindOut = () => {
  return (
    <div className="bg-primary-darkViolet m-6 py-16 px-2
     flex flex-col items-center text-center gap-8 
     md:flex-row md:px-12 md:gap-12 md:text-start md:justify-between
     bg-intrRight bg-no-repeat bg-[top_142%_right]
     md:bg-intrRightDesk md:bg-[top_111%_right] 
     lg:mx-16 lg:gap-24 xl:mx-32 xl:py-20 xl:gap-[38rem] xl:px-32">
      <h1 className="text-neutral-veryLightGray font-dmSerif text-3xl lg:text-4xl xl:text-6xl">Find out more about how we work</h1>
      <ViewButton text="How we work" styles="w-fit px-4 py-1 text-sm whitespace-nowrap xl:text-2xl "/>
    </div>
  );
};

export default FindOut;
