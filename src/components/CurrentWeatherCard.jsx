import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { apiKey } from "../data/key";
import { currentApiExt, baseUrl, queryApiExt } from "../data/data";

const CurrentWeatherCard = () => {
  const location = useSelector((state) => state.location.value);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fecthApi = async (location) => {
      try {
        const response = await fetch(
          `${baseUrl}${currentApiExt}${apiKey}${queryApiExt}${location}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setLoading(false);
        setData(data);
      } catch (error) {
        setLoading(false);
      }
    };
    // fecthApi(location);
  }, [location]);

  if (loading) {
    return <div>Loading...</div>;
  }

  function cardOutput() {
    if (data !== null && data) {
      const { name, region, country, localtime } = data.location;
      const {
        temp_f,
        feelslike_f,
        wind_mph,
        condition: { text, icon },
      } = data.current;
      let date = new Date(localtime);

      return (
        <div className="text-center border-2 m-auto text-center">
          <div className="text-center text-md mb-2 -mt-1">
            {date.toLocaleDateString("en-US")}
          </div>
          <div className="text-lg md:text-xl lg:text-2xl mb-4">
            {name}, {region}, <br />
            {country}
          </div>
          <div className="flex flex-col">
            <div className="text-center m-auto flex flex-col gap-4">
              <div className="text-5xl">{Math.ceil(temp_f)}º</div>
              <div>{text}</div>
              <div className="text-center -my-2 mb-2">
                <img className="text-center m-auto" src={icon} />
              </div>
            </div>
            <div className="my-auto flex flex-col gap-4">
              <div>Feels like: {Math.ceil(feelslike_f)}º</div>
              <div>Wind: {wind_mph} mph</div>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="text-lg mb-4 w-full">
      <div>
        {/* {!data
          ? "Hi, initiate me by searching something in the search bar, preferrably zip code"
          : cardOutput()} */}

        <div className="flex flex-col gap-6 text-center">
          <div className="flex flex-col justify-center lg:my-auto py-8 rounded-xl bg-gray-800">
            <div className="text-2xl font-semibold mb-10">
              Melbourne, Queensland,
              <br />
              Australia
            </div>
            <div className="flex justify-evenly w-11/12 m-auto">
              <div className="text-5xl my-auto">48º</div>
              <div className="text-4xl my-auto">Sun</div>
            </div>
          </div>
          <div className="rounded-xl bg-gray-800 px-4 py-8">
            <div className="text-2xl font-semibold mb-10">
              Weather Conditions
            </div>
            <div className="flex flex-wrap gap-8 justify-evenly pb-4">
              <div className="w-1/3 flex gap-4 justify-start">
                <i class="fa-solid fa-temperature-three-quarters fa-xl my-auto" />
                <div className="my-auto text-xl text-left">
                  Feels like: <span className="text-2xl font-semibold">48</span>
                </div>
              </div>
              <div className="w-1/3 flex gap-4 justify-start">
                <i class="fa-solid fa-wind fa-xl my-auto"></i>
                <div className="my-auto text-xl text-left">
                  Wind: <span className="text-2xl font-semibold">12mph</span>
                </div>
              </div>
              <div className="w-1/3 flex gap-4 justify-start">
                <i class="fa-solid fa-droplet fa-xl my-auto"></i>
                <div className="my-auto text-xl text-left">
                  Chance of Rain:{" "}
                  <span className="text-2xl font-semibold">20%</span>
                </div>
              </div>
              <div className="w-1/3 flex gap-4 justify-start">
                <i class="fa-solid fa-sun fa-xl my-auto" />
                <div className="my-auto text-xl text-left">
                  UV Index: <span className="text-2xl font-semibold">20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeatherCard;

{
  //   <div className="text-center bg-sky-100">
  //   <div className="text-2xl mb-4">Melbourne, Queensland, Australia</div>
  //   <div className="flex flex-col lg:flex-row justify-around">
  //     <div className="flex flex-col lg:flex-row lg:gap-4 justify-center lg:my-auto mb-4">
  //       <div className="text-5xl">48º</div>
  //       <div>Sun</div>
  //     </div>
  //     <div className="my-auto flex flex-col gap-4">
  //       <div>54º/60º</div>
  //       <div>Feels like: 64</div>
  //       <div>Wind: 12mph</div>
  //     </div>
  //   </div>
  // </div>
}
