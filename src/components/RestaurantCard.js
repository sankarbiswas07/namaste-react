import "../../style.css"
import { IMG_CDN_URL } from "../constants"


const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString
}) => {
  return (
    <div className="restaurant-card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Distance - {lastMileTravelString}</h4>
    </div>
  )
}

export default RestaurantCard