import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import orderSlice from "./orderSlice";
import productSlice from "./productSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  userSlice,
  orderSlice,
  productSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
