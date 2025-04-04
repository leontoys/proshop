import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import cartSliceReducer from "./slices/cartSlice";//look Redux Dev Tools slice
import authSliceReducer from "./slices/authSlice";

//the store will be used in index.js to wrap around App
const store = configureStore({
    reducer : {
        //RTK generated reducer
        [apiSlice.reducerPath] : apiSlice.reducer,
        cart : cartSliceReducer,
        auth : authSliceReducer
    },
    //RTK specific middleware - add custom
    middleware : (getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),
    devTools : true
}
)

export default store