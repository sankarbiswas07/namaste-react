import { useState } from 'react';
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

  // console.log(restaurant)

  // initial render > wait for useEffect, run shimmer 
  if (!restaurant) {
    // console.log("useRestaurant is under process")
    return (
      <h3>Hi, I will be shimmer soon !!!</h3>
    )
  }

  // re-render when state:restaurant dat changed by API call, it's trigger an re-render
  // initial render > Api call > re-render, restaurant has data now
  // re-conciliation happen, shimmer changed to the next `return (DOM)`
  const { menu: { items: menuItems, widgets }, ...meta } = restaurant

  // group as per category
  /**
   * - data: {} : will hold the actual grouping, so i can fetch at once.
   * - sequence: [] : As object does not maintain sequence.
   *                : Simple Object.keys(menuArrGrp.data).map() won't maintain the sequenceD
   *                : this will help to enable the scroll feature
   * 
   *            
   */

  const menuArrGrp = { data: {}, sequence: [] }
  // const menuArr = Object.values(menuItems)
  widgets.map((value, i) => menuArrGrp.sequence.push(value.name))

  Object.values(menuItems).forEach(item => {
    if (menuArrGrp.data[item.category]) {
      // 2nd time user is adding
      menuArrGrp.data[item.category].push(item)
    } else {
      // 1st time adding the item in the menu
      menuArrGrp.data[item.category] = [item]
    }
  })

  // console.log(Object.values(menuItems).pop())
  // console.log(Object.keys(menuArrGrp.data))
  // console.log(menuArrGrp.data)


  return (

    <div className='sticky top-0 bg-gray'>
      {/* Restaurant details with offer */}
      <div className="h-[200] bg-slate-900 sticky top-[0px] z-40">
        <span className='text-2xl align-middle text-center font-color-gray-200'>SOME BANNER</span>
      </div>
      {/* menu section */}
      <div className='mx-auto container'>

        <RestaurantContext.Provider value={{ menuSelected, setMenuSelected }}>
          <div className='grid grid-cols-6 gap-0'>
            {/* side menu list section */}
            <div className="pt-10 col-span-1 sticky top-[200px]">
              {/* widgets are the actual sequence which swiggy shows */}
              {widgets.map((value, i) => <Menu {...value} key={i} />)}
            </div>
            {/* main menu group */}
            <div className="col-span-4
              row-span-2
              pt-10 pb-5 pl-8 pr-8
              border-l-[1px]
            border-black"
            >

              {/*have to re arrange the list according to the menu - widget*/}
              {
                menuArrGrp.sequence.map((itemsInMenu, i) => {
                  console.log(`${i} =============> ${itemsInMenu}`)
                  return menuArrGrp.data[itemsInMenu] && (
                    <MenuGroup id={`menu-group-${i}`} key={i} {...{
                      meta,
                      menu: menuArrGrp.data[itemsInMenu]
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
        </RestaurantContext.Provider>
      </div>
    </div>
  )
}

export default RestaurantDetails