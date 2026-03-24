import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";

function SearchAndFilter({ search, setSearch, region, setRegion }) {
  return (
    <div className="flex flex-col gap-10 tablet:flex-row tablet:gap-2 tablet:justify-between">
      <SearchBar search={search} setSearch={setSearch} />

      <FilterDropdown region={region} setRegion={setRegion} />
    </div>
  )
}

export default SearchAndFilter;