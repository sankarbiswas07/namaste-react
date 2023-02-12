import { useDispatch } from "react-redux"
import { addItem } from "../utils/store/cartSlice"


const MenuItem = ({ name }) => {
  // this will trigger the update cycle of react store slice
  // Update cycle : When you click a button, it will `dispatch` an `action` which has a `reducer` function which will "update" a `slice` of a `redux store`
  const dispatch = useDispatch()
  const handleAddItem = () => {
    dispatch(addItem("C"))
  }

  return (
    <div
      className="
      flex
      items-center
      justify-between
      bg-white 
      p-3 mb-2 mt-2
      rounded-lg border-solid border-2
      border-indigo-100 hover:border-indigo-400
      group
      cursor-pointer
    ">
      <span>{name}</span>
      <div
        className="
        pt-1 pb-1 pl-3 pr-3  text-indigo-50
        rounded-lg border-solid border-2 border-indigo-100 group-hover:bg-indigo-400
      "
        onClick={(e) => { handleAddItem() }}
      >
        Add
      </div>
    </div>
  )
}

export default MenuItem