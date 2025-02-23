import React from "react";
import ViewButton from "../Header/ViewButton";

const FindOut = () => {
  return (
    <div className="bg-primary-darkViolet m-6 py-16 px-2
     flex flex-col items-center text-center gap-8 
     bg-intrRight bg-no-repeat bg-[top_142%_right] ">
      <h1 className="text-neutral-veryLightGray font-dmSerif text-3xl">Find out more about how we work</h1>
      <ViewButton text="How we work" styles="w-fit px-4 py-1 text-sm"/>
    </div>
  );
};

export default FindOut;
