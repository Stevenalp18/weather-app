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
    fecthApi(location);
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
        uv,
        precip_in,
        condition: { icon },
      } = data.current;
      let date = new Date(localtime);

      return (
        //     {date.toLocaleDateString("en-US")}
        <div className="flex flex-col gap-6 text-center">
          <div className="flex flex-col justify-center lg:my-auto py-8 rounded-xl bg-gray-800">
            <div className="text-2xl font-semibold mb-10">
              {name}, {region}, <br />
              {country}
            </div>
            <div className="flex flex-col justify-center w-11/12 m-auto">
              <div className="m-auto w-48">
                <img src={icon} className="my-auto -ml-2 w-full" />
              </div>
              <div className="text-7xl my-auto">{Math.ceil(temp_f)}º</div>
            </div>
          </div>
          <div className="rounded-xl bg-gray-800 px-4 py-8 ">
            <div className="text-2xl font-semibold mb-10">
              Weather Conditions
            </div>
            <div className="flex flex-wrap gap-8 m-auto justify-evenly pb-4">
              <div className="w-1/3 flex gap-4 justify-start">
                <i class="fa-solid fa-temperature-three-quarters fa-xl my-auto" />
                <div className="my-auto text-xl text-left">
                  Feels like:{" "}
                  <span className="text-2xl font-semibold">
                    {Math.ceil(feelslike_f)}º
                  </span>
                </div>
              </div>
              <div className="w-1/3 flex gap-4 justify-start">
                <i class="fa-solid fa-wind fa-xl my-auto"></i>
                <div className="my-auto text-xl text-left">
                  Wind:{" "}
                  <span className="text-2xl font-semibold">{wind_mph} mph</span>
                </div>
              </div>
              <div className="w-1/3 flex gap-4 justify-start">
                <i class="fa-solid fa-droplet fa-xl my-auto"></i>
                <div className="my-auto text-xl text-left">
                  Precip. Inches:{" "}
                  <span className="text-2xl font-semibold">{precip_in} in</span>
                </div>
              </div>
              <div className="w-1/3 flex gap-4 justify-start">
                <i class="fa-solid fa-sun fa-xl my-auto" />
                <div className="my-auto text-xl text-left">
                  UV Index: <span className="text-2xl font-semibold">{uv}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="text-lg mb-4 w-full">
      <div className="bg-gray-800 p-4 rounded-xl">
        {!data
          ? "Hi, initiate me by searching something in the search bar, preferrably zip code"
          : cardOutput()}
      </div>
    </div>
  );
};
export default CurrentWeatherCard;

{
  /* <div className="flex flex-col gap-6 text-center">
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
<div className="rounded-xl bg-gray-800 px-4 py-8 ">
  <div className="text-2xl font-semibold mb-10">
    Weather Conditions
  </div>
  <div className="flex flex-wrap gap-8 m-auto justify-evenly pb-4">
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
</div> */
}
