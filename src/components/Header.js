import { useContext, useState } from "react"
import SearchContext from "../Contexts/SearchContext"

const Header = () => {
  const [searchKey, setSearchKey] = useState("")

  const { setSearch } = useContext(SearchContext)

  function searchAction() {
    setSearch(searchKey)
    console.log("searchAction fired !!")
  }

  return (
    <div className=" bg-blue-400 p-3 flex justify-center items-center">
      <div className="md:container md:mx-auto px-4 flex justify-between m-auto">
        <div className="brand flex items-center">
          <h3> FoodVilla</h3>
        </div>
        {/* search section */}
        <div className="flex items-center justify-center ">
          <label className="relative block items-center">
            {/* <span className="sr-only">Search</span> */}
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              onChange={(e) => { setSearchKey(e.target.value?.trim()) }}
              value={searchKey}
              name="search" />
          </label>

          <div
            className="ml-2 h-9 pl-3 pr-3 items-center bg-yellow-400 rounded-md cursor-pointer"
            onClick={() => { searchAction() }}>Search</div>
        </div>
        <ul className="side-menu flex items-center">
          <li className="pl-2 m-2">Offers</li>
          <li className="pl-2 m-2">Help</li>
          <li className="pl-2 m-2">Sankar P...</li>
          <li className="pl-2 m-2">Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header