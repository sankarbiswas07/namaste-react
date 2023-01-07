import React from "react";
import ReactDom from "react-dom/client"
import "./style.css"

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

/**
 * DOM TREE - 
 * 
 * 1. A AppLayout.
 *    1.1 Header
 *    1.2 Body
 *        1.2.1 RestaurantCard
 *    1.3 Footer
 * **/

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

const Body = () => {
  return (
    <h1>FoodVilla coming soon !!!</h1>
  )
}

const Footer = () => {
  return (
    <h3>Footer will be here</h3>
  )
}

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<AppLayout />)