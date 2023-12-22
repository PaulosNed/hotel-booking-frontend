/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { useGetSingleRoomQuery } from "@/store/rooms/roomsApi";
import { useParams } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Page = () => {
  const { id, room_id, start_date, end_date } = useParams();
  const { data: room, isLoading, isError, error } = useGetSingleRoomQuery(id);

  const services = room?.services?.split(" ");
  const photos = [
    room?.image1,
    room?.image2,
    room?.image3,
    room?.image4,
    room?.image5,
    room?.image5,
    // room?.image6,
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const getDaysDifference = (startDateString, endDateString) => {
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);

    // Set hours, minutes, seconds, and milliseconds to 0 for both dates
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);

    // Calculate the difference in milliseconds
    const differenceInMs = endDate.getTime() - startDate.getTime();

    // Convert milliseconds to days (1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

    return Math.abs(differenceInDays); // Return absolute value to handle negative differences
  };

  const days = getDaysDifference(start_date, end_date);

  return (
    <div className="w-full md:w-8/12 mx-auto px-3 md:px-10 md:pb-20">
      <div className="flex flex-col space-y-10 md:space-y-16">
        <div className="w-full">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {photos?.map((image, i) => (
              <SwiperSlide key={i}>
                <div className="w-full">
                  <img
                    src={image}
                    alt="Slide"
                    className="rounded-xl w-full h-[200px] md:h-[500px] object-cover mx-auto"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full z-40 transition-all duration-300">
                  <div className="flex flex-col w-full h-full justify-end py-2 md:py-4 px-4 md:px-8 gap-4">
                    <h1 className="text-xl md:text-3xl text-white font-semibold">
                      {room?.name}
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnail */}
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={12}
            slidesPerView={6}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="thumbs mt-3 h-10 md:h-24 w-full rounded-lg"
          >
            {photos.map((image, index) => (
              <SwiperSlide key={index}>
                <button className="flex h-full w-full items-center justify-center">
                  <img
                    src={image}
                    alt="thumbnail"
                    className="block h-full w-full object-cover"
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-col items-center space-y-6 md:space-y-10">
          <h1 className="text-xl md:text-4xl font-bold font-montserrat">
            Description
          </h1>
          <p className="text-sm font-poppins text-slate-500">
            {room?.description}
          </p>
        </div>
        <div className="flex flex-col items-center space-y-6 md:space-y-10">
          <h1 className="text-xl md:text-4xl font-bold font-montserrat">
            Services Provided
          </h1>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 place-items-start gap-2">
            <div className="flex space-x-2">
              <Image
                src={"/images/rooms/green-check.svg"}
                alt={""}
                width={4}
                height={4}
                className="w-4 h-4 object-cover"
              />
              <p className="text-sm text-slate-500">
                {room?.capacity.toString()} Passangers
              </p>
            </div>
            <div className="flex space-x-2">
              <Image
                src={"/images/rooms/green-check.svg"}
                alt={""}
                width={4}
                height={4}
                className="w-4 h-4 object-cover"
              />
              <p className="text-sm text-slate-500">
                {room?.bedNumber.toString()} Bedrooms
              </p>
            </div>
            {services?.map((tag) => (
              <div key={tag} className="flex space-x-2">
                <Image
                  src={"/images/rooms/green-check.svg"}
                  alt={""}
                  width={4}
                  height={4}
                  className="w-4 h-4 object-cover"
                />
                <p className="text-sm text-slate-500">{tag}</p>
              </div>
            ))}
          </div>
        </div>
        <Link
          href={`/reserve/${room_id}/${start_date}/${end_date}`}
          className="self-center text-white bg-primary px-8 py-3 rounded-full outline outline-2 outline-primary hover:bg-white hover:text-primary hover:shadow-inner transition ease-out duration-200 w-fit"
        >
          Book Now for ${(room?.price * days).toString()}
        </Link>
      </div>
    </div>
  );
};

export default Page;
