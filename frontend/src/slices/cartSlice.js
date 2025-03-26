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
            console.log("payload",action.payload)
            //the item to add to cart will be in the payload
            const item = action.payload
            //check if this item already exists in the cart
            const existingItem = state.cartItems.find((x)=>x._id === item._id)
            console.log("existing",existingItem)
            //if it exists, update quantity
            if(existingItem){
                state.cartItems = state.cartItems.map(
                    (x)=> x._id === existingItem._id ? item : x )//so will this have update quantity?
            }
            //if its not existing, add to car
            else{
                state.cartItems = [...state.cartItems,item]//add it
            }
            console.log("state before calling update",state)
            //use utitlity
            updateCart(state)

        },
        removeFromCart : (state,action) => {
            const id = action.payload
            //find the item from the state
            state.cartItems = state.cartItems.filter((x)=>x._id !== id)

            return updateCart(state)
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions

export default cartSlice.reducer

 



