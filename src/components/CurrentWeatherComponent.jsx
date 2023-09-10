import { useSelector } from "react-redux";

const CurrentWeatherComponent = () => {
  const location = useSelector((state) => state.location.value);
  const weather = useSelector((state) => state.weather.data);

  console.log(weather);

  function currentWeatherData() {
    if (weather !== null) {
      const { name, region, country } = weather[0].location;
      const {
        temp_f,
        feelslike_f,
        wind_mph,
        uv,
        precip_in,
        condition: { icon },
      } = weather[0].current;
      // let date = new Date(localtime);
      // {date.toLocaleDateString("en-US")}

      return (
        <div className="flex flex-col gap-4 text-center">
          <div className="flex flex-col justify-center lg:my-auto py-8 rounded-xl bg-gray-800">
            <div className="text-2xl font-semibold m6-10">
              {name}, {region}, <br />
              {country}
            </div>
            <div className="flex flex-col lg:flex-row justify-center w-11/12 m-auto">
              <div className="m-auto lg:w-1/2 w-32 lg:w-28">
                <img src={icon} className="my-auto w-full" />
              </div>
              <div className="text-4xl lg:text-5xl my-auto lg:w-1/2 z-10">
                {Math.ceil(temp_f)}º
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-gray-800 px-4 py-8 -mt-14">
            <div className="text-2xl font-semibold mb-10">
              Weather Conditions
            </div>
            <div className="flex flex-wrap gap-8 m-auto justify-evenly pb-4">
              <div className="w-1/3 flex gap-4 justify-start">
                <i className="fa-solid fa-temperature-three-quarters fa-xl my-auto" />
                <div className="my-auto text-xl text-left">
                  Feels like:{" "}
                  <span className="text-2xl font-semibold">
                    {Math.floor(feelslike_f)}º
                  </span>
                </div>
              </div>
              <div className="w-1/3 flex gap-4 justify-start">
                <i className="fa-solid fa-wind fa-xl my-auto"></i>
                <div className="my-auto text-xl text-left">
                  Wind:{" "}
                  <span className="text-2xl font-semibold">{wind_mph} mph</span>
                </div>
              </div>
              <div className="w-1/3 flex gap-4 justify-start">
                <i className="fa-solid fa-droplet fa-xl my-auto"></i>
                <div className="my-auto text-xl text-left">
                  Precip. Inches:{" "}
                  <span className="text-2xl font-semibold">{precip_in} in</span>
                </div>
              </div>
              <div className="w-1/3 flex gap-4 justify-start">
                <i className="fa-solid fa-sun fa-xl my-auto" />
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
      <div className="rounded-xl">
        {!weather ? (
          <div className="flex flex-col gap-6 text-center bg-gray-800 rounded-xl w-full py-52 px-8">
            Hi, initiate me by searching something in the search bar,
            preferrably zip code
          </div>
        ) : (
          currentWeatherData()
        )}
        {/* <div className="flex flex-col gap-6 text-center">
          <div className="flex flex-col justify-center lg:my-auto py-6 rounded-xl bg-gray-800">
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
          <div className="rounded-xl bg-gray-800 px-4 py-6 ">
            <div className="text-2xl font-semibold mb-10">
              Weather Conditions
            </div>
            <div className="flex flex-wrap gap-4 m-auto justify-evenly pb-4">
              <div className="w-1/3 flex gap-4 justify-start">
                <i className="fa-solid fa-temperature-three-quarters fa-xl my-auto" />
                <div className="my-auto text-xl text-left">
                  Feels like: <span className="text-2xl font-semibold">48</span>
                </div>
              </div>
              <div className="w-1/3 flex gap-4 justify-start">
                <i className="fa-solid fa-wind fa-xl my-auto"></i>
                <div className="my-auto text-xl text-left">
                  Wind: <span className="text-2xl font-semibold">12mph</span>
                </div>
              </div>
              <div className="w-1/3 flex gap-4 justify-start">
                <i className="fa-solid fa-droplet fa-xl my-auto"></i>
                <div className="my-auto text-xl text-left">
                  Chance of Rain:{" "}
                  <span className="text-2xl font-semibold">20%</span>
                </div>
              </div>
              <div className="w-1/3 flex gap-4 justify-start">
                <i className="fa-solid fa-sun fa-xl my-auto" />
                <div className="my-auto text-xl text-left">
                  UV Index: <span className="text-2xl font-semibold">20</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default CurrentWeatherComponent;
