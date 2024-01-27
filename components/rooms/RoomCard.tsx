/* eslint-disable @next/next/no-img-element */
import { Room } from "@/models/Room";
import Link from "next/link";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faSink,
  faUtensils,
  faVault,
  faBath,
  faTv,
} from "@fortawesome/free-solid-svg-icons";

const RoomCard: React.FC<Room> = (room) => {
  const statusText = room.status ? "Avialable" : "Unavialable";
  const reducedDescription =
    room.description.length > 200
      ? `${room?.description.substring(0, 200)}...`
      : room?.description;

  const services: string[] = room.services.split(" ");

  const checkTag = (tag: string) => {
    return services.includes(tag.toLowerCase())
  }

  return (
    <>
      {/* Desktop View */}
      <div
        className="hidden md:block shadow-xl h-fit rounded-lg bg-slate-50"
      >
        <div className="flex justify-between">
          <div className="flex space-x-8">
            <img
              src={room.image1}
              alt={"room"}
              className="w-80 h-full object-cover rounded-l-lg"
            />
            <div className="flex-auto flex flex-col py-10">
              <h1 className="font-montserrat font-bold text-3xl">
                {room.name}
              </h1>

              <p className="text-slate-500 text-sm font-montserrat mt-4">
                {reducedDescription}
              </p>

              <div className="w-full flex justify-between mt-8 px-4">
                {checkTag('wifi') && <FontAwesomeIcon
                  icon={faWifi}
                  color="blue"
                  title="wifi"
                  className="hover:cursor-pointer"
                />}
                {checkTag('bathroom') && <FontAwesomeIcon
                  icon={faBath}
                  color="blue"
                  title="Bathroom"
                  className="hover:cursor-pointer"
                />}
                {checkTag('food') && <FontAwesomeIcon
                  icon={faUtensils}
                  color="blue"
                  title="Food Service"
                  className="hover:cursor-pointer"
                />}
                {checkTag('vault') && <FontAwesomeIcon
                  icon={faVault}
                  color="blue"
                  title="Safe Vault"
                  className="hover:cursor-pointer"
                />}
                {checkTag('laundry') && <FontAwesomeIcon
                  icon={faSink}
                  color="blue"
                  title="laundry"
                  className="hover:cursor-pointer"
                />}
                {checkTag('tv') && <FontAwesomeIcon
                  icon={faTv}
                  color="blue"
                  title="Television"
                  className="hover:cursor-pointer"
                />}
              </div>

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
            <div className="w-[800px] laptop:w-8/12 flex flex-col justify-center items-center py-10 border-l desktop:px-4 space-y-8">
              <div className="flex flex-col justify-center items-center space-y-2">
                <h1 className="text-xl font-bold font-montserrat">
                  ${room.price.toString()}.00
                </h1>
                <p className="uppercase font-light">per night</p>
              </div>
              <Link
                href={
                  room.room_id
                    ? `rooms/${room.id}/${room.room_id}/${room.start_date}/${room.end_date}`
                    : `rooms/${room.id}`
                }
                className="self-center text-white bg-primary px-8 py-3 rounded-full outline outline-2 outline-primary hover:bg-white hover:text-primary hover:shadow-inner transition ease-out duration-200 w-fit text-sm lg:text-base"
              >
                {room.room_id ? "Book Now" : "View Room"}
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
          <div className="mt-4 flex flex-col px-4">
            <h1 className="font-montserrat font-extrabold md:font-bold text-xl md:text-3xl">
              {room.name}
            </h1>
            <p className="mt-4 text-slate-500 text-sm font-montserrat">
              {room.description.slice(0, 100)}....
            </p>
            <div className="mt-8 flex justify-between p-4 border-t border-b">
              {checkTag('wifi') && <FontAwesomeIcon
                icon={faWifi}
                color="blue"
                title="wifi"
                className="hover:cursor-pointer"
              />}
              {checkTag('bathroom') && <FontAwesomeIcon
                icon={faBath}
                color="blue"
                title="Bathroom"
                className="hover:cursor-pointer"
              />}
              {checkTag('food') && <FontAwesomeIcon
                icon={faUtensils}
                color="blue"
                title="Food Service"
                className="hover:cursor-pointer"
              />}
              {checkTag('vault') && <FontAwesomeIcon
                icon={faVault}
                color="blue"
                title="Safe Vault"
                className="hover:cursor-pointer"
              />}
              {checkTag('laundry') && <FontAwesomeIcon
                icon={faSink}
                color="blue"
                title="laundry"
                className="hover:cursor-pointer"
              />}
              {checkTag('tv') && <FontAwesomeIcon
                icon={faTv}
                color="blue"
                title="Television"
                className="hover:cursor-pointer"
              />}
              {/* <p className="w-fit rounded-full px-3 py-1 text-xs bg-secondary">
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
              ))} */}
            </div>
          </div>
          <div className="max-w-sm flex flex-col justify-between items-end py-4 md:py-10 px-4">
            <div className="bg-primary rounded-full text-xs md:btn py-2 px-4 text-white md:hover:scale-100">
              Price: ${room.price.toString()}.00
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default RoomCard;
