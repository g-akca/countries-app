import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function FilterDropdown({ region, setRegion }) {
  const [open, setOpen] = useState(false);

  const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div className="relative px-6 h-12 w-50 bg-white dark:bg-blue-900 shadow-[0_2px_9px_rgba(0,0,0,0.06)] flex items-center rounded-[5px] text-[12px] leading-[135%] tablet:h-14 tablet:text-base tablet:leading-base">
      <button type="button" onClick={() => setOpen(prev => !prev)} className="cursor-pointer grow flex justify-between items-center">
        <p className="leading-[100%]">{region ? region : "Filter by Region"}</p>

        <FontAwesomeIcon icon={faChevronDown} className="text-[8px] tablet:text-[10px]" />
      </button>

      {open && (
        <ul className="absolute left-0 top-full mt-2 px-6 py-4 bg-white dark:bg-blue-900 rounded-[5px] w-50 shadow-[0_2px_9px_rgba(0,0,0,0.06)] flex flex-col gap-2">
          {options.map(item => (
            <li key={item}>
              <button onClick={() => setRegion(item)} className="w-full text-start cursor-pointer">{item}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default FilterDropdown;