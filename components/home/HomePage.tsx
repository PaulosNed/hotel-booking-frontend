import Link from "next/link";
import React from "react";

const HomePage = () => {
  const bgImageUrl = "/images/home/backgroundHotel.jpg";

  return (
    <div className="w-full h-screen relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative h-full flex flex-col space-y-16 justify-center items-center text-center text-white font-montserrat z-10">
        <div>
          <p className="mt-2 text-2xl md:text-5xl uppercase">Nahusenay Hotel</p>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 px-10">
            <span className="text-primary">Experience</span> and{" "}
            <span className="text-primary">Enjoy</span> Life
          </h1>
        </div>
        <Link className="btn" href={'/reservation'}>Book Now</Link>
      </div>
    </div>
  );
};

export default HomePage;
