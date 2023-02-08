
import { useEffect, useState } from 'react';
import { RESTAURANT_URL } from "../constants"
import { useParams } from 'react-router-dom';

const useRestaurant = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState(null)

  // [] at the last means run at `initial render` only
  useEffect(() => { getRestaurant() }, [])

  async function getRestaurant() {
    const data = await fetch(RESTAURANT_URL + id)
    const json = await data.json()
    // Optional Chaining
    const restaurantData = json?.data
    console.log("called useRestaurant !!!")
    setRestaurant(restaurantData);
  }
  return restaurant
}

export default useRestaurant