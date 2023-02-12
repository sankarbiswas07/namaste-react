import { createSlice } from "@reduxjs/toolkit";

//  Use a core function `createSlice()` to create a slice
// `createSlice()` returns is an object which has `reducer` and `actions
const cartSlice = createSlice({
  name: "cart", //give it a name
  initialState: {
    items: ["A", "B"] // initial item: cart items
  },
  reducers: {
    addItem: (state, action) => {
      // Here addItem: (`state`, action) : state is the previous state
      // Here addItem: (state, `action`) : action is ?
      state.items.push(action.payload) // here we are directly modified the state

      // NOTE:
      // this function is not returning anything
      // this takes 'state' and directly modify that
    },
    clearCart: (state) => {
      state = [] // Direct modify the state to empty
    },
    removeItem: (state, action) => {
      state.items.pop()
    }
  }
})

/**
 *   EXPORT :
 *    - Actions: All the actions for dispatch functionality frm component
 *    - Reducer: return a single object which includes the reducers
 */

// export actions which will be called when you dispatch an action from a component
export const { addItem, removeItem, clearCart } = cartSlice.actions

// cartSlice.reducer : It will combine all the reducers and export as a singular form 'reducer' not reducers
export default cartSlice.reducer

