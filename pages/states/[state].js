import React from "react";
import { useRouter } from "next/router";

import { useQuery } from "react-query";

import { expandState } from "../../utils/NameToAbbreviation";
import MapChart from "../../components/MapChart";
import ParkList from "../../components/ParkList";

function State() {
  const router = useRouter();
  const { state } = router.query;

  const { isLoading, error, data, refetch } = useQuery(
    `${state}-data`,
    fetchStateParks,
    {
      refetchOnReconnect: true,
    }
  );

  async function fetchStateParks() {
    const response = await fetch(
      `https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=${process.env.NEXT_PUBLIC_PARK_API_KEY}`,
      {
        method: "GET",
      }
    );
    let data = await response.json();
    return data;
  }

  if (isLoading)
    return (
      <main className="w-full h-screen flex justify-center items-center">
        <h1 className=" font-open-sans text-4xl text-black font-bold">
          Loading...
        </h1>
      </main>
    );

  if (error) return <div>ERROR</div>;

  return (
    <main className="w-full flex flex-col">
      <div className="mx-5 my-5">
        <h1 className="font-open-sans text-4xl font-extrabold text-orange-400">
          {expandState(state)}
        </h1>
        <h3 className="font-montserrat text-xl font-regular text-black">
          {data.total} Results
        </h3>
        <div className="w-full flex flex-col justify-center items-center">
          <MapChart
            textColor="white"
            maxHeight={"500px"}
            maxWidth={"900px"}
            parks={data.data}
          />

          <ParkList parks={data.data} />
        </div>
      </div>
    </main>
  );
}

export default State;
