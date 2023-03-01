import { Link } from "react-router-dom"
import { IMG_CDN_URL } from "../constants"

// import { useContext } from "react"
// import SearchContext from "../Contexts/SearchContext"

const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  costForTwoString,
  slaString,
  aggregatedDiscountInfo,
  ribbon,
  cloudinaryImageId,
  lastMileTravelString,
  id
}) => {

  // const { search } = useContext(SearchContext)
  {/* <h5>{search}</h5> */ }
  return (
    <Link className="group" to={"/restaurant/" + id}>
      <div className="px-4 pt-4 my-4 w-[350px] group-hover:shadow-md group-hover:border-[1px] border-gray-300">
        {/* <div className="h-full"> */}
        <div className="bg-gray-400  w-full object-cover object-center">
          <img className="mb-5 " src={IMG_CDN_URL + cloudinaryImageId} />
        </div>
        <div className="mt-5">
          <h1 className="py-3 w-9/10 font-bold text-gray-800">{name}</h1>
          <h2 className="w-9/10 mb-4 font-light text-sm text-gray-600">{cuisines.join(", ")}</h2>
          <div className="flex items-center mb-3 justify-between text-gray-500">
            <p className="leading-relaxed w-2/7  bg-green-500 text-gray-100 text-right text-sm font-medium px-2">&#9734;&nbsp;{avgRating}</p>
            <p className="leading-relaxed w-1/7 text-center">&bull;</p>
            <p className="leading-relaxed w-2/7 text-center font-light text-sm">{slaString}</p>
            <p className="leading-relaxed w-1/7 text-center">&bull;</p>
            <p className="leading-relaxed w-2/7 text-center font-light text-sm ">{costForTwoString}</p>
          </div>
          <h1 className="border-t-[1px] group-hover:border-b-[1px] border-gray-300 w-9/10 py-3 font-medium text-sm text-rose-500">
            {aggregatedDiscountInfo?.descriptionList[0]?.meta}
          </h1>
          <h2 className="invisible group-hover:visible w-9/10 py-3 text-blue-500 text-center text-sm font-light">QUICK VIEW</h2>
          {/* </div> */}
        </div>
      </div>
    </Link >
  )
}

export default RestaurantCard