
import { useContext, useEffect } from "react"
import RestaurantContext from "../Contexts/RestaurantContext"
const Menu = ({
  collapsible, entities, name, perRow, subTitle, type
}) => {

  const { menuSelected } = useContext(RestaurantContext)

  let MenuClass = "flex justify-end mt-3 mb-3 pr-10"

  if (menuSelected === name) MenuClass += " border-r-4 border-rose-600"

  // final render
  return (
    <div className={MenuClass}>
      <span className="text-sm ">{name}</span>
    </div>
  )
}
export default Menu