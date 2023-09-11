import { useEffect, useState } from "react";

const AlertModalWIP = () => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setModal(true);
    }, 2000);
  }, []);

  const displayModal = () => {
    return (
      <div className="fixed m-auto text-center w-3/4 md:w-1/2 lg:w-1/4 top-10 left-0 right-0 z-50">
        <div className="m-auto bg-gray-500 rounded-xl">
          <div className="px-3 py-1">
            <div className="text-2xl font-semibold hover:text-red-500 hover:cursor-pointer w-full flex justify-end">
              <button
                className="w-full text-right"
                onClick={() => {
                  setModal(false);
                }}
              >
                x
              </button>
            </div>
          </div>
          <div className="bg-gray-200 text-gray-600 p-4">
            Hi there! I am Steven, the developer, for this project just search
            something up in the search bar or press 'Enter' 😀
            <br />
            <br />
            It will render the current data, forecast data for the next 3 days
            and will render data for weather throughout the day!
            <br />
            <br />
            Disclaimer:
            <br />
            If the data seems a slight bit off, the api renders about every 30
            minutes!
            <br />
            <br />
            Enjoy :)
          </div>
          <div className="p-2 font-semibold hover:text-red-500 hover:cursor-pointer">
            <button
              className="w-full"
              onClick={() => {
                setModal(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return <>{modal ? displayModal() : <></>}</>;
};

export default AlertModalWIP;
