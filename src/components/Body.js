import "../../style.css"
import { restaurantList } from "../constants"
import RestaurantCard from "./RestaurantCard"

const Body = () => {
  return (<div>
    {
      restaurantList.map(restaurant => {
        return (<RestaurantCard {...restaurant.data} key={restaurant.data.id} />)
      })
    }
  </div>)
}

export default Body