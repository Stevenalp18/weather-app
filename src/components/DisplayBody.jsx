// import ReduxSample from "./ReduxSample";
import { useSelector } from "react-redux";
import CurrentWeatherCard from "./CurrentWeatherCard";

const DisplayBody = () => {
  const location = useSelector((state) => state.location.value);
  return (
    <div className="border-2 border-slate-400 my-auto lg:w-2/3 rounded-xl px-4 py-10 mt-4 mx-4 lg:mx-auto">
      {/* <ReduxSample /> */}

      <div className="m-auto text-center bg-slate-200 mb-4 text-2xl font-bold rounded-xl py-2">
        <div className="text-xl font-normal">Location:</div>
        {location}
      </div>
      <CurrentWeatherCard />
      <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center">
        <div className="lg:w-1/4 rounded w-full text-center">
          <div>03.22.2023</div>
          <div className="bg-sky-100 rounded-xl p-4">
            <div className="text-5xl">56º</div>
            <div className="my-2">Sunny</div>
            <div className="flex flex-col gap-4 mt-4">
              <div>54º/60º</div>
              <div>feels like 64º</div>
              <div>wind: 12mph</div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 rounded w-full text-center">
          <div>03.23.2023</div>
          <div className="bg-sky-100 rounded-xl p-4">
            <div className=" text-5xl ">57º</div>
            <div className="my-2">Sunny</div>
            <div className=" flex flex-col gap-4 mt-4">
              <div>54º/60º</div>
              <div>feels like 64º</div>
              <div>wind: 12mph</div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 rounded w-full text-center">
          <div>03.24.2023</div>
          <div className="bg-sky-100 rounded-xl p-4">
            <div className=" text-5xl ">58º</div>
            <div className="my-2">Sunny</div>
            <div className=" flex flex-col gap-4 mt-4">
              <div>54º/60º</div>
              <div>feels like 64º</div>
              <div>wind: 12mph</div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 rounded w-full text-center">
          <div>03.25.2023</div>
          <div className="bg-sky-100 rounded-xl p-4">
            <div className=" text-5xl ">59º</div>
            <div className="my-2">Sunny</div>
            <div className=" flex flex-col gap-4 mt-4">
              <div>54º/60º</div>
              <div>feels like 64º</div>
              <div>wind: 12mph</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayBody;
