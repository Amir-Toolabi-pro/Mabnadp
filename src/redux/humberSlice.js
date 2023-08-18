import { createSlice } from "@reduxjs/toolkit";



export const humberSlice = createSlice({
  name:"humber",
  initialState:{
    value: false
  },
  reducers:{
    openMenu: (state)=>{state.value = !state.value},
  }
})

export const {openMenu , closeMenu} = humberSlice.actions
export default humberSlice.reducer