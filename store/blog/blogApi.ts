import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Blog } from "@/models/Blog";

const BASE_URL = process.env.NEXT_PUBLIC_ENDPOINT || "http://127.0.0.1:8000";

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    // prepareHeaders: (headers, { getState }) => {
    //   const userData = localStorage.getItem('user')
    //   const token = userData ? JSON.parse(userData)?.token : null
    //   if(token) {
    //     headers.set('Authorization', `Bearer ${token}`)
    //   }
    //   return headers
    // }
  }),
  endpoints: (builder) => ({
    getBlogs: builder.query<Blog[], void>({
      query: () => "/posts/blog/",
    }),
    getSingleBlog: builder.query<Blog, any>({
      query: (id) => `/posts/blog/${id}/`,
    }),
  }),
});

export const { useGetBlogsQuery, useGetSingleBlogQuery } = blogApi;
