import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function FilterDropdown({ region, setRegion }) {
  const [open, setOpen] = useState(false);

  const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div className="relative text-[12px] leading-[135%] tablet:text-base tablet:leading-base">
      <button type="button" onClick={() => setOpen(prev => !prev)} className="px-6 h-12 tablet:h-14 w-50 bg-white dark:bg-blue-900 shadow-[0_2px_9px_rgba(0,0,0,0.06)] flex justify-between items-center rounded-[5px] cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:bg-gray-100 dark:hover:bg-white/10 active:scale-[0.97]">
        <p className="leading-[100%]">{region ? region : "Filter by Region"}</p>

        <FontAwesomeIcon icon={faChevronDown} className="text-[8px] tablet:text-[10px]" />
      </button>

      {open && (
        <ul className="absolute left-0 top-full mt-2 py-4 px-2 bg-white dark:bg-blue-900 rounded-[5px] w-50 shadow-[0_2px_9px_rgba(0,0,0,0.06)] flex flex-col gap-1 transition-all duration-300 hover:scale-[1.03]">
          {options.map(item => (
            <li key={item}>
              <button onClick={() => setRegion(item)} className="w-full px-4 py-1 rounded-full text-start cursor-pointer hover:bg-gray-100 dark:hover:bg-white/10 transition-all active:scale-[0.97]">{item}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default FilterDropdown;