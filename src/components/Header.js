import "../../style.css"

const Header = () => {
  return (
    <div className="header">
      <div className="brand">
        <img src="https://e7.pngegg.com/pngimages/141/383/png-clipart-logo-product-design-brand-gps-coordinates-text-orange-thumbnail.png" />
        <h3> FoodVilla</h3>
      </div>
      <ul className="side-menu">
        <li>Search</li>
        <li>Offers</li>
        <li>Help</li>
        <li>Sankar P...</li>
        <li>Cart</li>
      </ul>
    </div>
  )
}

export default Header