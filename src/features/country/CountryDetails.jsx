import BackButton from "/src/components/ui/BackButton";
import CountryInfo from "./CountryInfo";

function CountryDetails({ countryData }) {
  return (
    <div className="flex flex-col w-full gap-16 max-w-142.5 tablet:gap-14 desktop:max-w-none desktop:gap-20">
      <BackButton />

      <CountryInfo countryData={countryData} />
    </div>
  )
}

export default CountryDetails;