const Menu = ({
  collapsible, entities, name, perRow, subTitle, type
}) => {

  // final render
  return (
    <div className="flex justify-end mt-3 mb-3 pr-10 border-r-4 border-rose-600">
      <span className="text-sm ">{name}</span>
    </div>
  )
}
export default Menu