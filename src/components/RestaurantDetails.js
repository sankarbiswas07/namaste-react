import { useState } from 'react';
import { IMG_CDN_URL } from '../constants';
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
  console.log(restaurant)
  const {
    menu: { items: menuItems, widgets },
    cloudinaryImageId,
    name,
    ...meta
  } = restaurant
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
      <div className="h-[250] bg-slate-800 sticky top-[0px] z-40 flex items-center">
        <div className="mx-auto container justify-center items-center">
          <div className='grid grid-cols-4 gap-0'>
            <div className="col-span-1 flex justify-end">
              <div className="w-[292] min-h-[150px] bg-gray-100 ">
                <img className="" src={IMG_CDN_URL + cloudinaryImageId} />
              </div>
            </div>
            <div className="col-span-2
              row-span-2
              pl-8
              text-gray-300
            border-black"
            >
              <span className='text-3xl block text-gray-100'>{name}</span>

              <div className='mt-3'>
                <span className='text-md'>Opens {meta?.availability?.opened ? "till" : "at"} {meta?.availability?.nextCloseTime}</span>
                <span className='text-md ml-5'>{(meta?.cuisines)?.join(", ")}</span>
              </div>

              <div className='mt-3'>
                <span className='text-md'>{meta?.locality}</span>
                <span className='text-md'>,&nbsp;{meta?.area}</span>
              </div>

              <div className='mt-3 flex w-1/2 justify-between'>
                <div className='py-4 pr-6 border-r-[1px] border-gray-[200]'>
                  <span className=''>{meta?.avgRatingString}</span>
                  <p className='text-sm text-gray-300'>{meta?.totalRatingsString}</p>
                </div>
                <div className='p-4'>
                  <span> * 4.0</span>
                  <p className='text-sm text-gray-300'>1K+ rating</p>
                </div>
                <div className='py-4 pl-6 border-l-[1px] border-gray-[200]'>
                  <span> * 4.0</span>
                  <p className='text-sm text-gray-300'>1K+ rating</p>
                </div>
              </div>
            </div>
            <div className='col-span-1'>
              <div className=' bg-slate-800'>
                <div className='flex flex-col p-5 text-sm text-gray-300 border-2 border-gray-300 relative'>
                  <div className='absolute -top-7 -left-5 bg-slate-800 px-3 py-3'>
                    <span className='text-xl font-extrabold text-gray-100'>OFFER</span>
                  </div>
                  {
                    meta?.aggregatedDiscountInfo?.descriptionList.map(e => {
                      return (
                        <div className='mt-3'>
                          <span className=''>{e?.meta}</span>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* menu section */}
      <div className='mx-auto container'>

        <RestaurantContext.Provider value={{ menuSelected, setMenuSelected }}>
          <div className='grid grid-cols-4 gap-0'>
            {/* side menu list section */}
            <div className="pt-10 col-span-1 sticky top-[200px]">
              {/* widgets are the actual sequence which swiggy shows */}
              {widgets.map((value, i) => <Menu {...value} key={i} />)}
            </div>
            {/* main menu group */}
            <div className="col-span-2
              row-span-2
              pt-10 pb-5 pl-8 pr-8
              border-l-[1px]
            border-black"
            >

              {/*have to re arrange the list according to the menu - widget*/}
              {
                menuArrGrp.sequence.map((itemsInMenu, i) => {
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