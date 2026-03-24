import BackButton from "../components/BackButton";

function NotFoundPage() {
  return (
    <main className="px-12 py-16 flex flex-col items-center gap-6 text-center tablet:gap-8 tablet:py-20 desktop:py-24">
      <h1 className="text-6xl font-extrabold tablet:text-[72px]">404</h1>

      <p className="text-[16px] text-grey-400 dark:text-grey-250 tablet:text-[20px]">
        Oops! The page you are looking for does not exist.
      </p>

      <BackButton />
    </main>
  );
}

export default NotFoundPage;