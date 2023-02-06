import { useState, useEffect } from 'react';
import { RESTAURANTS_URL } from "../constants"

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState(null)

  useEffect(() => { getRestaurantsData() }, [])

  async function getRestaurantsData() {
    const data = await fetch(RESTAURANTS_URL)
    const json = await data.json()
    // Optional Chaining
    const cardData = json?.data?.cards[2]?.data?.data?.cards
    console.log("called useRestaurants !!!")
    setRestaurants(cardData);
  }

  return restaurants
}

export default useRestaurants