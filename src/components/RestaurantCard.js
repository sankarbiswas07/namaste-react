import "../../style.css"
import { IMG_CDN_URL } from "../constants"


const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString
}) => {
  return (
    <div>
      {name}
    </div>
  )
}

export default RestaurantCard