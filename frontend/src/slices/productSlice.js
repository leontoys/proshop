import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getProducts : builder.query({ //this will be called in home screen
            query : ()=>({
                url : PRODUCTS_URL
            }),
            keepUnusedDataFor : 5 //caching
        }),
        getProductDetails : builder.query({ //this will be called in product screen
            query : (id)=>({
                url : `${PRODUCTS_URL}/${id}`
            }),
            keepUnusedDataFor : 5
        })
    })
})

//RTK generates the query - This will replace axios or fetch
export const { useGetProductsQuery, useGetProductDetailsQuery } = productSlice
