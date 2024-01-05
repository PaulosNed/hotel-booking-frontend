
import { Room } from "@/models/Room";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = process.env.NEXT_PUBLIC_ENDPOINT || "http://127.0.0.1:8000";

export const availabilityApi = createApi({
  reducerPath: "availabilityApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAvialableRooms: builder.query<Room[], any>({
      query: (data) => ({
        url: `/booking/available/${data.start_date}/${data.end_date}`
    }),
    }),

  }),
});

export const { useGetAvialableRoomsQuery } = availabilityApi;
