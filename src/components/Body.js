import { useContext } from 'react';
import SearchContext from '../Contexts/SearchContext';

import useRestaurants from "../hooks/useRestaurants"
import RestaurantCard from "./RestaurantCard"
import { RestaurantCardSkeleton } from "./Shimmer"
import { filterData } from '../utils/helper';


const Body = () => {
  let allRestaurants = useRestaurants()
  const { search } = useContext(SearchContext)
  if (allRestaurants?.length && search) {
    allRestaurants = filterData(search, allRestaurants)
  }

  console.log("body", allRestaurants?.length, search)
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
          return (<RestaurantCard {...restaurant.data} key={restaurant.data.id} />)
        })
      }
    </div>
  )
}

export default Body