import "../../style.css"
import { useState, useEffect } from "react"
// import { restaurantList } from "../constants"
import RestaurantCard from "./RestaurantCard"



const Body = () => {
  const [searchText, setSearchText] = useState("")
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  useEffect(() => { getApiData() }, [])

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
  // not render component (Early return)
  // if (!allRestaurants) return null;

  return (
    <>
      {/* search section */}
      <input type="text"
        placeholder="Restaurant name / cuisine"
        onChange={(e) => { setSearchText(e.target.value) }}
        value={searchText} />

      <input type="button" value="Search"
        className="search-btn"
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
        {
          filteredRestaurants.map(restaurant => {
            return (<RestaurantCard {...restaurant.data} key={restaurant.data.id} />)
          })
        }
      </div>
    </>)
}

export default Body