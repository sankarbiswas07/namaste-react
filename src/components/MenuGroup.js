import { useRef, useContext, useEffect } from "react"
import useOnScreen from "../hooks/useOnScreen"
import MenuItem from "./MenuItem"
import RestaurantContext from '../Contexts/RestaurantContext';

const MenuGroup = ({ menu, meta }) => {
  // console.log(menu)
  const ref = useRef(null)
  const isVisible = useOnScreen(ref)

  const { setMenuSelected } = useContext(RestaurantContext)

  useEffect(() => {
    if (isVisible) {
      setMenuSelected(menu[0].category)
      console.log(`${(menu[0].category).toUpperCase()} - is visible now`)
    }
  }, [isVisible])


  if (!isVisible) console.log(`${(menu[0].category).toUpperCase()} - is not visible now`)
  // final render
  return (
    <div ref={ref} className="">
      <span className="decoration-4 font-extrabold">{(menu[0].category).toUpperCase()}</span>
      <div
        className="
          decoration-4 font-extrabold text-gray-300 text-sm
        ">
        {menu.length} ITEMS
      </div>
      {menu.map((value, i) => <MenuItem {...value} key={i} />)}
    </div>
  )
}
export default MenuGroup