import { createSlice } from "@reduxjs/toolkit";

// Use a core function `createSlice()` to create a slice
const cartSlice = createSlice({
  name: "cart", //give it a name
  initialState: {
    items: ["A", "B"] // initial item: cart items
  },
  reducers: {
    addItem: (state, action) => {
      // Here addItem: (`state`, action) : state is the previous state
      // Here addItem: (state, `action`) : action is the previous state
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
 *    - Actions:
 *    - Reducer: 
 */

// export actions which will be called when you dispatch an action from a component
export const { addItem, removeItem, clearCart } = cartSlice.actions

// cartSlice.reducer : It will combine all the reducers and export as a singular form 'reducer' not reducers
export default cartSlice.reducer

