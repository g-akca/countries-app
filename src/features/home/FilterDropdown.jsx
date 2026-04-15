import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function FilterDropdown({ regions, setRegions }) {
  const [open, setOpen] = useState(false);

  const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const toggleRegion = (region) => {
    setRegions(prev => {
      if (prev.includes(region)) {
        return prev.filter(r => r !== region);
      }
      else {
        return [...prev, region];
      }
    });
  };

  return (
    <div className="relative text-[12px] leading-[135%] tablet:text-base tablet:leading-base">
      <button type="button" onClick={() => setOpen(prev => !prev)} className="px-6 h-12 tablet:h-14 w-50 bg-white dark:bg-blue-900 shadow-[0_2px_9px_rgba(0,0,0,0.06)] flex justify-between items-center gap-2 rounded-[5px] cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:bg-gray-100 dark:hover:bg-white/10 active:scale-[0.97]">
        <p className="leading-[100%]">
          {regions.length ? regions.join(", ") : "Filter by Region"}
        </p>

        <FontAwesomeIcon icon={faChevronDown} className="text-[8px] tablet:text-[10px]" />
      </button>

      {open && (
        <ul className="absolute left-0 top-full mt-2 py-4 px-2 bg-white dark:bg-blue-900 rounded-[5px] w-50 shadow-[0_2px_9px_rgba(0,0,0,0.06)] flex flex-col gap-1">
          {options.map(item => {
            const isSelected = regions.includes(item);

            return (
              <li key={item}>
                <button
                  onClick={() => toggleRegion(item)}
                  className={`w-full px-4 py-1 rounded-full text-start cursor-pointer transition-all active:scale-[0.97]
                    ${isSelected 
                      ? "bg-blue-500 text-white" 
                      : "hover:bg-gray-100 dark:hover:bg-white/10"
                    }`}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default FilterDropdown;