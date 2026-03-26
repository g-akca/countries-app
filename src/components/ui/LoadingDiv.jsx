function LoadingDiv() {
  return (
    <div className="flex flex-col items-center justify-center h-50 gap-2">
      <div className="w-6 h-6 tablet:w-8 tablet:h-8 border-4 tablet:border-6 border-grey-250 border-t-black rounded-full animate-spin" />
      <p className="text-grey-400 tablet:text-[16px]">Loading...</p>
    </div>
  )
}

export default LoadingDiv;