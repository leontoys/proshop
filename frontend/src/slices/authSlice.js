//product slice interacts with backend so we used api
//here its only state - so we create slice
import { createSlice  } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = localStorage.getItem('userInfo')
                        ? JSON.parse(localStorage.getItem('userInfo'))
                        : null//creates a state variable



const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        setCredentials : (state,action) => {
            console.log("set credentials - payload",action.payload)
            state.userInfo = action.payload
            localStorage.setItem('userInfo',JSON.stringify(state.userInfo))
        },
        logout : (state,action) => {
            console.log("logout")
            state.userInfo = null
            localStorage.removeItem('userInfo')
        }
    }
})

export const {setCredentials,logout} = authSlice.actions

export default authSlice.reducer

 



