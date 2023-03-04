import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from  '../redux/featueres/navbar/navbarSlice'
export const store = configureStore({
 reducer:{
  navbar: navbarReducer

 }
})