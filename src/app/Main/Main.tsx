import React from "react";
import Image from "next/image";
import hero from "../../../public/sources/images/image-intro-mobile.jpg";
import ViewButton from "../Header/ViewButton";
import Humanize from "./Humanize";
import Different from "./Different";
import FindOut from "./FindOut";

const Main = () => {
  return (
    <div>
      <section className="">
        <Image src={hero} alt="Hero image" width={375} height={451} />
        <Humanize />
      </section>
      <section  className="bg-intrRight bg-no-repeat bg-[top_-26%_right]">
        <Different />
      </section>
      <section>
        <FindOut />
      </section>
    </div>
  );
};

export default Main;
