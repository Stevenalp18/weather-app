import { useSelector } from "react-redux";

const HourlyForecast = () => {
  const weather = useSelector((state) => state.weather.data);

  const renderHourlyWeather = () => {
    if (weather !== null) {
      const hours = [8, 11, 14, 17, 20];
      const filteredWeatherArr = weather[0].forecast.forecastday[0].hour.filter(
        (item, idx) => {
          for (let i = 0; i < hours.length; i++) {
            if (hours[i] === idx) {
              return [].push(item);
            }
          }
        }
      );
      return filteredWeatherArr.map((item) => {
        const {
          condition: { icon },
          temp_f,
        } = item;
        return (
          <>
            <div className="border-b-[0.5px] lg:border-r-[0.5px] border-gray-700 lg:border-0 text-center py-6 w-11/12 m-auto flex flex-row lg:flex-col gap-4">
              <div className="my-auto w-1/3 lg:w-full text-lg">9:00 am</div>
              <div className=" w-1/3 lg:w-full">
                <img className="m-auto" src={icon} alt="Weather Icon" />
              </div>
              <div className=" my-auto w-1/3 lg:w-full text-3xl">
                {Math.floor(temp_f)}º
              </div>
            </div>
          </>
        );
      });
    } else {
      return "Weather data not found";
    }
  };

  return (
    <>
      <div className="bg-gray-800 rounded-xl">
        <div className="text-2xl text-center pt-4 font-semibold">
          Today's Weather
        </div>
        <div className="flex flex-col lg:flex-row p-4 w-full">
          {weather !== null ? renderHourlyWeather() : <></>}
        </div>
      </div>
    </>
  );
};

export default HourlyForecast;
