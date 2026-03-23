import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";

function SearchAndFilter() {
  return (
    <div className="flex flex-col gap-10">
      <SearchBar />

      <FilterDropdown />
    </div>
  )
}

export default SearchAndFilter;