import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <>
      <div className="bg-red-200 lg:w-2/3 rounded-xl p-4 mt-6 mx-4 lg:mx-auto flex justify-between">
        <div className="my-auto text-xl">Weather App</div>
        <SearchBar />
      </div>
    </>
  );
};

export default Header;
