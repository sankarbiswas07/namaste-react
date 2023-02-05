import { createContext } from "react"

// First context default value
const SearchContext = createContext({
  search: "yo yo "
})

SearchContext.displayName = "SearchContext"

export default SearchContext