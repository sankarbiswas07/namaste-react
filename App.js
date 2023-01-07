import React from "react";
import ReactDom from "react-dom/client"

const WhoIam = () => {
  return (
    <h1>FoodVilla coming soon !!!</h1>
  )
}

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<WhoIam />)