//product slice interacts with backend so we used api
//here its only state - so we create slice
import { createSlice  } from "@reduxjs/toolkit";

const initialState = {cartItems:[]}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addToCart : () => {}
    }
})

export default cartSlice.reducer

 



