import { apiKey } from "../data/key";
import { baseUrl } from "../data/data";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const HourlyForecast = () => {
  const location = useSelector((state) => state.location.value);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    // fetch(baseUrl + forecastApiExt + apiKey + queryApiExt + location)
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    const fetchApi = async (location) => {
      try {
        const response = await fetch(baseUrl + location + "&days=5");
        const data = await response.json();
        console.log(data);
        setForecastData(data);
      } catch (err) {
        console.log(err);
      }
    };

    // fetchApi(location);
  }, [location]);

  // function hourlyOutput() {
  //   if (forecastData !== null && forecastData) {
  //     return forecastData.forecast.forecastday.map((item, idx) => (
  //       <div
  //         key={idx}
  //         className="border-b-[0.5px] border-gray-700 text-center flex justify-between lg:py-12 py-4 w-11/12 m-auto"
  //       >
  //         <div className="my-auto w-1/3">{day}</div>
  //         <div className="my-auto text-3xl w-1/3">
  //           <img src={item.day.condition.icon} className="mx-auto" />
  //         </div>
  //         <div className="my-auto text-3xl w-1/3">{item.day.avgtemp_f}º</div>
  //       </div>
  //     ));
  //   }
  // }
  // hourlyOutput();

  //   useEffect(() => {
  //     console.log(forecastData);
  //   }, [location]);

  return (
    <>
      {forecastData ? hourlyOutput() : <div>Nothing to see here...</div>}
      <div className="bg-gray-800 rounded-xl">
        <div className="text-2xl text-center pt-4 font-semibold">
          Today's Weather
        </div>
        <div className="flex flex-col lg:flex-row p-4 w-full">
          <div className="border-b-[0.5px] lg:border-r-[0.5px] border-gray-700 lg:border-0 text-center py-6 w-11/12 m-auto flex flex-row lg:flex-col gap-4">
            <div className="my-auto w-1/3 lg:w-full">6:00 am</div>
            <div className=" w-1/3 lg:w-full">Sun</div>
            <div className=" my-auto w-1/3 lg:w-full">56º</div>
          </div>
          <div className="border-b-[0.5px] lg:border-r-[0.5px] border-gray-700 lg:border-0 text-center py-6 w-11/12 m-auto flex flex-row lg:flex-col gap-4">
            <div className="my-auto w-1/3 lg:w-full">9:00 am</div>
            <div className=" w-1/3 lg:w-full">Sun</div>
            <div className=" my-auto w-1/3 lg:w-full">56º</div>
          </div>
          <div className="border-b-[0.5px] lg:border-r-[0.5px] border-gray-700 lg:border-0 text-center py-6 w-11/12 m-auto flex flex-row lg:flex-col gap-4">
            <div className="my-auto w-1/3 lg:w-full">12:00 pm</div>
            <div className=" w-1/3 lg:w-full">Sun</div>
            <div className=" my-auto w-1/3 lg:w-full">56º</div>
          </div>
          <div className="border-b-[0.5px] lg:border-r-[0.5px] border-gray-700 lg:border-0 text-center py-6 w-11/12 m-auto flex flex-row lg:flex-col gap-4">
            <div className="my-auto w-1/3 lg:w-full">3:00 pm</div>
            <div className=" w-1/3 lg:w-full">Sun</div>
            <div className=" my-auto w-1/3 lg:w-full">56º</div>
          </div>
          <div className="border-b-[0.5px] lg:border-r-[0.5px] border-gray-700 lg:border-0 text-center py-6 w-11/12 m-auto flex flex-row lg:flex-col gap-4">
            <div className="my-auto w-1/3 lg:w-full">6:00 pm</div>
            <div className=" w-1/3 lg:w-full">Sun</div>
            <div className=" my-auto w-1/3 lg:w-full">56º</div>
          </div>
          <div className="border-b-[0.5px] lg:border-r-[0.5px] border-gray-700 lg:border-0 text-center py-6 w-11/12 m-auto flex flex-row lg:flex-col gap-4">
            <div className="my-auto w-1/3 lg:w-full">9:00 pm</div>
            <div className=" w-1/3 lg:w-full">Sun</div>
            <div className=" my-auto w-1/3 lg:w-full">56º</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HourlyForecast;
