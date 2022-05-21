import React from "react";

import ParkCard from "./ParkCard";

function ParkList(props) {
  return (
    <div className="grid grid-cols-1 justify-items-center">
      {props.parks.map((park) => {
        return <ParkCard key={park.id} park={park} />;
      })}
    </div>
  );
}

export default ParkList;
