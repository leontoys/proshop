import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

//fetch url
const baseQuery = fetchBaseQuery({baseUrl:BASE_URL})

//this is a service which queries url
//and with endpoints - this will be used in store
//RTK creates reducers for this
export const apiSlice = createApi({
    baseQuery,//fetch
    tagTypes : ['Product','Order','User'],//for caching
    endpoints : (builder)=>({})
})