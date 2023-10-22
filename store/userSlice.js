import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserData: (state, { payload }) => {
      state.userData = payload;
    },
    clearUserData: (state) => {
      state.userData = {};
    },
    addSavedAddress: (state, { payload }) => {
      state.userData.savedAddresses = payload;
    },
    addToWishlist: (state, { payload }) => {
      state.userData.wishlist = payload;
    },
    removeFromWishlist: (state, { payload }) => {
      state.userData.wishlist = payload;
    },
    addToCart: (state, { payload }) => {
      state.userData.cartItems = payload.cartItems;
      state.userData.cartProducts = payload.cartProducts;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addUserData,
  clearUserData,
  addSavedAddress,
  addToWishlist,
  removeFromWishlist,
  addToCart,
} = userSlice.actions;

export default userSlice.reducer;
