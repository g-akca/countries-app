import { useState, useEffect } from "react";

import { useCountries } from "../context/CountriesProvider";

import CountryStats from "./CountryStats";

function CountryInfo({ cca3 }) {
  const { getCountryByCode } = useCountries();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    async function loadCountry() {
      const data = await getCountryByCode(cca3);
      setCountryData(data);
    }

    loadCountry();
  }, [cca3]);

  if (!countryData) {
    return <p>Loading...</p>;
  }

  const countryName = countryData.name?.common || countryData.name;

  return (
    <section className="flex flex-col gap-12 tablet:gap-14 desktop:grid desktop:grid-cols-[1fr_1.2fr] desktop:gap-30 desktop:items-center">
      <img src={countryData.flags.png} alt={`${countryName} flag`} className="w-full rounded-md tablet:rounded-[10px]" />

      <div className="flex flex-col gap-4 tablet:gap-6 desktop:grow">
        <p className="text-[24px] leading-[137.5%] font-extrabold tablet:text-[32px]">{countryName}</p>

        <CountryStats countryData={countryData} />
      </div>
    </section>
  )
}

export default CountryInfo;