export const RestaurantCardSkeleton = () => {
  return (
    <div className="px-4 pt-4 my-4 w-[350px]">
      <div className="h-full  rounded-lg">
        <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
        <div className="mt-5">
          <h1 className="bg-gray-400 animate-pulse h-4 w-9/10 mb-4"></h1>
          <h2 className="w-9/10 mb-4 h-6 animate-pulse bg-gray-500"></h2>
          <div className="flex items-center mb-3 justify-between">
            <p className="leading-relaxed w-1/4 h-3 animate-pulse bg-gray-400">&nbsp;</p>
            <p className="leading-relaxed w-1/4 px-3 text-center">&bull;</p>
            <p className="leading-relaxed w-1/4 h-3 animate-pulse bg-gray-400">&nbsp;</p>
            <p className="leading-relaxed w-1/4 px-3 text-center">&bull;</p>
            <p className="leading-relaxed w-1/4 h-3 animate-pulse bg-gray-400">&nbsp;</p>
          </div>
          <h1 className="bg-gray-400 animate-pulse h-4 w-9/10 mb-2"></h1>
          <h2 className="w-9/10 mb-4 h-6 animate-pulse bg-gray-400"></h2>
        </div>
      </div>
    </div>
  );
};

