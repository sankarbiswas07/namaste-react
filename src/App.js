import React, { useState } from "react";
import ReactDom from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from './components/About';
import Contact from "./components/Contact";
import RestaurantDetails from './components/RestaurantDetails';
import SearchContext from './Contexts/SearchContext';
import { Provider } from "react-redux";
import store from './utils/store';


const AppLayout = () => {

  // it will modify with my useEffect()
  // context default value overRide here with xx
  const [search, setSearch] = useState("")

  return (
    // for documentation : go to utils/store/index
    <Provider store={store}>
      <SearchContext.Provider
        value={{ search, setSearch }}>
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </SearchContext.Provider>
      <Footer />
    </Provider>
  )
}

const AppRouter = createBrowserRouter([{
  path: "/",
  element: <AppLayout />,
  children: [{
    path: "/",
    element: <Body />
  }, {
    path: "/about",
    element: <About />
  }, {
    path: "/contact",
    element: <Contact />
  }, {
    path: "/restaurant/:id",
    element: <RestaurantDetails />
  }]
}])

/** 
 * DOM TREE - 
 * 
 * 1. A AppLayout.
 *    1.1 Header
 *    1.2 Body
 *        1.2.1 RestaurantCard
 *    1.3 Footer
 * 
 *
 * 
 * **/

const root = ReactDom.createRoot(document.getElementById("root"))
// root.render(<AppLayout />)
root.render(<RouterProvider router={AppRouter} />)