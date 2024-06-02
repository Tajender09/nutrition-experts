import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  currentProduct: "",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
    setCurrentProduct: (state, { payload }) => {
      state.currentProduct = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProducts, setCurrentProduct } = productSlice.actions;

export default productSlice.reducer;
