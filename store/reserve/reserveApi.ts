import { Room } from "@/models/Room";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://a2sv-backend.onrender.com/api";

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

    getSingleRoom: builder.query<Room, any>({
      query: (id) => `/rooms/${id}`,
    }),

  }),
});

export const { useBookRoomMutation } = reserveApi;
