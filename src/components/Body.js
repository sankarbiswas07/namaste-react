import "../../style.css"
import { useState } from "react"
import { restaurantList } from "../constants"
import RestaurantCard from "./RestaurantCard"

const Body = () => {
  const [searchText, setSearchText] = useState("")
  const [restaurants, setRestaurantList] = useState(restaurantList)

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