import { useState } from "react"

const Header = () => {
  const [searchText, setSearchText] = useState("")
  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  return (
    <div className="h-14  bg-blue-400 mb-6">
      <div className="w-[1024] flex justify-between m-auto  ">
        <div className="brand flex items-center">
          {/* <img src="https://w7.pngwing.com/pngs/55/100/png-transparent-swiggy-hd-logo-thumbnail.png" /> */}
          <h3> FoodVilla</h3>
          <small>{searchText}</small>
        </div>
        {/* search section */}
        <div className="flex items-center ">
          {/* <input type="text"
          className="inp"
          placeholder="Restaurant name / cuisine"
          onChange={(e) => { setSearchText(e.target.value) }}
          value={searchText} /> */}
          <label className="relative block">
            <span className="sr-only">Search</span>
            {/* <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">Q</svg>
          </span> */}
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              onChange={(e) => { setSearchText(e.target.value) }}
              value={searchText}
              name="search" />
          </label>

          <div
            className="ml-2 h-9 pl-3 pr-3 items-center bg-yellow-400 rounded-md"
            onClick={() => {
              return setFilteredRestaurants(allRestaurants.filter(restaurant => {
                return restaurant?.data?.name?.toLowerCase().includes(searchText?.trim()?.toLowerCase())
                  || restaurant?.data?.cuisines?.filter(e => e?.trim()?.toLowerCase()?.includes(searchText?.trim()?.toLowerCase())).length
              }
              ))
            }}>Search</div>
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