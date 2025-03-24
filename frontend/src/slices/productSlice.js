import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getProducts : builder.query({
            query : ()=>({
                url : PRODUCTS_URL
            }),
            keepUnusedDataFor : 5 //caching
        })
    })
})

//RTK generates the query - This will replace axios or fetch
export const { useGetProductsQuery } = productSlice
