import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
    <div className="bg-white px-8 h-12 flex gap-5 items-center shadow-[0_2px_9px_rgba(0,0,0,0.06)] rounded-[5px]">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[16px] text-grey-300" />

      <input 
        type="text" 
        placeholder="Search for a country..." 
        className="text-[12px] leading-[135%] placeholder:text-grey-250 focus:outline-none" 
      />
    </div>
  )
}

export default SearchBar;