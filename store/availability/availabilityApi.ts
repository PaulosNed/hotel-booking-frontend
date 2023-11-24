import { Room } from "@/models/Room";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://a2sv-backend.onrender.com/api";

export const availabilityApi = createApi({
  reducerPath: "availabilityApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAvialableRooms: builder.query<Room[], any>({
      query: (data) => ({
        url: "/avialable-rooms",
        params:{
            check_in: data.start_date,
            check_out: data.end_date,
            capacity: data.capacity
        }
    }),
    }),

  }),
});

export const { useGetAvialableRoomsQuery } = availabilityApi;
