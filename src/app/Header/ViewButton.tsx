import React from "react";

type prop ={
  styles?: string;
  text?: string;
}
const ViewButton = ({text = 'View Plans', styles} : prop) => {
  return (
    <button className={` text-neutral-veryLightGray uppercase font-karla 
    border-neutral-veryLightGray border-2
     hover:bg-neutral-veryLightGray hover:text-neutral-veryDarkViolet 
     ${styles ? styles : 'w-full py-2 text-xl'}`}>
      {text}
    </button>
  );
};

export default ViewButton;
