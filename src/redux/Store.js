import { configureStore } from "@reduxjs/toolkit";

import humberReducer from "./humberSlice"
import accordionsReducer from "./Accordions"

export const Store = configureStore({
  reducer:{
    humberReducer,
    accordionsReducer,
  }
})