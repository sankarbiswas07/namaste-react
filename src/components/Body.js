import { useContext } from "react"
import SearchContext from "../Contexts/SearchContext"

import useRestaurants from "../hooks/useRestaurants"
import RestaurantCard from "./RestaurantCard"
import { RestaurantCardSkeleton } from "./Shimmer"


const Body = () => {
  const allRestaurants = useRestaurants()
  const { search } = useContext(SearchContext)

  if (!allRestaurants?.length) {
    console.log("Calling useRestaurants")
    return (
      <div className="flex flex-wrap">
        {Array(30).fill("").map((e, i) => (<RestaurantCardSkeleton key={i} />))}
      </div>
    )
  }

  return (
    <div className="flex flex-wrap">
      {
        allRestaurants.map(restaurant => {
          return (<RestaurantCard {...restaurant.data} search={search} key={restaurant.data.id} />)
        })
      }
    </div>
  )
}

export default Body