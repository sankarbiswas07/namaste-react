import { Link } from "react-router-dom"
import { IMG_CDN_URL } from "../constants"

import { useContext } from "react"
import SearchContext from "../Contexts/SearchContext"

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  id
}) => {

  const { search } = useContext(SearchContext)
  return (
    <Link to={"/restaurant/" + id}>
      <div className="h-[350] w-[250] m-5 border-2 hover:drop-shadow-xl p-3">
        <img className="mb-5 " src={IMG_CDN_URL + cloudinaryImageId} />
        <h3 className="mb-3 font-bold font">{name}</h3>
        <h4 className="mb-3">{cuisines.join(", ")}</h4>
        <span className="mb-5">Distance - {lastMileTravelString}</span>
        <h5>{search}</h5>
      </div>
    </Link>
  )
}

export default RestaurantCard