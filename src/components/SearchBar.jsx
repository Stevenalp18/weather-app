const SearchBar = () => {
  return (
    <>
      <div className="w-full">
        <label for="search">
          <input
            id="search"
            placeholder="Try Zipcode or City"
            className="p-2 rounded-xl w-full bg-sky-100"
          />
        </label>
      </div>
    </>
  );
};
export default SearchBar;
