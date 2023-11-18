import { createSlice } from "@reduxjs/toolkit";

const initialCartVisibleState = { isVisible: false };

const cartVisibleSlice = createSlice({
  name: "cartVisible",
  initialState: initialCartVisibleState,
  reducers: {
    visible(state) {
      state.isVisible = !state.isVisible;
    },
  },
});


export const cartActions=cartVisibleSlice.actions;
export default cartVisibleSlice.reducer;

