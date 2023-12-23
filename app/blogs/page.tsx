"use client";

import BlogItem from "@/components/blogs/BlogItem";
import { useGetBlogsQuery } from "@/store/blog/blogApi";
import { Blog } from "@/models/Blog";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loading from "../loading";

const Page = () => {
  const { data: blogs, isLoading, isError, error } = useGetBlogsQuery();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[] | undefined>([]);

  useEffect(() => {
    const newFilteredBlogs: Blog[] | undefined = blogs?.filter((blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBlogs(newFilteredBlogs);
  }, [searchQuery, blogs]);

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="md:w-10/12 mx-auto">
      {isError && (
        <div className="text-center font-bold text-xl">
          {(error as Error).message}
        </div>
      )}
      {!isLoading && !isError && (
        <div className="pb-10 font-montserrat">
          {/* Search section and header */}
          <div className="px-20 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-96">
            {/* <h1 className="font-semibold text-xl">Blogs</h1> */}
            <div className="w-full flex justify-center">
              <input
                type="text"
                placeholder="Search here...."
                className="w-full mx-10 md:w-1/2 px-6 rounded-full py-2 outline outline-1 outline-gray-300 font-montserrat placeholder:text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {/* <button className="btn-light bg-blue-800 text-white">
                <div>Search</div>
              </button> */}
            </div>
          </div>

          {/* Blogs section */}
          <div className="md:w-10/12 mx-auto py-10 pt-20">
            <div className="w-full flex flex-col space-y-10">
              {filteredBlogs?.length == 0 && (
                <div className="text-center font-bold text-xl">
                  No Blogs found
                </div>
              )}
              {filteredBlogs?.map((blog: Blog) => (
                <BlogItem
                  key={blog.id}
                  id={blog.id}
                  image={blog.image}
                  title={blog.title}
                  body={blog.body}
                  date={blog.date}
                />
              ))}
            </div>
          </div>

          {/* pagination */}
          {/* <div className="w-full flex justify-center space-x-5 mt-4">
            <div className="page bg-blue-800 text-white">1</div>
            <div className="page bg-gray-200">2</div>
            <div className="page bg-gray-200">3</div>
            <div className="page bg-gray-200">4</div>
            <div className="page bg-gray-200">5</div>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Page;
