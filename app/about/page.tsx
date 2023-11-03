import Image from "next/image";
import React from "react";

const page = () => {
  const bgImageUrl = "/images/home/backgroundHotel.jpg";

  return (
    <div className="flex flex-col space-y-28 pb-10">
      <div className="w-full h-[200px] relative">
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
          <p className="mt-2 text-2xl md:text-5xl uppercase">About Us</p>
        </div>
      </div>

      <div className="w-1/2 mx-auto">
        <div className="flex flex-col space-y-16 items-center">
          <h1 className="font-bold font-montserrat text-4xl">Since 2023</h1>
          <Image
            src={"/images/about/Vintage-Decorative-Divider.svg"}
            alt={"separator"}
            width={200}
            height={50}
          />
          <div className="text-slate-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            quidem, dignissimos delectus id dicta soluta quis culpa doloribus
            eligendi unde laboriosam beatae dolorem facilis, libero tempore vero
            iusto consectetur. Odio. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Necessitatibus in cumque corrupti rerum expedita
            ex quisquam ducimus optio harum temporibus ullam, porro fuga quasi
            libero, iste animi, sapiente repellat! Molestiae.
          </div>
          <h1 className="font-bold font-montserrat">Number Facts</h1>
          <div className="flex justify-between w-3/4">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold ">320</h1>
              <p className="text-slate-500 text-xs">Clients</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold ">24</h1>
              <p className="text-slate-500 text-xs">Rooms</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold ">50</h1>
              <p className="text-slate-500 text-xs">Staffs</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold ">2</h1>
              <p className="text-slate-500 text-xs">Awards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
