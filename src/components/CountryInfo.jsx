import data from "../data/data.json";

import CountryStats from "./CountryStats";

function CountryInfo({ name }) {
  const countryData = data.find(item => item.name === name);

  return (
    <section className="flex flex-col gap-12 tablet:gap-14 desktop:grid desktop:grid-cols-[1fr_1.2fr] desktop:gap-30 desktop:items-center">
      <img src={countryData.flag} alt={`${name} flag`} className="w-full rounded-md tablet:rounded-[10px]" />

      <div className="flex flex-col gap-4 tablet:gap-6 desktop:grow">
        <p className="text-[24px] leading-[137.5%] font-extrabold tablet:text-[32px]">{countryData.name}</p>

        <CountryStats countryData={countryData} />
      </div>
    </section>
  )
}

export default CountryInfo;