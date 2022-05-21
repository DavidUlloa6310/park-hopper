import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { useQuery } from "react-query";

import { Carousel } from "react-responsive-carousel";

function Park(props) {
  const router = useRouter();
  const { parkID } = router.query;

  const { isLoading, error, data, refetch } = useQuery(
    `${parkID}-data`,
    fetchStateParks,
    {
      refetchOnReconnect: true,
    }
  );

  async function fetchStateParks() {
    const response = await fetch(
      `https://developer.nps.gov/api/v1/parks?parkCode=${parkID}&api_key=${process.env.NEXT_PUBLIC_PARK_API_KEY}`,
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

  let park = data?.data[0];

  console.log(park.images[0].url);

  return (
    <main className=" w-full min-h-screen">
      <div
        style={{ backgroundImage: `url(${park.images[0].url})` }}
        className=" bg-cover w-full min-h-[400px] flex flex-col justify-center items-center px-5 relative"
      >
        <div className="z-10 my-5">
          <h1 className=" text-orange-400 text-3xl font-extrabold font-open-sans">
            {park.fullName}
          </h1>
          <h3 className=" text-white text-lg font-montserrat">
            {`${park.addresses[0].postalCode}, ${park.addresses[0].city}, ${park.addresses[0].stateCode}, ${park.addresses[0].line1}, ${park.addresses[0].line2}, ${park.addresses[0].line3}`}
          </h3>
        </div>
        <div className="z-10">
          <p className=" font-montserrat text-white text-sm">
            {park.description}
          </p>
        </div>
        <div className="w-full h-full bg-black bg-opacity-40 absolute bottom-0 left-0" />
      </div>

      <div className=" font-montserrat m-5">
        <Carousel autoPlay infiniteLoop interval={7000}>
          {park.images.map((image) => {
            return (
              <div key={image.title} className="h-48 w-48">
                <Image
                  alt={`${image.altText}`}
                  src={image.url}
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
            );
          })}
        </Carousel>

        <aside>
          <h4>
            <span className="font-bold">Cost:</span> $
            {park.entranceFees[0].cost}
          </h4>
          <ul className=" list-disc list-inside mt-3">
            <h4 className="font-bold">Hours:</h4>
            <li>Sunday: {park.operatingHours[0].standardHours.sunday}</li>
            <li>Monday: {park.operatingHours[0].standardHours.monday}</li>
            <li>Tuesday: {park.operatingHours[0].standardHours.tuesday}</li>
            <li>Wednesday: {park.operatingHours[0].standardHours.wednesday}</li>
            <li>Thursday: {park.operatingHours[0].standardHours.thursday}</li>
            <li>Friday: {park.operatingHours[0].standardHours.friday}</li>
            <li>Sunday: {park.operatingHours[0].standardHours.sunday}</li>
          </ul>
          <h4 className="mt-3">
            <span className="font-bold">Weather Info: </span>
            {park.weatherInfo}
          </h4>
        </aside>
      </div>

      <div className="mx-5 font-montserrat">
        <h4 className="font-bold">Activies</h4>
        <div className="grid grid-cols-2">
          {park.activities.map((activity) => {
            return (
              <div
                key={activity.name}
                className="bg-hill-green m-2 p-1 rounded-xl max-w-[200px] flex justify-center items-center text-white font-montserrat text-center text-xs"
              >
                {activity.name}
              </div>
            );
          })}
        </div>

        <h4 className="font-bold mt-3">Topics</h4>
        <div className="grid grid-cols-2">
          {park.topics.map((topic) => {
            return (
              <div
                key={topic.name}
                className="bg-orange-400 m-2 p-1 rounded-xl max-w-[200px] flex justify-center items-center text-white font-montserrat text-center text-xs"
              >
                {topic.name}
              </div>
            );
          })}
        </div>
        <ul className="list-disc list-inside mt-3">
          <h4 className="font-bold">Contact</h4>
          <li>Phone Number: {park.contacts.phoneNumbers[0].phoneNumber}</li>
          <li>Email Address: {park.contacts.emailAddresses[0].emailAddress}</li>
        </ul>
      </div>
    </main>
  );
}

export default Park;
