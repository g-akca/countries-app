import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";

function SearchAndFilter({ search, setSearch }) {
  return (
    <div className="flex flex-col gap-10 tablet:flex-row tablet:gap-2 tablet:justify-between">
      <SearchBar search={search} setSearch={setSearch} />

      <FilterDropdown/>
    </div>
  )
}

export default SearchAndFilter;