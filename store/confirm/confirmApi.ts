
import { Room } from "@/models/Room";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://127.0.0.1:8000";

export const confirmApi = createApi({
  reducerPath: "confirmApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({

    getconfirmation: builder.query<any, any>({
      query: (ref) => `/booking/check_payment/${ref}`,
    }),

  }),
});

export const { useGetconfirmationQuery } = confirmApi;
