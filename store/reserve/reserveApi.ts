
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = process.env.NEXT_PUBLIC_ENDPOINT || "http://127.0.0.1:8000";

export const reserveApi = createApi({
  reducerPath: "reserveApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    
    bookRoom: builder.mutation<any, any>({
        query: (data) => ({
          url: `/booking/book/`,
          method: 'POST',
          body: data,
        })
      }),

  }),
});

export const { useBookRoomMutation } = reserveApi;
