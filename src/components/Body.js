import { useState, useEffect } from "react"
import useRestaurants from "../hooks/useRestaurants"
import RestaurantCard from "./RestaurantCard"
import { RestaurantCardSkeleton } from "./Shimmer"

const Body = () => {
  const [searchText, setSearchText] = useState("")
  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  const allRestaurants = useRestaurants()
  // setFilteredRestaurants(allRestaurants)
  console.table(allRestaurants)

  // A Few cases
  // not render component (Early return)
  // if (!allRestaurants) return null;
  if (!allRestaurants?.length) {
    console.log("----")
    return (
      <>
        <div className="search-height"></div>
        <div className="restaurant-list">
          {Array(30).fill("").map((e, i) => (<RestaurantCardSkeleton key={i} />))}
        </div>
      </>
    )
  }

  return (
    <>
      {/* list section */}
      <div className="flex flex-wrap">
        {
          allRestaurants.map(restaurant => {
            return (<RestaurantCard {...restaurant.data} key={restaurant.data.id} />)
          })
        }
      </div>
    </>)
}

export default Body