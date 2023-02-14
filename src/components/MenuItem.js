import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/store/cartSlice"

const MenuItem = (item) => {
  const { id, name, price } = item
  // react-redux: provide this selector  (subscriber)to give access to the store directly
  // actually the store slice: eg: store.cart.items
  // const cartItem = useSelector(store => store.cart.items)

  const [isInCart, setInCart] = useState("");


  // this will trigger the update cycle of react store slice
  // Update cycle : When you click a button, it will `dispatch` an `action` which has a `reducer` function which will "update" a `slice` of a `redux store`
  const dispatch = useDispatch()
  const handleAddItem = (data) => {
    const { id, name, price } = data
    dispatch(addItem({ id, name, price }))
    setInCart(true)
  }

  let itemTWClass = `flex
      items-center
      justify-between
      p-3 mb-2 mt-2
      rounded-lg border-solid border-2
      group
      cursor-pointer`

  if (isInCart) {
    itemTWClass += " bg-red"
    itemTWClass += " border-indigo-400"
  } else {
    itemTWClass += " border-indigo-100 hover:border-indigo-400"
    itemTWClass += " bg-while"
  }

  return (
    <div
      onClick={() => (handleAddItem(item))}
      className={itemTWClass}>
      <span>{name}</span>
      <div className="
      flex
      border-1
      border-solid
      border-indigo-100 hover:border-indigo-400
      text-indigo-100 hover:text-indigo-400
      ">
        <div className="pt-1 pb-1 pl-3 pr-3 border-solid border-1">+</div>
        <div className="pt-1 pb-1 pl-3 pr-3 border-solid border-1">Add</div>
        <div className="pt-1 pb-1 pl-3 pr-3 border-solid border-1">-</div>
      </div>
    </div >
  )
}

export default MenuItem