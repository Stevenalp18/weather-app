const SearchBar = () => {
  return (
    <>
      <div>
        <label for="search">
          <i className="fa-solid fa-magnifying-glass text-slate-400 mr-2" />
          <input
            id="search"
            placeholder="Virginia, Usa"
            className="p-2 rounded"
          />
        </label>
      </div>
    </>
  );
};
export default SearchBar;
