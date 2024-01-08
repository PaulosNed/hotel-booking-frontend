/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import parse from "html-react-parser";
import { useGetSingleBlogQuery } from "@/store/blog/blogApi";
import Loading from "@/app/loading";
import { Author } from "@/models/Author";

const Page = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    isError,
    error,
  } = useGetSingleBlogQuery(id);

  const author: Author = {
    name: 'Nahusenay Hotel',
    role: 'Management Team',
    email: 'nahusenayHotel@gmail.com',
    image: '/images/blogs/Default_pfp.svg'
}
  
  return isLoading ? (
    <Loading />
  ) : isError ? (
    <div className="text-center font-bold font-montserrat text-xl">
      {(error as any).data
        ? (error as any).data?.error
        : "An Error Occurred while loading the data"}
    </div>
  ) : (
    <div className="pb-20 font-montserrat">
      <div className="text-center text-4xl font-canon">{blog?.title}</div>
      <div className="flex justify-center mt-2 md:mt-4 space-x-4 text-gray-500 uppercase text-xs">
        <div>{blog?.date}</div>
        {/* <div className="w-0.5 my-0.5 bg-gray-400"></div>
        <p>6 min Read</p> */}
      </div>
      <img
        src={blog ? blog.image.substring(0, 39) + '/backend' + blog.image.substring(39) : "./images/blogs/coder.svg"}
        alt={"Blog's Main image"}
        className="md:w-2/3 mt-10 md:mt-16 md:mb-12 mx-auto h-[400px] md:rounded-xl object-cover"
      />
      <div className="mt-10 md:mt-0 flex flex-col items-center space-y-2">
        <Image
          src={
            author?.image || '../images/blogs/Default_pfp.svg'
          }
          alt={"Author's profile picture"}
          width={100}
          height={100}
          className="w-12 h-12 object-cover rounded-full"
        />
        <div className="pl-2 flex justify-center mt-4 space-x-4 text-gray-500 uppercase text-xs font-medium">
          <p>{author?.name || 'anonymus'}</p>
          <div className="w-0.5 my-0.5 bg-gray-400"></div>
          <p>{author?.role || 'anonymus'}</p>
        </div>
        <p className="-mt-2 text-xs text-blue-700 uppercase font-medium">
          {/* @{author?.name || 'anonymus'} */}
        </p>
      </div>

      <div className="mt-10 px-5 md:px-0 md:w-7/12 mx-auto font-light">
        {parse(blog?.body as string)}
      </div>

      {/* <div
        className={`${
          blog?.relatedBlogs.length === 0 ? "hidden" : "block"
        } w-3/4 mx-auto`}
      >
        <h1 className="text-xl font-bold">Related Blogs</h1>
        <div className="mt-6 grid grid-cols-3 gap-x-8 gap-y-4">
          </div>
      </div> */}
    </div>
  );
};

export default Page;
