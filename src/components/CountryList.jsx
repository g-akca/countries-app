import CountryCard from "./CountryCard";

function CountryList() {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,264px)] gap-10 justify-center tablet:gap-18">
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </section>
  );
}

export default CountryList;