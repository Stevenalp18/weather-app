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
          <div className="flex justify-end px-3 py-1">
            <div className="text-2xl font-semibold hover:text-red-500 hover:cursor-pointer">
              <button
                onClick={() => {
                  setModal(false);
                }}
              >
                x
              </button>
            </div>
          </div>
          <div className="bg-gray-200 text-gray-600 p-4">
            Hi there! I am Steven, I am currently working on this project and it
            is going under some development, I can assure you that it will be
            done soon. Just wanted to leave this Modal in case you are wondering
            about some of the features. The current weather is the only option
            that works at the moment, Search something and it will return the
            current weather for the location of choice.
            <br />
            <br />
            Stay tuned though! It will be great when I am done! If you are a
            potential employer, then I am consistently working on this and
            figured I would put it out there because it displays{" "}
            <span className="text-xl">MVP</span>! (Minimum Viable Product) and I
            am a believer in MVP! Get the project out there as soon as you can!
            It displays growth and persistence.
          </div>
          <div className="p-2 font-semibold hover:text-red-500 hover:cursor-pointer">
            <button
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
