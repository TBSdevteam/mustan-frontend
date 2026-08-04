import { emptySplitApi } from './emptySplitApi'

export const allApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        method: "POST",
        url: "/api/auth/login",
        body: {
          email,
          password,
        },
      }),
    }),

    getAllResponses:builder.query({
      query:()=>"/api/all-responses",
      providesTags:["ALL_RESPONSES"]
    }),

    addResponse: builder.mutation({
      query:({first_name,last_name,email,phone,message})=>({
        method:"POST",
        url:"/api/add-response",
        body:{
          first_name,
          last_name,
          email,
          phone,
          message
        }
      }),
      invalidatesTags:["ALL-RESPONSES"]
    })
  }),
});

export const {
  useLoginMutation,
  useGetAllResponsesQuery,
  useAddResponseMutation
} = allApi
