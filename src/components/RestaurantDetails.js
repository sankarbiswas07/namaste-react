import { useState, useContext } from 'react';
import useRestaurant from '../hooks/useRestaurant';
import RestaurantContext from "../Contexts/RestaurantContext"
import Cart from './Cart';
import Menu from './Menu';
import MenuGroup from './MenuGroup';

const RestaurantDetails = () => {

  // custom hook
  const restaurant = useRestaurant()

  // Intersection Observer API
  // FROM - https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  // https://beta.reactjs.org/reference/react/useMemo
  const [menuSelected, setMenuSelected] = useState(null)
  const { setSearch } = useContext(RestaurantContext)


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

    <div className='sticky top-0 bg-gray'>
      {/* Restaurant details with offer */}
      <div className="h-[200] bg-slate-900 sticky top-[0px] z-40">
        <span className='text-2xl align-middle text-center font-color-gray-200'>SOME BANNER</span>
      </div>
      {/* menu section */}
      <div className='mx-auto container'>
        {/* <div className='flex'> */}
        <div className='grid grid-cols-6 gap-0'>
          {/* side menu list section */}
          <div className="pt-10 col-span-1 sticky top-[200px]">
            {widgets.map((value, i) => <Menu {...value} key={i} />)}
          </div>
          {/* main menu group */}
          <div className="
          col-span-4
          row-span-2
          pt-10 pb-5 pl-8 pr-8
          border-l-[1px]
          border-black
        ">
            {
              Object.keys(menuArrGrp).map((menuArr, i) => {
                return (
                  <MenuGroup id={`menu-group-${i}`} key={i} {...{
                    meta,
                    menu: menuArrGrp[menuArr]
                  }} />
                )
              })
            }
          </div>
          {/* cart section */}
          <div className='col-span-1 sticky top-[200px]'>
            <Cart {...meta} />
          </div>
        </div >
      </div>
    </div>
  )
}

export default RestaurantDetails