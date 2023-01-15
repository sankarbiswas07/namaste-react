import "../../style.css"
// import { restaurantList } from "../constants"
import { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard"
import { RestaurantCardSkeleton } from "./Shimmer"



const Body = () => {
  const [searchText, setSearchText] = useState("")
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  useEffect(() => { getApiData() }, [])

  // A Few cases
  // not render component (Early return)
  // if (!allRestaurants) return null;
  if (!allRestaurants?.length) {
    console.log("----")
    return (
      <>
        <div className="search-height"></div>
        <div className="restaurant-list">
          {Array(30).fill(true).map(() => (<RestaurantCardSkeleton />))}
        </div>
      </>
    )
  }

  async function getApiData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    )
    const json = await data.json()
    // Optional Chaining
    const cardData = json?.data?.cards[2]?.data?.data?.cards
    console.log(cardData)
    setAllRestaurants(cardData);
    setFilteredRestaurants(cardData);
  }

  return (
    <>
      {/* search section */}
      <input type="text"
        className="search-height"
        placeholder="Restaurant name / cuisine"
        onChange={(e) => { setSearchText(e.target.value) }}
        value={searchText} />

      <input type="button" value="Search"
        className="search-btn search-height"
        onClick={() => {

          return setFilteredRestaurants(allRestaurants.filter(restaurant => {
            // console.log(restaurant?.data?.cuisines?.filter(e => e?.trim()?.toLowerCase()?.includes(searchText.toLowerCase())))
            return restaurant?.data?.name?.toLowerCase().includes(searchText?.trim()?.toLowerCase())
              || restaurant?.data?.cuisines?.filter(e => e?.trim()?.toLowerCase()?.includes(searchText?.trim()?.toLowerCase())).length
          }
          ))
        }} />

      {/* list section */}
      <div className="restaurant-list">
        {/* <RestaurantCardSkeleton /> */}
        {
          filteredRestaurants.map(restaurant => {
            return (<RestaurantCard {...restaurant.data} key={restaurant.data.id} />)
          })
        }
      </div>
    </>)
}

export default Body