import { useSelector } from "react-redux"
import AddToCartButton from "./AddToCartButton"
const Cart = ({
  name
}) => {

  //fetch react store slice
  const cartItems = useSelector(store => store.cart.items)
  // console.log("cart js => ", Object.values(cartItems))

  return (
    <div className="min-w-[340px] max-w-[340px] pt-10 mx-auto p-[10px]">
      <div className="border-b-[1px] border-gray-300">
        <p className="text-2xl mb-3">Cart</p>
        <p className="text-sm font-light my-5">from <span className="text-rose-600 font-normal">{name}</span></p>
        {/* <div className="my-5 justify-center flex">
          <div className="py-2 border-1 border border-rose-600 w-[130] text-center">
            <span>CLEAR CART</span>
          </div>
        </div> */}
      </div>

      <div className="min-h-[440px] max-h-[500px]  overflow-y-auto overflow-x-hidden">
        {/* Cart item section  */}
        {
          Object.values(cartItems)?.map((item, i) => (
            <div className="my-5
             align-middle
             grid grid-cols-3 gap-5
             items-center"
              key={i}
            >
              <div className="max-w-[200px] min-w-[100px] mr-3 ">
                <span className="text-xs text-start">{item.name}</span>
              </div>
              <div className="mr-3">
                <AddToCartButton {...item} />
              </div>
              <div className="w-[100px] items-center align-middle">
                <span className="text-xs text-gray-700 align-middle">₹{item.price / 100}</span>
              </div>
            </div>
          ))
        }
      </div>

      {/* Checkout button */}
      <div className="my-5 justify-center flex">
        <div className="py-2 border-1 border border-rose-600 w-full text-center">
          <span>CHECKOUT</span>
        </div>
      </div>
    </div>
  )
}

export default Cart