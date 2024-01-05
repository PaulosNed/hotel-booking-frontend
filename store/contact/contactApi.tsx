
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = process.env.NEXT_PUBLIC_ENDPOINT || "http://127.0.0.1:8000";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    
    contact: builder.mutation<any, any>({
        query: (data) => ({
          url: `/contact/postfeedback/`,
          method: 'POST',
          body: data,
        })
      }),

  }),
});

export const { useContactMutation } = contactApi;
