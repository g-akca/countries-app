import { useSearchParams } from "react-router";
import { useEffect, useMemo } from "react";

import { useCountries } from "/src/context/CountriesProvider";

import CountryCard from "./CountryCard";
import Pagination from "./Pagination";
import LoadingDiv from "/src/components/ui/LoadingDiv";

function CountryList({ search, regions }) {
  const { countries, loading } = useCountries();

  const filteredData = useMemo(() => {
    let data = countries;

    data = search ? data.filter(item => item.name.toLowerCase().includes(search.toLowerCase())) : data;
    data = regions?.length ? data.filter(item => regions.some(r => r.toLowerCase() === item.region.toLowerCase())) : data;

    return data;
  }, [countries, search, regions]);

  const [searchParams, setSearchParams] = useSearchParams();

  const page = parseInt(searchParams.get("page") || "1");
  const itemsPerPage = 30;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const safePage = Math.min(Math.max(page, 1), totalPages || 1);
  const startIndex = (safePage - 1) * itemsPerPage;

  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    if (!filteredData.length) return;

    if (page !== safePage) {
      setSearchParams(prev => {
        const params = new URLSearchParams(prev);
        params.set("page", safePage);
        return params;
      }, { replace: true });
    }
  }, [page, safePage, setSearchParams, filteredData.length]);

  const handlePageChange = (newPage) => {
    setSearchParams(prev => {
      const params = new URLSearchParams(prev);
      params.set("page", newPage);
      return params;
    });
  }

  if (loading) {
    return (
      <LoadingDiv />
    )
  }

  return (
    <div className="flex flex-col gap-8 tablet:gap-12 items-center">
      <section className="w-full grid grid-cols-[repeat(auto-fit,264px)] gap-10 justify-center items-stretch tablet:gap-18">
        {paginatedData.map(item => (
          <CountryCard
            key={item.cca3}
            cca3={item.cca3}
            flagUrl={item.flag}
            name={item.name}
            population={item.population}
            region={item.region}
            capital={item.capital}
          />
        ))}
      </section>

      <Pagination 
        currentPage={safePage}
        setCurrentPage={handlePageChange}
        totalPages={totalPages}
      />
    </div>
  );
}

export default CountryList;