import React, { useState } from "react";

import Link from "next/link";

function StateSelect(props) {
  const [query, setQuery] = useState("");

  return (
    <div className="flex flex-col justify-center items-center">
      <input
        className=" rounded-xl w-full h-10 mt-5 px-2 border-2 border-gray-400"
        placeholder="Search for a...state or activity! Try 'Alaska'"
        onChange={(event) => {
          setQuery(event.target.value);
        }}
        value={query}
      ></input>

      <Link href={`/query/${query}`}>
        <div className="px-16 py-2 my-2 w-fit bg-orange-400 font-open-sans font-extrabold text-white text-lg cursor-pointer">
          Find
        </div>
      </Link>
    </div>
  );
}

export default StateSelect;
