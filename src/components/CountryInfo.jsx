import data from "../data/data.json";

import CountryStats from "./CountryStats";

function CountryInfo({ name }) {
  const countryData = data.find(item => item.name === name);

  return (
    <section className="flex flex-col gap-12 tablet:gap-14 desktop:flex-row desktop:gap-30 desktop:items-center">
      <img src={countryData.flag} alt={`${name} flag`} className="self-stretch rounded-md tablet:rounded-[10px] desktop:self-center desktop:max-w-140" />

      <div className="flex flex-col gap-4 tablet:gap-6 desktop:grow">
        <p className="text-[24px] leading-[137.5%] font-extrabold tablet:text-[32px]">{countryData.name}</p>

        <CountryStats countryData={countryData} />
      </div>
    </section>
  )
}

export default CountryInfo;