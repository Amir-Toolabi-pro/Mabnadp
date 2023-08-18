import { configureStore } from "@reduxjs/toolkit";

import humberReducer from "./humberSlice"

export const Store = configureStore({
  reducer:{
    humberReducer
  }
})