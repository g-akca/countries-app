import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";

function SearchAndFilter({ search, setSearch, regions, setRegions }) {
  return (
    <div className="flex flex-col gap-10 tablet:flex-row tablet:gap-2 tablet:justify-between">
      <SearchBar search={search} setSearch={setSearch} />

      <FilterDropdown regions={regions} setRegions={setRegions} />
    </div>
  )
}

export default SearchAndFilter;