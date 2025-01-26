import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// mendefinisikan service api
export const api = createApi({
    // nama reducer
    reducerPath: 'api',
    // base url untuk semua request
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://mam-api-6e353e4d80e7.herokuapp.com',
    }),
    endpoints: (builder) => ({
        // endpoint untuk mengambil seluruh data users
        getUsers : builder.query({
            query: ({ name } = {}) => {
                if(name) 
                    return `/users?name=${name}`;
                
                return '/users';
            }
        })
    })
})

export const { useGetUsersQuery } = api;