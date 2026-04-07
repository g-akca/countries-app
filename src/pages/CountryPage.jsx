import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useCountries } from "/src/context/CountriesProvider";

import CountryDetails from "../features/country/CountryDetails";
import LoadingDiv from "/src/components/ui/LoadingDiv";

function CountryPage() {
  const { cca3 } = useParams();
  const { getCountryByCode } = useCountries();
  const [countryData, setCountryData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadCountry() {
      try {
        const data = await getCountryByCode(cca3);

        if (!data) {
          navigate("/404", { replace: true });
          return;
        }

        setCountryData(data);
      }
      catch {
        navigate("/404", { replace: true });
      }
    }

    loadCountry();
  }, [cca3, navigate]);

  if (!countryData) {
    return (
      <LoadingDiv />
    )
  }

  return (
    <main className="px-7 pt-10 pb-16 flex justify-center desktop:p-20 desktop:pb-30">
      <CountryDetails countryData={countryData} />
    </main>
  )
}

export default CountryPage;