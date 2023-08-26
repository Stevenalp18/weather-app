import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <>
      <div className="border-2 border-slate-400 lg:w-2/3 rounded-xl p-4 mt-6 mx-4 lg:mx-auto flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between text-center">
        <div className="my-auto text-2xl text-center lg:text-left">
          Weather App
        </div>
        <SearchBar />
      </div>
    </>
  );
};

export default Header;
