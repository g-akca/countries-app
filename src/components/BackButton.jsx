import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function BackButton() {
  return (
    <Link to="/" className="w-26 h-8 flex justify-center items-center gap-2 cursor-pointer bg-white dark:bg-blue-900 shadow-[0_0_7px_rgba(0,0,0,0.1)] rounded-xs transition-all duration-300 hover:scale-[1.03] hover:bg-gray-100 dark:hover:bg-white/10 active:scale-[0.97] tablet:w-34 tablet:h-10">
      <FontAwesomeIcon icon={faArrowLeft} className="text-[16px] tablet:text-[18px]" />

      <span className="font-light pt-0.5 tablet:text-[16px]">Back</span>
    </Link>
  )
}

export default BackButton;