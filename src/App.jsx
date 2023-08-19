import { baseUrl } from "./data/data";
import { apiKey } from "./data/key";
import { useEffect, useState, useRef } from "react";
// import PredictiveOptions from "./components/PredictiveOptions";

function App() {
  const [data, setData] = useState();
  const [location, setLocation] = useState("");
  const locationRef = useRef();

  // useEffect(() => {
  //   async function fetchWeather() {
  //     const response = await fetch(
  //       baseUrl + "/search.json?key=" + apiKey + "&q=" + location
  //     );
  //     console.log(response);
  //   }
  //   fetchWeather();
  // }, [location]);

  return (
    <>
      <div className="w-full">
        <div className="m-auto text-center bg-slate-100 w-[80vw] my-10 p-10 border-2 rounded-xl">
          <div className="mb-10 w-full flex justify-between">
            <div className="text-xl flex gap-4">
              <input
                ref={locationRef}
                placeholder="City or zip code"
                className="p-2 rounded-xl w-96"
              />
              <button
                onClick={() => {
                  setLocation(locationRef.current.value);
                }}
                className="bg-slate-200 p-2 rounded-lg text-slate-500"
              >
                Search
              </button>
            </div>
            <div className="text-4xl">Weather App</div>
            {/* {!data ? <div></div> : <PredictiveOptions data={data} />} */}

            {/* <div className="border-2 bg-neutral-200 rounded p-2 text-lg">
              Alex, Va
            </div>
            <div className="border-2 bg-neutral-200 rounded p-2 text-lg">
              Manasass, va
            </div> */}
          </div>
          <div>
            <div className="border-2 p-20 m-auto rounded-xl mb-10 flex justify-between">
              <div className="text-6xl">70 Deg</div>
              <div className="flex flex-col gap-2">
                <div>Feels Like</div>
                <div>isDayTime?</div>
                <div>Wind</div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 flex-col lg:flex-row lg:justify-around">
            <div className="border-2 w-1/3 p-20 m-auto rounded-xl">Next</div>
            <div className="border-2 w-1/3 p-20 m-auto rounded-xl">Day 2</div>
            <div className="border-2 w-1/3 p-20 m-auto rounded-xl">Day 3</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
