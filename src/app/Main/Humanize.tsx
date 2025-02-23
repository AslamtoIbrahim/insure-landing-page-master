import React from "react";
import ViewButton from "../Header/ViewButton";

const Humanize = () => {
  return (
    <div className="bg-primary-darkViolet text-neutral-veryLightGray font-karla text-center
                     px-6 py-16 flex flex-col items-center gap-6
                     intro">
      <h1 className="font-dmSerif text-4xl">Humanizing your insurance.</h1>
      <p className="text-sm font-normal">
        Get your life insurance coverage easier and faster. We blend our
        expertise and technology to help you find the plan that’s right for you.
        Ensure you and your loved ones are protected.
      </p>
      <ViewButton styles="w-fit px-4 py-1 text-sm"/>
    </div>
  );
};

export default Humanize;
