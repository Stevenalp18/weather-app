import { useSelector } from "react-redux";

const ThreeDayForecast = () => {
  const weather = useSelector((state) => state.weather.data);
  const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const renderForecast = () => {
    if (weather !== null) {
      return weather[0].forecast.forecastday.map((item, idx) => {
        const date = new Date(item.date);

        return (
          <div
            className="border-b-[0.5px] border-gray-700 text-center flex justify-between lg:py-8 py-4 w-11/12 m-auto"
            key={idx}
          >
            <div className="my-auto w-1/3 text-lg">
              {daysOfTheWeek[date.getDay()]}
            </div>
            <div className="my-auto text-3xl w-1/3 flex justify-center">
              <img src={item.day.condition.icon} alt="Weather Icon" />
            </div>
            <div className="my-auto text-3xl w-1/3">
              {Math.floor(item.day.avgtemp_f)}º
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className="w-full bg-gray-800 mb-4 py-8 rounded-xl">
      <div className="text-center text-2xl">Weather Forecast</div>
      <div className=" rounded-xl px-4 flex flex-col justify-center h-full">
        {weather === null ? (
          <div className="text-center text-2xl">Loading...</div>
        ) : (
          renderForecast()
        )}
      </div>
    </div>
  );
};

export default ThreeDayForecast;
