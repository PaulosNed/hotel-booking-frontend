import { Room } from "@/models/Room";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://a2sv-backend.onrender.com/api";

export const roomsApi = createApi({
  reducerPath: "roomsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllRooms: builder.query<Room[], void>({
      query: () => "/rooms",
    }),

    getSingleRoom: builder.query<Room, any>({
      query: (id) => `/rooms/${id}`,
    }),

  }),
});

export const { useGetAllRoomsQuery } = roomsApi;
