import { useParams } from "react-router";

import BackButton from "./BackButton";
import CountryInfo from "./CountryInfo";

function CountryDetails() {
  const { name } = useParams();

  return (
    <div className="flex flex-col w-full gap-16 max-w-142.5 tablet:gap-14 desktop:max-w-none desktop:gap-20">
      <BackButton />

      <CountryInfo name={name} />
    </div>
  )
}

export default CountryDetails;