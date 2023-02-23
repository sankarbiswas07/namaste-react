import { createContext } from "react"

// First context default value
const RestaurantContext = createContext({
  menuSelected: null
})

RestaurantContext.displayName = "RestaurantContext"

export default RestaurantContext