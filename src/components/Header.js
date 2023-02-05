import { useContext, useState } from "react"
import SearchContext from "../Contexts/SearchContext"
import { filterData } from "../utils/helper"

const Header = () => {
  const { search, setSearch } = useContext(SearchContext)
  console.log("header =>", search)
  return (
    <div className="h-14  bg-blue-400 mb-6">
      <div className="w-[1024] flex justify-between m-auto  ">
        <div className="brand flex items-center">
          {/* <img src="https://w7.pngwing.com/pngs/55/100/png-transparent-swiggy-hd-logo-thumbnail.png" /> */}
          <h3> FoodVilla</h3>
        </div>
        {/* search section */}
        <div className="flex items-center ">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              onChange={(e) => { setSearch(e.target.value) }}
              // onChange={(e) => { console.log("=> ", e.target.value) }}
              value={search}
              name="search" />
          </label>

          <div
            className="ml-2 h-9 pl-3 pr-3 items-center bg-yellow-400 rounded-md"
            onClick={() => { filterData(search) }}>Search</div>
        </div>
        <ul className="side-menu flex items-center">
          <li className="pl-2">Offers</li>
          <li className="pl-2">Help</li>
          <li className="pl-2">Sankar P...</li>
          <li className="pl-2">Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header