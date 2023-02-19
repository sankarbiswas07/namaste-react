import useRestaurant from '../hooks/useRestaurant';
import Cart from './Cart';
import Menu from './Menu';
import MenuGroup from './MenuGroup';

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
  // re-conciliation happen, shimmer changed to the next `return (DOM)`
  const { menu: { items: menuItems, widgets }, ...meta } = restaurant

  // group as per category
  const menuArrGrp = {}
  // const menuArr = Object.values(menuItems)

  Object.values(menuItems).forEach(item => {
    if (menuArrGrp[item.category]) {
      // 2nd time user is adding
      menuArrGrp[item.category].push(item)
    } else {
      // 1st time adding the item in the menu
      menuArrGrp[item.category] = [item]
    }
  })
  // console.log(menuArrGrp);
  const menus = Object.keys(menuArrGrp)
  console.log(menus.length);

  return (
    <div className=''>
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
            {
              Object.keys(menuArrGrp).map((menuArr, i) => {
                return (
                  <MenuGroup id={i} key={i} {...{
                    meta,
                    menu: menuArrGrp[menuArr]
                  }} />
                )
              })
            }
          </div>
          <div>
            <Cart {...meta} />
          </div>
        </div >
      </div>
    </div>
  )
}

export default RestaurantDetails