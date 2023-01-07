import React from "react";
import ReactDom from "react-dom/client"

const WhoIam = () => {
  return (
    <h1>FoodVilla coming soon !!!</h1>
  )
}

/**
 * DOM TREE - 
 * 
 * 1. A AppLayout.
 *    1.1 Heder
 *    1.2 Body
 *        1.2.1 RestaurantCard
 *    1.3 Footer
 * **/

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<WhoIam />)