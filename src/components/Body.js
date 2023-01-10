import "../../style.css"
import { useState } from "react"
import { restaurantList } from "../constants"
import RestaurantCard from "./RestaurantCard"



const Body = () => {
  const [searchText, setSearchText] = useState("")
  const [restaurants, setRestaurantList] = useState(restaurantList)

  const clearSearch = () => {
    if (!searchText.trim()) return false
    console.log("valid clear search request")
    setRestaurantList(restaurantList)
    setSearchText("")
  }

  return (
    <>
      {/* search section */}
      <input type="text"
        placeholder="Restaurant name / cuisine"
        onChange={(e) => { setSearchText(e.target.value) }}
        value={searchText} />
      <input type="button" value="Search"
        onClick={() => {
          setRestaurantList(restaurants.filter(restaurant => {
            // console.log(restaurant?.data?.cuisines?.filter(e => e?.trim()?.toLowerCase()?.includes(searchText.toLowerCase())))
            return restaurant?.data?.name?.toLowerCase().includes(searchText?.toLowerCase())
              || restaurant?.data?.cuisines?.filter(e => e?.trim()?.toLowerCase()?.includes(searchText.toLowerCase())).length
          }
          ))
        }} />

      {/* reset search */}
      <input type="button" value="Clear" onClick={() => { clearSearch() }} />

      {/* list section */}
      <div className="restaurant-list">
        {
          restaurants.map(restaurant => {
            return (<RestaurantCard {...restaurant.data} key={restaurant.data.id} />)
          })
        }
      </div>
    </>)
}

export default Body