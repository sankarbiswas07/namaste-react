import { ShimmerPostItem } from "react-shimmer-effects-18";

export const RestaurantCardSkeleton = () => {
  return (
    <div className="shimmer-restaurant-card">
      <ShimmerPostItem
        imageType="thumbnail"
        imageWidth={220}
        imageHeight={140}
        gap={30}
      />
    </div>
  );
};

