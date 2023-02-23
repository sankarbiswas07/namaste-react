import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addItem, removeItem } from "../utils/store/cartSlice"
// style sample - https://play.tailwindcss.com/xlvMilkM5b
const AddToCartButton = (item) => {
  // react-redux: provide this selector  (subscriber)to give access to the store directly
  // actually the store slice: eg: store.cart.items
  const cartItems = useSelector(store => store.cart.items)
  // console.log(cartItems)
  const [orderCount, setOrderCount] = useState(0);
  // console.log("Component : AddToCartButton as useState `Initial render` the component for `orderCount` value change")
  // console.log(`WATCHOUT!!! useState 'orderCount' is 0 by default for ${item?.id} <=> ${item.name}\n\n`)

  // after a tight 20 hr. time lose. 
  // I remember and try setOrderCount(cartItems[item?.id]?.orderCount) in useEffect()
  // previously I was struck in: const [orderCount, setOrderCount] = useState(cartItems[item?.id]?.orderCount || 0)
  // tried to replicate the state in addToCart component
  // do not forget the basics.
  // Here, the local state is handling the number
  // need to setOrderCount on every re-render

  useEffect(() => {
    // console.log("re-render of add to cart button")
    // console.log(cartItems[item?.id]?.orderCount)
    setOrderCount(cartItems[item?.id]?.orderCount)
  })
  // this will trigger the update cycle of react store slice
  // Update cycle : When you click a button, it will `dispatch` an `action` which has a `reducer` function which will "update" a `slice` of a `redux store`
  const dispatch = useDispatch()
  const handleAddItem = (data) => {
    const { id, name, price } = data
    dispatch(addItem({ id, name, price }))
    setOrderCount(orderCount + 1)
  }
  const handleRemoveItem = (data) => {
    const { id, name, price } = data
    dispatch(removeItem({ id, name, price }))
    setOrderCount(orderCount - 1)
  }

  return (
    <div className="
    drop-shadow-lg
    mx-auto
    flex
    border
    border-1
    border-solid
    border-rose-400 group-hover:border-rose-800
    text-rose-100 group-hover:text-white
    group-hover:bg-rose-600
    bg-rose-500
    w-[120px]
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
  )
}

export default AddToCartButton