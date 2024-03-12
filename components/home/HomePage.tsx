"use client";

import Link from "next/link";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/autoplay";

const HomePage = () => {
  const bgImageUrl = "/images/home/backgroundHotel.jpg";
  const photos = [
    "/images/about/bar/bar_1.jpg",
    "/images/about/bar/bar_2.jpg",
    "/images/about/bar/bar_3.jpg",
  ];

  return (
    <>
      <div className="relative w-full md:h-screen">
        {/* Background Image Swiper */}
        <Swiper
          loop={true}
          spaceBetween={10}
          autoplay={{ delay: 5000 }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="absolute inset-0 z-0"
        >
          {photos.map((bgImageUrl, i) => (
            <SwiperSlide
              key={i}
            >
              <img src={bgImageUrl} alt="" className="w-full h-screen object-cover"/>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        {/* Text and Button */}
        <div className="absolute inset-0 z-20 flex flex-col space-y-24 md:space-y-16 justify-center items-center text-center text-white font-montserrat">
          <div>
            <p className="mt-2 text-3xl md:text-5xl uppercase">
              Nahusenay Hotel
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mt-8 md:mt-2 px-10">
              Your <span className="text-primary">Comfort</span> is our{" "}
              <span className="text-primary">Priority</span>
            </h1>
          </div>
          <Link className="btn" href={"/reservation"}>
            Book Now
          </Link>
        </div>
      </div>
      {/* Additional content */}
      <div className="my-16 md:my-24 w-11/12 md:w-1/2 mx-auto">
        <div className="flex flex-col space-y-10 md:space-y-16 items-center">
          <h1 className="font-bold font-montserrat text-4xl">Since 2023</h1>
          <img
            src={"/images/about/Vintage-Decorative-Divider.svg"}
            alt={"separator"}
            width={200}
            height={50}
          />
          <div className="text-slate-500">
            <p>
              Nahusenay international hotel is upscale Three star hotel located
              in addisu gebya sheger infront of CRRSA, Addis Ababa Ethiopia.
              This hotel meets the needs and wants of the customer to the higher
              level with high level hospitality. This modern and trendy star
              hotel in Addis Ababa is strategically & conveniently in close
              proximity to the City’s business area.
            </p>
            <p className="mt-8">
              Nahusenay international offers Restaurant and Bar, Spa Centre,
              Meeting and wedding hall accommodate up to 400 person. It also
              offers 46 standard guest rooms & suites with stem and Jacquie
              equipped shower rooms, Bathroom amenities, High speed internet
              Wi-Fi, and TV and 24-hour room dining services.
            </p>
          </div>
          <h1 className="font-bold font-montserrat">Number Facts</h1>
          <div className="flex md:justify-between md:w-3/4 flex-wrap gap-8">
            <div className="flex flex-col items-center">
              <h1 className="text-2xl md:text-4xl font-bold ">300+</h1>
              <p className="text-slate-500 text-xs">Clients</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-2xl md:text-4xl font-bold ">46</h1>
              <p className="text-slate-500 text-xs">Rooms</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-2xl md:text-4xl font-bold ">50+</h1>
              <p className="text-slate-500 text-xs">Staffs</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-2xl md:text-4xl font-bold ">2</h1>
              <p className="text-slate-500 text-xs">Awards</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
