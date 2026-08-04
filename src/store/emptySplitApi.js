import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const emptySplitApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5005/",
    prepareHeaders: (headers, { getState }) => {
      headers.set('accept', 'application/json')
      try {
        const { token } = getState().reducer.user
        console.log('getState', getState)
        // const token = window.localStorage.getItem('accessToken')
        if (token) {
          headers.set('authorization', `Bearer ${token}`)
        } else {
          headers.set('authorization', '')
        }
      } catch (err) {
        headers.set('authorization', '')
      }

      return headers
    }
  }),
  endpoints: () => ({}),
  tagTypes: ["ALL_RESPONSES"]
})
