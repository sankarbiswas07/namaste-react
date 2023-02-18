import { useContext, useState } from "react"
import SearchContext from "../Contexts/SearchContext"
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Header = () => {
  const [searchKey, setSearchKey] = useState("")

  const { setSearch } = useContext(SearchContext)

  // react-redux: provide this selector  (subscriber)to give access to the store directly
  // actually the store slice: eg: store.cart.items
  const cartItem = useSelector(store => store.cart.items)
  // console.log(cartItem)

  let cartCount = 0
  Object.values(cartItem).forEach(item => { cartCount += item.orderCount })

  function searchAction() {
    setSearch(searchKey)
    console.log("searchAction fired !!")
  }

  return (
    <div className=" bg-rose-600 p-3 flex justify-center items-center">
      <div className="md:container md:mx-auto px-4 flex justify-between m-auto">
        <div className="brand flex items-center">
          <h3> FoodVilla</h3>
        </div>
        {/* search section */}
        <div className="flex items-center justify-center ">
          <label className="relative block items-center">
            {/* <span className="sr-only">Search</span> */}
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              onChange={(e) => { setSearchKey(e.target.value?.trim()) }}
              value={searchKey}
              name="search" />
          </label>

          <div
            className="ml-2 h-9 pl-3 pr-3 items-center bg-yellow-400 cursor-pointer"
            onClick={() => { searchAction() }}>Search</div>
        </div>
        <ul className="side-menu flex items-center">
          <Link>
            <li className="pl-2 m-2">Offers</li>
          </Link>
          <Link>
            <li className="pl-2 m-2">Help</li>
          </Link>
          <Link>
            <li className="pl-2 m-2">Sankar P...</li>
          </Link>
          <Link>
            <li className="pl-2 m-2">Cart - {cartCount}</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header