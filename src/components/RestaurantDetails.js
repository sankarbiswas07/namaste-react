import useRestaurant from '../hooks/useRestaurant';

const RestaurantDetails = () => {

  // custom hook
  const restaurant = useRestaurant()

  // initial render > wait for useEffect, run shimmer 
  if (!restaurant) {
    console.log("useRestaurant is under process")
    return (
      <h3>Hi, I will be shimmer soon !!!</h3>
    )
  }

  // re-render when state:restaurant dat changed by API call, it's trigger an re-render
  // initial render > Api call > re-render, restaurant has data now
  // re-conciliation happen shimmer changed to the next `return (DOM)`
  const { menu: { items: menuItems }, name } = restaurant
  const menuArr = Object.values(menuItems)
  console.log(menuArr);

  return (
    <div className='m-10'>
      <div className="">
        <div className="
          row-span-2 col-span-2
        bg-slate-50 pt-5 
          pb-5 pl-8 pr-8
          rounded-lg border-solid border-2
        border-indigo-50
        ">
          <div className="pt-5 pb-5 text-indigo-400">
            <h1 className="text-xl font-bold">
              Today's Menu
            </h1>
          </div>
          {menuArr.map((item, i) => {
            return (
              <div
                key={i}
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
                "
              >
                <span>{item?.name}</span>
                <div className="
                pt-1 pb-1 pl-3 pr-3  text-indigo-50
                rounded-lg bg-indigo-100 group-hover:bg-indigo-400
                ">Add</div>
              </div>
            )
          })}
        </div>
      </div>
    </div >
  )
}

export default RestaurantDetails