// import ReduxSample from "./ReduxSample";
import { useSelector } from "react-redux";
import CurrentWeatherComponent from "./CurrentWeatherComponent";
import HourlyForecast from "./HourlyForecast";
import { useRef } from "react";

const DisplayBody = () => {
  const location = useSelector((state) => state.location.value);
  return (
    <div className="my-auto lg:w-2/3 rounded-xl px-4 py-4 mx-4 lg:mx-auto">
      {/* <ReduxSample /> */}

      {/* <div className="m-auto text-center mb-4 -mt-8 text-2xl font-bold rounded-xl py-2">
        <div className="text-xl font-normal">Location Inputted:</div>
        {location}
      </div> */}
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 lg:justify-around mb-2">
        <CurrentWeatherComponent />
        <div className="w-full bg-gray-800 mb-4 py-8 rounded-xl">
          <div className="text-center text-2xl">Weather Forecast</div>
          <div className=" rounded-xl px-4 flex flex-col justify-center">
            <div className="border-b-[0.5px] border-gray-700 text-center flex justify-between lg:py-12 py-4 w-11/12 m-auto">
              <div className="my-auto w-1/3">Day 1</div>
              <div className="my-auto text-3xl w-1/3">Sunny</div>
              <div className="my-auto text-3xl w-1/3">56º</div>
            </div>
            <div className="border-b-[0.5px] border-gray-700 text-center flex justify-between lg:py-12 py-4 w-11/12 m-auto">
              <div className="my-auto w-1/3">Day 2</div>
              <div className="text-3xl w-1/3 ">Sunny</div>
              <div className="text-3xl my-auto w-1/3">56º</div>
            </div>
            <div className="border-b-[0.5px] border-gray-700 text-center flex justify-between lg:py-12 py-4 w-11/12 m-auto">
              <div className="my-auto w-1/3">Day 3</div>
              <div className="text-3xl w-1/3 ">Sunny</div>
              <div className="text-3xl my-auto w-1/3">56º</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <HourlyForecast />
      </div>
    </div>
  );
};

export default DisplayBody;
