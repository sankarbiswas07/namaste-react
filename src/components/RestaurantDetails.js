import useRestaurant from '../hooks/useRestaurant';
import MenuItem from './MenuItem';
import Menu from './Menu';

const RestaurantDetails = () => {

  // custom hook
  const restaurant = useRestaurant()

  console.log(restaurant)

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
  const { menu: { items: menuItems, widgets }, name } = restaurant
  const menuArr = Object.values(menuItems)
  console.log(widgets);

  return (
    <>
      {/* Restaurant details with offer */}
      <div className="h-[200] bg-slate-900">

      </div>
      {/* menu section */}
      <div className='mx-auto w-[1024]'>
        <div className='flex'>
          <div className="min-w-[300] pt-10">
            {widgets.map((value, i) => <Menu {...value} key={i} />)}
          </div>
          <div className="
          row-span-2 
          col-span-2
          pt-10 pb-5 pl-8 pr-8
          border-l-[1px]
          border-black
        ">
            {menuArr.map((item, i) => <MenuItem key={i} {...item} />)}
          </div>
          <div>Cart section</div>
        </div >
      </div>
    </>
  )
}

export default RestaurantDetails