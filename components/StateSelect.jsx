import React, { useState } from "react";

import Link from "next/link";

import { states, abbrState } from "../utils/NameToAbbreviation";

function StateSelect(props) {
  const [state, setState] = useState(abbrState("Arizona"));

  return (
    <>
      <div className=" border-gray-400 border-2 w-fit mt-5">
        <select
          id="states"
          name="states"
          className="outline-none"
          onChange={(e) => {
            setState(abbrState(e.target.value));
          }}
        >
          {Object.keys(states).map(function (key, index) {
            return (
              <option value={key} key={key}>
                {key}
              </option>
            );
          })}
        </select>
      </div>

      <Link href={`http://localhost:3000/states/${state}`}>
        <div className="px-24 py-2 my-5 w-fit bg-orange-400 font-open-sans font-extrabold text-white text-lg">
          Find
        </div>
      </Link>
    </>
  );
}

export default StateSelect;
