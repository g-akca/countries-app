import CountryCard from "./CountryCard";

import data from "../data/data.json";

function CountryList({ search, region }) {
  const searchFilteredData = search ? data.filter(item => item.name.toLowerCase().includes(search.toLowerCase())) : data;
  const filteredData = region ? searchFilteredData.filter(item => item.region.toLowerCase() === region.toLowerCase()) : searchFilteredData;

  return (
    <section className="grid grid-cols-[repeat(auto-fit,264px)] gap-10 justify-center tablet:gap-18">
      {filteredData.map(item => (
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