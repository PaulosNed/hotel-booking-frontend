"use client";


import Image from "next/image";
import Link from "next/link";
import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetSingleRoomQuery } from "@/store/rooms/roomsApi";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";

// interface ArrowProps {
//   onClick: () => void;
// }

// const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
//   <button onClick={onClick} className="next-arrow">
//     Next
//   </button>
// );

// const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
//   <button onClick={onClick} className="prev-arrow">
//     Previous
//   </button>
// );

const Page = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

//   const router = useRouter()
  const { id, room_id, start_date, end_date } = useParams()
  const { data: room, isLoading, isError, error } = useGetSingleRoomQuery(id);

  const services = room?.services?.split(" ")
  const photos: string[] = [room?.image as string, room?.image as string, room?.image as string]

  return (
    <div className="md:w-8/12 mx-auto px-10 md:pb-20">
      <div className="flex flex-col space-y-10 md:space-y-16">
        <div className="w-full relative">
          <Slider {...settings}>
            {photos?.map((image: string) => (
              <div key={image} className="relative">
                <div className="slider-content">
                  <Image
                    src={image}
                    alt="Slide"
                    className="rounded-xl h-[500px] w-full mx-auto"
                    width={400}
                    height={100}
                  />
                  <div className="absolute bottom-0 left-0 w-full z-40 transition-all duration-300">
                    <div className="flex flex-col w-full h-full justify-end py-4 px-8 gap-4">
                      <h1 className="text-3xl text-white font-semibold">
                        {room?.name}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
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
          <div className="w-full grid grid-cols-3 items-center justify-center gap-2">
            {services?.map((tag: string) => (
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
        <Link href={`/reserve/${room_id}/${start_date}/${end_date}`} className="self-center btn text-white w-fit">
          Book Now for ${room?.price.toString()}
        </Link>
      </div>
    </div>
  );
};

export default Page;
