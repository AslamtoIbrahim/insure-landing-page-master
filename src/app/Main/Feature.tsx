import React from "react";
import Image from "next/image";

interface feat {
  title: string;
  description: string;
  image: string;
}

type prop = {
  features: feat;
};
const Feature = ({ features }: prop) => {
  return (
    <div className="flex flex-col items-center text-center gap-2 md:text-start md:items-start ">
      <Image className="w-16 h-auto py-4" src={features.image} alt={features.title} width={86} height={86} />
      <h2 className="text-neutral-veryDarkViolet text-xl lg:text-2xl font-dmSerif ">{features.title}</h2>
      <p className="text-neutral-darkGrayishViolet text-sm lg:text-xl font-karla">{features.description}</p>
    </div>
  );
};

export default Feature;
