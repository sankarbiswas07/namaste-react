import { configureStore } from "@reduxjs/toolkit";
// All the reducers, I will put it in the store : default export
import cartSlice from "./cartSlice";


const store = configureStore({
  reducer: {
    cart: cartSlice
  }
})

export default store

/**
 * 
 * Remember :
 *    -  update cycle : When you click a button, it will `dispatch` an `action` which has a `reducer` function which will "update" a `slice` of a `redux store`
 *    -  fetch cycle : 
 * 
 * =============================
 *  Work Flow Setup
 * =============================
 * Create Store
 *  - configureStore() - RTK | npm i @reduxjs/toolkit : Managing redux core and it's slices and everything core to redux
 *
 * Provide my store to app
 *  - <Provider store = {store}> | npm i react-redux : Bridge between react and redux
 *
 * Slice
 *  - RTK - createSlice({
 *          name: "",
 * 
 *          initialState:
 * 
 *          // reducers: will have an mapping with action, what action will call what reducer function
 *          reducers: {
 *              // Here the key `addItem` is the action && value `()=>{}`, a reducer function
 *              // (`state`, action) : `state` is the initial state
 *             addItem: (state, action)=> { state= action.payload}
 *          }
 *      })
 * 
 * 
 *    export const {addItem, removeItem} = cartSlice.actions;
 *    export default cartSlice.reducer;
 *
 * Put that Slice into Store
 *      - {
 *        reducer: {
 *             cart: cartSlice,
 *             user: userSlice
 *         }
 * }
 *
 * */