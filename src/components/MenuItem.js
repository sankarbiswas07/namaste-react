import { IMG_CDN_URL } from "../constants"
import AddToCartButton from "./AddToCartButton"

// style sample - https://play.tailwindcss.com/xlvMilkM5b
const MenuItem = (item) => {
  const { id, name, price, description, cloudinaryImageId } = item

  let itemTWClass = `flex
      justify-between
      items-center
      pr-3 pt-3 pb-3 
      mb-4 mt-4
      border-b-[1px]
      group`

  return (
    <div
      className={itemTWClass}>
      <div className="items-bottom">
        <p>{name}</p>
        <p className="text-sm my-2 text-gray-700">₹ {price / 100}</p>
        <p className="text-xs text-gray-400 font-light">{description}</p>
      </div>
      <div className="flex-start">
        <div>
          <img className="w-[150] rounded-lg" src={IMG_CDN_URL + cloudinaryImageId} />
        </div>
        <div className="
          z-50
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
          justify-center"
        >
          <AddToCartButton {...item} />
        </div>
      </div>
    </div >
  )
}

export default MenuItem