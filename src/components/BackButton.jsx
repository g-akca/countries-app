import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function BackButton() {
  return (
    <Link to="/">
      <button className="w-26 h-8 flex justify-center items-center gap-2 cursor-pointer bg-white shadow-[0_0_7px_rgba(0,0,0,0.1)] rounded-xs">
        <FontAwesomeIcon icon={faArrowLeft} className="text-[16px]" />

        <span className="text-[14px] font-light pt-0.5">Back</span>
      </button>
    </Link>
  )
}

export default BackButton;