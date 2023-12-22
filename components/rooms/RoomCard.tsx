/* eslint-disable @next/next/no-img-element */
import { Room } from "@/models/Room";
import { roomsApi } from "@/store/rooms/roomsApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RoomCard: React.FC<Room> = (room) => {
  const statusText = room.status ? "Avialable" : "Unavialable";
  const reducedDescription =
    room.description.length > 200
      ? `${room?.description.substring(0, 200)}...`
      : room?.description;

  const services = room.services.split(" ");

  return (
    <>
      {/* Desktop View */}
      <div
        // href={
        //   room.room_id
        //     ? `rooms/${room.id}/${room.room_id}/${room.start_date}/${room.end_date}`
        //     : `rooms/${room.id}`
        // }
        className="hidden md:block shadow-xl h-56 rounded-lg bg-slate-50"
      >
        <div className="flex justify-between">
          <div className="flex space-x-8">
            <img
              src={room.image1}
              alt={"room"}
              className="w-80 h-56 object-cover rounded-l-lg"
            />
            <div className="flex-auto flex flex-col space-y-4 py-10">
              <h1 className="font-montserrat font-bold text-3xl">
                {room.name}
              </h1>

              <p className="text-slate-500 text-sm font-montserrat">
                {reducedDescription}
              </p>

              {/* <div className="flex flex-col space-y-2 text-xs font-semibold">
                {room.status && (
                  <p>
                    <span className="text-slate-500">Status: </span>{" "}
                    <i
                      className={
                        room.status ? "text-green-500" : "text-red-500"
                      }
                    >
                      {statusText}
                    </i>
                  </p>
                )}
                <p>
                  <span className="text-slate-500">Beds: </span>{" "}
                  {room.bedNumber.toString()}{" "}
                </p>
                <p>
                  <span className="text-slate-500">Passanger: </span>{" "}
                  {room.capacity.toString()}{" "}
                </p>
              </div> */}
            </div>
            <div className="w-7/12 flex flex-col justify-center items-center py-10 border-l px-4 space-y-8">
              <div className="flex flex-col justify-center items-center space-y-2">
                <h1 className="text-xl font-bold font-montserrat">
                  ${room.price.toString()}
                </h1>
                <p className="uppercase font-light">per night</p>
              </div>
              <Link
                href={
                  room.room_id
                    ? `rooms/${room.id}/${room.room_id}/${room.start_date}/${room.end_date}`
                    : `rooms/${room.id}`
                }
                className="self-center text-white bg-primary px-8 py-3 rounded-full outline outline-2 outline-primary hover:bg-white hover:text-primary hover:shadow-inner transition ease-out duration-200 w-fit"
              >
                {room.room_id ? 'Book Now' : 'View Room'}
              </Link>
              {/* <div>
              <h1 className="font-semibold pb-2">Services Provided</h1>
              <div className="flex gap-2 flex-wrap">
                {services?.map((tag: string) => (
                  <p
                    key={tag}
                    className="w-fit rounded-full px-3 py-1 text-xs bg-secondary"
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div> */}
              {/* <div className="btn text-white hover:scale-100">
              Price: ${room.price.toString()}
            </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <Link
        href={
          room.room_id
            ? `rooms/${room.id}/${room.room_id}/${room.start_date}/${room.end_date}`
            : `rooms/${room.id}`
        }
        className="block md:hidden shadow-xl rounded-lg"
      >
        <div className="flex flex-col">
          <img
            src={room.image1}
            alt={"room"}
            className="h-52 rounded-t-lg object-cover"
          />
          <div className="mt-4 flex flex-col space-y-4 px-4">
            <h1 className="font-montserrat font-extrabold md:font-bold text-xl md:text-3xl">
              {room.name}
            </h1>
            <p className="text-slate-500 text-sm font-montserrat">
              {room.description.slice(0, 100)}....
            </p>
            <div className="py-4 flex gap-2 flex-wrap">
              <p className="w-fit rounded-full px-3 py-1 text-xs bg-secondary">
                {room.capacity.toString()} Passangers
              </p>
              <p className="w-fit rounded-full px-3 py-1 text-xs bg-secondary">
                {room.bedNumber.toString()} bedrooms
              </p>
              {services?.map((tag: string) => (
                <p
                  key={tag}
                  className="w-fit rounded-full px-3 py-1 text-xs bg-secondary"
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <div className="max-w-sm flex flex-col justify-between items-end py-4 md:py-10 px-4">
            <div className="bg-primary rounded-full text-xs md:btn py-2 px-4 text-white md:hover:scale-100">
              Price: ${room.price.toString()}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default RoomCard;
