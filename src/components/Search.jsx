const Search = ({ search, onSearch }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={onSearch} value={search} />
  </div>
);

export default Search;
