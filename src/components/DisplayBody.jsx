// import ReduxSample from "./ReduxSample";
import { useSelector } from "react-redux";
import CurrentWeatherCard from "./CurrentWeatherCard";

const DisplayBody = () => {
  const location = useSelector((state) => state.location.value);
  return (
    <div className="my-auto lg:w-2/3 rounded-xl px-4 py-10 mx-4 lg:mx-auto">
      {/* <ReduxSample /> */}

      <div className="m-auto text-center mb-4 text-2xl font-bold rounded-xl py-2">
        <div className="text-xl font-normal">Location Inputted:</div>
        {location}
      </div>
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 lg:justify-around">
        <CurrentWeatherCard />
        <div className="flex flex-col gap-4 bg-gray-800 rounded-xl px-4 py-6 w-full">
          <div className="border-b-[1px] rounded text-center flex justify-between my-auto py-4 w-11/12 m-auto">
            <div className="my-auto w-1/3">Tuesday</div>
            <div className="my-2 my-auto text-3xl text-center w-1/3">Sunny</div>
            <div className="text-3xl my-auto w-1/3">56º</div>
          </div>
          <div className="border-b-[1px] rounded text-center flex justify-between my-auto py-4 w-11/12 m-auto">
            <div className="my-auto w-1/3">Wednesday</div>
            <div className="my-2 my-auto text-3xl w-1/3 ">Sunny</div>
            <div className="text-3xl my-auto w-1/3">56º</div>
          </div>
          <div className="border-b-[1px] rounded text-center flex justify-between my-auto py-4 w-11/12 m-auto">
            <div className="my-auto w-1/3">Thursday</div>
            <div className="my-2 my-auto text-3xl w-1/3 ">Sunny</div>
            <div className="text-3xl my-auto w-1/3">56º</div>
          </div>
          <div className="border-b-[1px] rounded text-center flex justify-between my-auto py-4 w-11/12 m-auto">
            <div className="my-auto w-1/3">Friday</div>
            <div className="my-2 my-auto text-3xl w-1/3">Sunny</div>
            <div className="text-3xl my-auto w-1/3">56º</div>
          </div>
          <div className="border-b-[1px] rounded text-center flex justify-between my-auto py-4 w-11/12 m-auto">
            <div className="my-auto w-1/3">Saturday</div>
            <div className="my-2 my-auto text-3xl w-1/3">Sunny</div>
            <div className="text-3xl my-auto w-1/3">56º</div>
          </div>
          <div className="border-b-[1px] rounded text-center flex justify-between my-auto py-4 w-11/12 m-auto">
            <div className="my-auto w-1/3">Sunday</div>
            <div className="my-2 my-auto text-3xl w-1/3">Sunny</div>
            <div className="text-3xl my-auto w-1/3">56º</div>
          </div>
          <div className="border-b-[1px] rounded text-center flex justify-between my-auto py-4 w-11/12 m-auto">
            <div className="my-auto w-1/3">Monday</div>
            <div className="my-2 my-auto text-3xl w-1/3">Sunny</div>
            <div className="text-3xl my-auto w-1/3">56º</div>
          </div>
        </div>
        {/* Currently working on model for forecast */}
        {/* <div className="md:w-[1px] md:h-[128px] h-[1px] w-96 border-[.5px] my-auto border"></div>
        <div className="lg:w-1/4 rounded w-full text-center">
          <div>03.23.2023</div>
          <div className="p-4">
            <div className=" text-5xl ">57º</div>
            <div className="my-2">Sunny</div>
            <div className=" flex flex-col gap-4 mt-4">
              <div>54º/60º</div>
              <div>feels like 64º</div>
              <div>wind: 12mph</div>
            </div>
          </div>
        </div>
        <div className="w-[1px] border-[.5px] h-[128px] my-auto border"></div>
        <div className="lg:w-1/4 rounded w-full text-center">
          <div>03.24.2023</div>
          <div className="p-4">
            <div className=" text-5xl ">58º</div>
            <div className="my-2">Sunny</div>
            <div className=" flex flex-col gap-4 mt-4">
              <div>54º/60º</div>
              <div>feels like 64º</div>
              <div>wind: 12mph</div>
            </div>
          </div>
        </div>
        <div className="w-[1px] border-[.5px] h-[128px] my-auto border"></div>
        <div className="lg:w-1/4 w-full text-center">
          <div>03.25.2023</div>
          <div className="p-4">
            <div className=" text-5xl ">59º</div>
            <div className="my-2">Sunny</div>
            <div className=" flex flex-col gap-4 mt-4">
              <div>54º/60º</div>
              <div>feels like 64º</div>
              <div>wind: 12mph</div>
            </div>
          </div>
  </div> */}
      </div>
    </div>
  );
};

export default DisplayBody;
