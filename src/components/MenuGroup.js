import MenuItem from "./MenuItem"


const MenuGroup = ({ menu, meta }) => {
  // console.log(menu)
  // final render
  return (
    <div className="">
      <span className="decoration-4 font-extrabold">{(menu[0].category).toUpperCase()}</span>
      <div
        className="
          decoration-4 font-extrabold text-gray-300 text-sm
        ">
        {menu.length} ITEMS
      </div>
      {menu.map((value, i) => <MenuItem {...value} key={i} />)}
    </div>
  )
}
export default MenuGroup