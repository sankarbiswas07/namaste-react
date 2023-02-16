import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"

import { IMG_CDN_URL } from "../constants"
import { addItem, removeItem } from "../utils/store/cartSlice"

const MenuItem = (item) => {
  const { id, name, price, description, cloudinaryImageId } = item
  // react-redux: provide this selector  (subscriber)to give access to the store directly
  // actually the store slice: eg: store.cart.items
  // const cartItem = useSelector(store => store.cart.items)

  const [orderCount, setOrderCount] = useState(0);


  // this will trigger the update cycle of react store slice
  // Update cycle : When you click a button, it will `dispatch` an `action` which has a `reducer` function which will "update" a `slice` of a `redux store`
  const dispatch = useDispatch()
  const handleAddItem = (data) => {
    const { id, name, price } = data
    dispatch(addItem({ id, name, price }))
    setOrderCount(orderCount + 1)
  }

  const handleRemoveItem = (data) => {
    if (orderCount) {
      const { id, name, price } = data
      dispatch(removeItem({ id, name, price }))
      setOrderCount(orderCount - 1)
    }
  }

  let itemTWClass = `flex
      justify-between
      items-center
      pr-3 pt-3 pb-3 
      mb-4 mt-4
      border-b-[1px]
      group`

  if (orderCount) {
    itemTWClass += " bg-red"
    itemTWClass += " border-indigo-400"
  } else {
    itemTWClass += " border-indigo-100 hover:border-indigo-400"
    itemTWClass += " bg-while"
  }

  return (
    <div
      className={itemTWClass}>
      <div className="items-bottom">
        <p>{name}</p>
        <p className="text-sm my-2 text-gray-700">₹ {price}</p>
        <p className="text-xs text-gray-400 font-light">{description}</p>
      </div>
      <div className="flex-start">
        <div>
          <img className="w-[150] rounded-lg" src={IMG_CDN_URL + cloudinaryImageId} />
        </div>
        <div className="
               mx-auto
                flex
                border
                border-1
                border-solid
                border-indigo-100 group-hover:border-indigo-400
                text-indigo-400
                w-[120]
                justify-center
              ">
          {
            orderCount
              ? (
                <>
                  <div
                    className="pt-1 pb-1 pl-3 pr-3 border-solid border-1 
                    cursor-pointer"
                    onClick={() => (handleAddItem(item))}
                  >
                    +
                  </div>

                  <div className="pt-1 pb-1 pl-3 pr-3 border-solid border-1">
                    {orderCount}
                  </div>

                  <div
                    className="pt-1 pb-1 pl-3 pr-3 border-solid border-1 
                    cursor-pointer"
                    onClick={() => (handleRemoveItem(item))}
                  >
                    -
                  </div>
                </>
              )

              : (
                <>
                  <div
                    onClick={() => (handleAddItem(item))}
                    className="pt-1 pb-1 pl-3 pr-3 border-solid border-1 
                    cursor-pointer">
                    A D D
                  </div>
                </>
              )
          }
        </div>
      </div>
    </div >
  )
}

export default MenuItem