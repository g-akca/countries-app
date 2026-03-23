import CountryCard from "./CountryCard";

import data from "../data/data.json";

function CountryList() {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,264px)] gap-10 justify-center tablet:gap-18">
      {data.map(item => (
        <CountryCard
          flagUrl={item.flag}
          name={item.name}
          population={item.population}
          region={item.region}
          capital={item.capital}
        />
      ))}
    </section>
  );
}

export default CountryList;