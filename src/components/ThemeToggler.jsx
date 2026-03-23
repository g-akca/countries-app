import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

function ThemeToggler() {
  return (
    <button type="button" className="flex items-center gap-1.5 cursor-pointer">
      <FontAwesomeIcon icon={faMoon} className="text-[16px] desktop:text-[20px]" />
      <p className="text-[12px] font-semibold leading-[135%] desktop:text-[16px] desktop:leading-[200%]">Dark Mode</p>
    </button>
  )
}

export default ThemeToggler;