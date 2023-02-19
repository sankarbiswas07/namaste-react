import { useSelector } from "react-redux"
import { useEffect } from "react"
import AddToCartButton from "./AddToCartButton"
const Cart = ({
  name
}) => {

  //fetch react store slice
  const cartItems = useSelector(store => store.cart.items)
  console.log("cart js => ", Object.values(cartItems))

  return (
    <div className="min-w-[250] pt-10">
      <div className="border-b-[1px] border-gray-300">
        <p className="text-2xl mb-3">Cart</p>
        <p className="text-sm font-light">from <span className="text-rose-600 font-normal">{name}</span></p>
        <div className="my-5 justify-center flex">
          <div className="py-2 border-1 border border-rose-600 w-[130] text-center">
            <span>CLEAR CART</span>
          </div>
        </div>
      </div>

      {/* Cart item section  */}
      {
        Object.values(cartItems)?.map((item, i) => (
          <div className="flex mb-2 justify-between" key={i}>
            <span className="text-xs">{item.name}</span>
            <span className="text-xs">x {item.orderCount}</span>
            <span className="text-xs">{item.price / 100}</span>
            <AddToCartButton {...item} />
          </div>
        ))
      }
    </div>
  )
}

export default Cart