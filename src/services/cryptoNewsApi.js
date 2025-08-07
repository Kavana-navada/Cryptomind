import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders={
    
		'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
		'x-rapidapi-host': 'crypto-news51.p.rapidapi.com',
		
	
}

const baseUrl="https://crypto-news51.p.rapidapi.com"
const createRequest=(url)=>({
    url,headers:cryptoNewsHeaders
})
export const cryptoNewsApi=createApi({
    reducerPath:"cryptoNewsApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query: ({ newsCategory, count }) => createRequest(`/api/v1/crypto/articles/search?title_keywords=${newsCategory}&page=1&limit=${count}&time_frame=24h&format=json`),


        })
        
    })
    
})
export const {useGetCryptoNewsQuery}=cryptoNewsApi