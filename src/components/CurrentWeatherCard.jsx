import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const CurrentWeatherCard = () => {
  const location = useSelector((state) => state.location.value);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fecthApi = async (location) => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${location}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setLoading(false);
        setData(data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fecthApi(location);
  }, [location]);
  console.log(data);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div className="bg-slate-200 p-4 rounded-xl text-lg">{}</div>;
};
export default CurrentWeatherCard;

{
  // const location = useSelector((state) => state.location.value);
  /* <div className="bg-sky-100 py-6 mb-10 rounded-xl flex flex-col lg:flex-row flex-wrap lg:flex-nowrap lg:justify-between text-center px-4">
        <div className="my-auto flex flex-col lg:flex-row lg:gap-8">
          <div className="my-auto text-6xl">48º</div>
          <div className="mx-auto my-2">SUN</div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 my-auto lg:gap-10 w-full lg:w-auto">
          <div>54º/60º</div>
          <div>feels like 64º</div>
          <div>wind: 12mph</div>
        </div>
    </div> */
}
