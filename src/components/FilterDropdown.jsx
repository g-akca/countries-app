import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function FilterDropdown() {
  const [open, setOpen] = useState(false);
  const [region, setRegion] = useState("");

  const options = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <div className="relative px-6 h-12 w-50 bg-white shadow-[0_2px_9px_rgba(0,0,0,0.06)] flex items-center rounded-[5px] text-[12px] leading-[135%]">
      <button type="button" onClick={() => setOpen(prev => !prev)} className="cursor-pointer grow flex justify-between items-center">
        <p>{region ? region : "Filter by Region"}</p>

        <FontAwesomeIcon icon={faChevronDown} className="text-[8px]" />
      </button>

      {open && (
        <ul className="absolute left-0 top-full mt-2 px-6 py-4 bg-white rounded-[5px] w-50 shadow-[0_2px_9px_rgba(0,0,0,0.06)] flex flex-col gap-2">
          {options.map(item => (
            <li key={item}>
              <button onClick={() => setRegion(item)} className="w-full text-start">{item}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default FilterDropdown;