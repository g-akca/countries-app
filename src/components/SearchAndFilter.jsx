import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";

function SearchAndFilter() {
  return (
    <div className="flex flex-col gap-10 tablet:flex-row tablet:gap-2 tablet:justify-between">
      <SearchBar />

      <FilterDropdown />
    </div>
  )
}

export default SearchAndFilter;