import React, { useState } from "react";
import { useQuery } from "react-query";

import HillSVG from "./HillSVG";
import StateSelect from "./StateSelect";

function IntroSection() {
  return (
    <section
      style={{
        backgroundImage:
          'url("https://www.nps.gov/common/uploads/structured_data/2595FA12-DF7A-1B6C-55D8F41ABCA2E011.jpg")',
      }}
      className="w-full min-h-[1000px] flex items-center relative bg-cover justify-center"
    >
      <div className="mx-5 flex-col flex z-10 max-w-[1000px]">
        <h1 className=" font-extrabold text-6xl font-open-sans text-orange-400">
          Park Hopper
        </h1>
        <h2 className=" text-3xl font-montserrat text-white mt-2">
          Fall in love with nature.
        </h2>
        <StateSelect />
      </div>
      <HillSVG />
      <div className="h-full w-full bg-black bg-opacity-40 top-0 left-0 absolute"></div>
    </section>
  );
}

export default IntroSection;
