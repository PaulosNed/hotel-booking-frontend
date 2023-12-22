/* eslint-disable @next/next/no-img-element */
import { Blog } from "@/models/Blog";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
import Link from "next/link";
import { Author } from "@/models/Author";
import AuthorInfo from "./AuthorInfo";

const BlogItem: React.FC<Blog> = ({ id, image, title, body, date }) => {
  const reducedDescription =
    body.length > 200 ? `${body.substring(0, 200)}...` : body;

    const author: Author = {
        name: 'Nahusenay Hotel',
        role: 'Hotel Management Team',
        email: 'nahusenayHotel@gmail.com',
        image: '/images/blogs/Default_pfp.svg'
    }

  return (
    <div className="w-full p-4 border-t-2">
      {/* horizontal line */}
      <div className="mx-2 mb-10 rounded-full bg-black h-0.05"></div>

      <div className="w-full flex items-center space-x-16">
        <div className="w-3/4 flex flex-col space-y-6 mb-10">
          {/* Author info */}
          <AuthorInfo author={author} date={date} />

          {/* Blog content */}
          <div>
            <h1 className="font-bold text-xl">{title}</h1>
            <p className="mt-4  font-light">
              {parse(reducedDescription)}
              <Link
                href={`/blogs/${id}`}
                className="text-blue-500 hover:text-blue-800 hover:underline inline ml-3"
              >
                Read more
              </Link>
            </p>
          </div>

          {/* tags */}
          {/* <div className="mt-2">
            <div className="flex flex-wrap gap-4">
              {tags?.map((tag: string) => (
                <div className="blog-tag bg-gray-200 text-gray-600">{tag}</div>
              ))}
            </div>
          </div> */}
        </div>

        <img
          src={image ? image : "./images/blogs/coder.svg"}
          alt={""}
          className="-mt-6 w-64 h-44 object-cover rounded-lg justify-self-end"
        />
      </div>
    </div>
  );
};

export default BlogItem;
