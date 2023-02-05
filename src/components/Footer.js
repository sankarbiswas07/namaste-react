
import { useContext } from "react"
import SearchContext from "../Contexts/SearchContext"
const Footer = () => {
  const { search } = useContext(SearchContext)
  return (
    <div className="mb-[200]">
      <h3>Footer will be here - {search}</h3>
    </div>
  )
}

export default Footer