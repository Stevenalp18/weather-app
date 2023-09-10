import { useEffect, useRef } from "react";
import { baseUrl } from "../data/data";
import { updateLocation } from "../redux/location/locationSlice";
import { updateWeather } from "../redux/weather/weatherSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location.value);
  const locationInput = useRef();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          baseUrl + location + "&days=3&aqi=no&alerts=no"
        );
        const processedResponse = await response.json();
        dispatch(updateWeather(processedResponse));
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, [location]);

  return (
    <>
      <div className="flex gap-6 w-full lg:w-1/2">
        <div className="w-full">
          <input
            ref={locationInput}
            placeholder="Try Zipcode or City"
            className="py-3 px-4 rounded-xl bg-gray-800 w-full text-xl"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                dispatch(updateLocation(locationInput.current.value));
              }
            }}
          />
        </div>
        <div className="w-3/12 md:w-2/12">
          <button
            className="bg-gray-800 py-3 px-4 rounded-xl font-semibold text-lg"
            onClick={() => {
              dispatch(updateLocation(locationInput.current.value));
            }}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};
export default SearchBar;
