import { createSlice } from "@reduxjs/toolkit";

//  Use a core function `createSlice()` to create a slice
// `createSlice()` returns is an object which has `reducer` and `actions
const cartSlice = createSlice({
  name: "cart", //give it a name
  initialState: {
    items: {} // initial item: cart items
  },
  reducers: {
    addItem: (state, action) => {
      // Here addItem: (`state`, action) : state is the previous state
      // Here addItem: (state, `action`) : action.payload has the data
      // state.items.push(action.payload) // here we are directly modified the state

      if (state.items[action?.payload?.id]) {
        // 2nd time user is adding
        state.items[action?.payload?.id].orderCount += 1
      } else {
        // 1st time adding the item in the menu
        state.items[action?.payload?.id] = { ...action?.payload }
        state.items[action?.payload?.id].orderCount = 1
      }
      console.log("add Item called");
      // NOTE:
      // this function is not returning anything
      // this takes 'state' and directly modify that
    },
    clearCart: (state) => {
      state = {} // Direct modify the state to empty
    },
    removeItem: (state, action) => {
      console.log("remove Item called");
      const itemToBeRemoved = state.items[action?.payload?.id]
      if (itemToBeRemoved?.orderCount) {
        let { orderCount } = state.items[action?.payload?.id]

        if (orderCount) {
          state.items[action?.payload?.id].orderCount -= 1
          if (state.items[action?.payload?.id].orderCount === 0) delete state.items[action?.payload?.id]
        } else {
          // Nothing for now
        }
      }
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

