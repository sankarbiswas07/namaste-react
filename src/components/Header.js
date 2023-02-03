import { useState } from "react"
import "../../style.css"



const Header = () => {
  const [searchText, setSearchText] = useState()

  return (
    <div className="flex h-14 bg-blue-400 justify-between mb-6">
      <div className="brand flex items-center">
        {/* <img src="https://w7.pngwing.com/pngs/55/100/png-transparent-swiggy-hd-logo-thumbnail.png" /> */}
        <h3> FoodVilla</h3>
        <small>{searchText}</small>
      </div>
      <ul className="side-menu flex items-center">
        <li className="pl-2">Offers</li>
        <li className="pl-2">Help</li>
        <li className="pl-2">Sankar P...</li>
        <li className="pl-2">Cart</li>
      </ul>
    </div>
  )
}

export default Header