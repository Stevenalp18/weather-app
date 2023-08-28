import { useEffect, useState } from "react";
import { currentDayData } from "../data/weather-data/currentDayData";
import { useSelector } from "react-redux";

const CurrentWeatherCard = () => {
  const location = useSelector((state) => state.location.value);
  //  USE a useEffect() hook here and keep api call separately here,
  // was having error because we attempted to use double useeffects and were redoing what we did.
  //  We have to make the call here and do the rest of the work here

  // fetchData();
  return (
    <>
      {}
      <div className="bg-sky-100 py-6 mb-10 rounded-xl flex flex-col lg:flex-row flex-wrap lg:flex-nowrap lg:justify-between text-center px-4">
        <div className="my-auto flex flex-col lg:flex-row lg:gap-8">
          <div className="my-auto text-6xl">48º</div>
          <div className="mx-auto my-2">SUN</div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 my-auto lg:gap-10 w-full lg:w-auto">
          <div>54º/60º</div>
          <div>feels like 64º</div>
          <div>wind: 12mph</div>
        </div>
      </div>
    </>
  );
};
export default CurrentWeatherCard;
