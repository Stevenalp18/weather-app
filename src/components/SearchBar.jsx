import { useDispatch } from "react-redux";
import { updateLocation } from "../redux/location/locationSlice";
import { useRef } from "react";

const SearchBar = () => {
  const locationInput = useRef();

  const dispatch = useDispatch();

  return (
    <>
      <div className="flex gap-6 w-full lg:w-1/2">
        <div className="w-full">
          <input
            ref={locationInput}
            placeholder="Try Zipcode or City"
            className="p-2 rounded-xl bg-sky-100 w-full "
          />
        </div>
        <div className="w-3/12 md:w-2/12">
          <button
            className="bg-sky-100 p-2 rounded-xl"
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
