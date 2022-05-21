import React, { useState } from "react";
import { useQuery } from "react-query";

import HillSVG from "./HillSVG";
import StateSelect from "./StateSelect";

import { abbrState } from "../utils/NameToAbbreviation";

function IntroSection() {
  return (
    <section className="w-full h-screen flex items-center relative">
      <div className="mx-5 flex-col flex">
        <h1 className=" font-extrabold text-4xl font-open-sans text-orange-400">
          Park Hopper
        </h1>
        <h2 className=" text-xl font-montserrat">Fall in love with nature.</h2>
        <StateSelect />
      </div>
      <HillSVG />
    </section>
  );
}

export default IntroSection;
