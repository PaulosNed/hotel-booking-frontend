/* eslint-disable @next/next/no-img-element */
import { Room } from "@/models/Room";
import { roomsApi } from "@/store/rooms/roomsApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RoomCard: React.FC<Room> = (room) => {
  const statusText = room.status ? "Avialable" : "Unavialable";

  const services = room.services.split(" ");

  return (
    <>
      {/* Desktop View */}
      <Link
        href={
          room.room_id
            ? `rooms/${room.id}/${room.room_id}/${room.start_date}/${room.end_date}`
            : `rooms/${room.id}`
        }
        className="hidden md:block shadow-xl h-56 rounded-lg pr-24 hover:bg-secondary hover:cursor-pointer"
      >
        <div className="flex justify-between">
          <div className="flex space-x-8">
            <img
              src={room.image1}
              alt={"room"}
              className="w-80 h-56 object-cover"
            />
            <div className="flex flex-col space-y-12 py-10">
              <h1 className="font-montserrat font-bold text-3xl">
                {room.name}
              </h1>
              <div className="flex flex-col space-y-2 text-xs font-semibold">
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
              </div>
            </div>
          </div>
          <div className="max-w-sm flex flex-col justify-between items-end py-10">
            <div>
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
            </div>
            <div className="btn text-white hover:scale-100">
              Price: ${room.price.toString()}
            </div>
          </div>
        </div>
      </Link>

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
            <h1 className="font-montserrat font-extrabold md:font-bold text-xl md:text-3xl">{room.name}</h1>
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
