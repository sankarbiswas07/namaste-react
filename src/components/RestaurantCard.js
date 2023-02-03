import { Link } from "react-router-dom"
import "../../style.css"
import { IMG_CDN_URL } from "../constants"


const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  id
}) => {
  return (
    <Link to={"/restaurant/" + id}>
      <div className="restaurant-card">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <span>Distance - {lastMileTravelString}</span>
      </div>
    </Link>
  )
}

export default RestaurantCard