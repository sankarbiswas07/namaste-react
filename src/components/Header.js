import "../../style.css"

const Header = () => {
  return (
    <div className="header">
      <div className="brand">
        <img src="https://w7.pngwing.com/pngs/55/100/png-transparent-swiggy-hd-logo-thumbnail.png" />
        <h3> FoodVilla</h3>
      </div>
      <ul className="side-menu">
        <li>
          <input type="text" />
          <input type="button" value="Search" />
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