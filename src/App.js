import React from "react";
import ReactDom from "react-dom/client"

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <div className="html">
      <Header />
      <Body />
      <Footer />
    </div>
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

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<AppLayout />)