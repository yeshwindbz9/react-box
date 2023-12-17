import { createSlice } from "@reduxjs/toolkit";

// create slice returns a slice object
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  // actions to interact with the store/modify the store, or mutate the store
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clear: (state) => {
      // state.items = [] wont work as it create a copy of the state variable
      // either mutate the existing state or return a new state
      state.items.length = 0;
      //   return { items: [] };
    },
  },
});

// create slice object looks like this
// {
//     actions:{
//         addItem,
//         removeItem,
//         clear
//     },
//     reducer
// }
export const { addItem, removeItem, clear } = cartSlice.actions;

export default cartSlice.reducer;
