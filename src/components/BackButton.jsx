import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function BackButton() {
  return (
    <Link to="/" className="w-26 h-8 flex justify-center items-center gap-2 cursor-pointer bg-white shadow-[0_0_7px_rgba(0,0,0,0.1)] rounded-xs tablet:w-34 tablet:h-10">
      <FontAwesomeIcon icon={faArrowLeft} className="text-[16px] tablet:text-[18px]" />

      <span className="font-light pt-0.5 tablet:text-[16px]">Back</span>
    </Link>
  )
}

export default BackButton;