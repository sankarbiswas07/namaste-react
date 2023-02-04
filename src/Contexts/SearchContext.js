import { createContext } from "react"

const SearchContext = createContext({
  search: ""
})

SearchContext.displayName = "SearchContext"

export default SearchContext