import React from "react";

import MapChart from "./MapChart";

function MapSection() {
  return (
    <div className="w-full flex flex-col justify-center relative bg-[#4d8b3f]">
      <div className="mx-5">
        <h2 className="font-open-sans text-white text-xl font-bold">
          Click to find local National Parks!
        </h2>
        <MapChart />
      </div>
    </div>
  );
}

export default MapSection;
