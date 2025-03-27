import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const userSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        login : builder.mutation({ //this will be called in home screen
            query : (data)=>({
                url : `${USERS_URL}/auth`,
                body : data,
                method : 'POST'
            }),
        }),
    })
})

//RTK generates the query - This will replace axios or fetch
export const { useLoginMutation } = userSlice
