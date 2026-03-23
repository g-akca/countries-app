import CountryCard from "./CountryCard";

function CountryList() {
  return (
    <section className="grid grid-cols-[repeat(auto-fill,264px)] gap-10 justify-center">
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </section>
  );
}

export default CountryList;