import { useState } from "react"
import "../../style.css"



const Header = () => {
  const [searchText, setSearchText] = useState()

  function setSearchTextState(e) {
    console.log(e.target.value)
    setSearchText(e.target.value)
  }

  return (
    <div className="header">
      <div className="brand">
        <img src="https://w7.pngwing.com/pngs/55/100/png-transparent-swiggy-hd-logo-thumbnail.png" />
        <h3> FoodVilla</h3>
        <small>{searchText}</small>
      </div>
      <ul className="side-menu">
        <li>
          <input type="text" onChange={setSearchTextState} placeholder="Restaurant name / cuisine" />
          <input type="button" value="Search" /><br />
        </li>
        <li>Offers</li>
        <li>Help</li>
        <li>Sankar P...</li>
        <li>Cart</li>
      </ul>
    </div>
  )
}

export default Header