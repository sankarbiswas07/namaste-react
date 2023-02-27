
import { useContext, useEffect } from "react"
import RestaurantContext from "../Contexts/RestaurantContext"
const Menu = ({
  collapsible, entities, name, perRow, subTitle, type, widgets
}) => {

  const { menuSelected } = useContext(RestaurantContext)

  let MenuClass = "flex justify-end mt-3 mb-3 pr-10"
  let TextClass = "text-sm"

  if (menuSelected === name) {
    MenuClass += " border-r-4 border-rose-600"
    TextClass = "text-sm text-rose-600"
  }

  // final render, if their is some entities.
  if (entities?.length || widgets?.length) {
    return (
      <div className={MenuClass}>
        <span className={TextClass}>{name}</span>
      </div>
    )
  } else {
    console.log("menu don't require => ", name)
  }
}
export default Menu