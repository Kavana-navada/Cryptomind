import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cryptoApiHeaders={
    'x-rapidapi-key': '4287b92c70msh1f3b46e10a129f8p1fa9aejsnfacd7a2302d4',
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'

}

const baseUrl="https://coinranking1.p.rapidapi.com"

const createRequest=(url)=>({
    url,headers:cryptoApiHeaders
})
export const cryptoApi=createApi({
    reducerPath:"cryptoApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:()=>createRequest("/coins")
        })
    })
})

export const {
    useGetCryptosQuery,
}=cryptoApi;