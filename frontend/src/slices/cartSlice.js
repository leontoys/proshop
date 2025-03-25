//product slice interacts with backend so we used api
//here its only state - so we create slice
import { createSlice  } from "@reduxjs/toolkit";
import { updateCart } from '../utils/cartUtils.js'

const initialState = localStorage.getItem('cart')
                        ? JSON.parse(localStorage.getItem('cart'))
                        : {cartItems:[]}//creates a state variable



const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addToCart : (state,action) => {
            //the item to add to cart will be in the payload
            const item = action.payload
            //use utitlity
            updateCart(item,state)

        }
    }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer

 



