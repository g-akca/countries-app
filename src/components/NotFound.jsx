import BackButton from "./BackButton";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 py-12 tablet:gap-10 tablet:py-20">
      <h1 className="text-6xl font-extrabold tablet:text-[72px]">404</h1>

      <p className="text-[16px] text-grey-400 dark:text-grey-250 tablet:text-[24px]">
        Oops! The page you are looking for does not exist.
      </p>

      <BackButton />
    </div>
  );
}

export default NotFound;