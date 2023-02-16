import { ShimmerPostItem } from "react-shimmer-effects-18";

export const RestaurantCardSkeleton = () => {
  return (
    <div className="shimmer-restaurant-cardh-[350] w-[250] m-5 border-1 hover:drop-shadow-xl p-3">
      <ShimmerPostItem
        imageType="thumbnail"
        imageWidth={220}
        imageHeight={140}
        gap={30}
      />
    </div>
  );
};

