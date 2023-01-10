import "../../style.css"
import { useState } from "react"
import { restaurantList } from "../constants"
import RestaurantCard from "./RestaurantCard"



const Body = () => {
  const [searchText, setSearchText] = useState("")
  const [restaurants, setRestaurantList] = useState(restaurantList)
  //used for controlling the clear button style
  const [inSearch, setInSearch] = useState(false)
  let whichClearBtn = `clear-btn${inSearch ? "" : "-line"}`

  const clearSearch = () => {
    if (!inSearch) return false
    console.log("valid clear search request")
    setRestaurantList(restaurantList) // reset the restaurants list
    setSearchText("") // rest the search input box
    setInSearch(false) //set a state to false as true means search has been click at least once
  }

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
          if (!searchText?.trim()) return clearSearch()
          setInSearch(true)
          return setRestaurantList(restaurants.filter(restaurant => {
            // console.log(restaurant?.data?.cuisines?.filter(e => e?.trim()?.toLowerCase()?.includes(searchText.toLowerCase())))
            return restaurant?.data?.name?.toLowerCase().includes(searchText?.trim()?.toLowerCase())
              || restaurant?.data?.cuisines?.filter(e => e?.trim()?.toLowerCase()?.includes(searchText?.trim()?.toLowerCase())).length
          }
          ))
        }} />

      {/* reset search */}
      <input className={whichClearBtn} type="button" value="Clear" onClick={() => { clearSearch() }} />

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