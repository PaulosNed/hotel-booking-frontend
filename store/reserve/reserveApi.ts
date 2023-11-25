
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://127.0.0.1:8000";

export const reserveApi = createApi({
  reducerPath: "reserveApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    
    bookRoom: builder.mutation<any, any>({
        query: (data) => ({
          url: `/reserve/${data.room_id}`,
          method: 'POST',
          body: data,
        })
      }),

  }),
});

export const { useBookRoomMutation } = reserveApi;
