
import { Room } from "@/models/Room";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://127.0.0.1:8000";

export const roomsApi = createApi({
  reducerPath: "roomsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllRooms: builder.query<any, void>({
      query: () => "/rooms/roomprofile/",
    }),

    getSingleRoom: builder.query<Room, any>({
      query: (id) => `/rooms/roomprofile/${id}`,
    }),

  }),
});

export const { useGetAllRoomsQuery, useGetSingleRoomQuery } = roomsApi;
