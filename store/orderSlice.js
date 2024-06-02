import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedAddress: 0,
  paymentMethod: {},
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setSelectedAddress: (state, { payload }) => {
      state.selectedAddress = payload;
    },
    setPaymentMethod: (state, { payload }) => {
      state.selectedAddress = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedAddress, setPaymentMethod } = orderSlice.actions;

export default orderSlice.reducer;
