import { useParams } from "react-router";

import BackButton from "./BackButton";
import CountryInfo from "./CountryInfo";

function CountryDetails() {
  const { name } = useParams();

  return (
    <div className="flex flex-col gap-16">
      <BackButton />

      <CountryInfo name={name} />
    </div>
  )
}

export default CountryDetails;