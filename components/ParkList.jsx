import React from "react";

import ParkCard from "./ParkCard";

function ParkList(props) {
  return (
    <div className="grid grid-cols-1 justify-items-center sm:grid-cols-3 max-w-[1000px] gap-6">
      {props.parks.map((park) => {
        return <ParkCard key={park.id} park={park} />;
      })}
    </div>
  );
}

export default ParkList;
