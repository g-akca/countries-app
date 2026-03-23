import { useState, useEffect } from "react";

import CountryCard from "./CountryCard";
import Pagination from "./Pagination";

import data from "../data/data.json";

function CountryList({ search, region }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  const searchFilteredData = search ? data.filter(item => item.name.toLowerCase().includes(search.toLowerCase())) : data;
  const filteredData = region ? searchFilteredData.filter(item => item.region.toLowerCase() === region.toLowerCase()) : searchFilteredData;

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, region]);

  return (
    <div className="flex flex-col gap-8 tablet:gap-12 items-center">
      <section className="w-full grid grid-cols-[repeat(auto-fit,264px)] gap-10 justify-center items-stretch tablet:gap-18">
        {paginatedData.map(item => (
          <CountryCard
            key={item.name}
            flagUrl={item.flag}
            name={item.name}
            population={item.population}
            region={item.region}
            capital={item.capital}
          />
        ))}
      </section>

      <Pagination 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default CountryList;