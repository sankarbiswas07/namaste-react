import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';

const RestaurantDetails = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState(null)

  useEffect(() => { DetailsAPI(id) }, [])

  async function DetailsAPI(id) {
    const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=22.818628708804866&lng=88.40014815330504&menuId=" + id)
    const json = await data.json()
    setRestaurant(json.data)
  }

  return (
    <div>
      <h1> Restaurant details us page - {id}</h1>
      <p>{restaurant?.name}</p>
    </div>
  )
}

export default RestaurantDetails