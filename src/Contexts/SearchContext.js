import { createContext } from "react"

// First context default value
const SearchContext = createContext({
  search: ""
})

SearchContext.displayName = "SearchContext"

export default SearchContext