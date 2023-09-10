// import ReduxSample from "./ReduxSample";
import CurrentWeatherComponent from "./CurrentWeatherComponent";
import HourlyForecast from "./HourlyForecast";
import ThreeDayForecast from "./ThreeDayForecast";

const DisplayBody = () => {
  return (
    <div className="my-auto lg:w-2/3 rounded-xl px-4 py-4 mx-4 lg:mx-auto">
      {/* <ReduxSample /> */}

      {/* <div className="m-auto text-center mb-4 -mt-8 text-2xl font-bold rounded-xl py-2">
        <div className="text-xl font-normal">Location Inputted:</div>
        {location}
      </div> */}
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 lg:justify-around mb-2">
        <CurrentWeatherComponent />
        <ThreeDayForecast />
      </div>
      <div>
        <HourlyForecast />
      </div>
    </div>
  );
};

export default DisplayBody;
