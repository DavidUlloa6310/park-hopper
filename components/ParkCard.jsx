import React from "react";

import Link from "next/dist/client/link";

function ParkCard(props) {
  return (
    <Link href={`http://localhost:3000/parks/${props.park.parkCode}`}>
      <div
        style={{ backgroundImage: `url(${props.park.images[0].url})` }}
        className={`w-72 h-80 my-5 rounded-xl bg-cover relative cursor-pointer`}
      >
        <h2 className=" font-montserrat text-white text-xl bottom-0 left-0 absolute bg-black bg-opacity-30 rounded-b-xl p-2">
          {props.park.fullName}
        </h2>
      </div>
    </Link>
  );
}

export default ParkCard;
