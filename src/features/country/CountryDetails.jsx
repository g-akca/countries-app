import { useParams } from "react-router";

import BackButton from "/src/components/ui/BackButton";
import CountryInfo from "./CountryInfo";

function CountryDetails() {
  const { cca3 } = useParams();

  return (
    <div className="flex flex-col w-full gap-16 max-w-142.5 tablet:gap-14 desktop:max-w-none desktop:gap-20">
      <BackButton />

      <CountryInfo cca3={cca3} />
    </div>
  )
}

export default CountryDetails;