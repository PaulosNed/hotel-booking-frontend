import { Room } from "@/models/Room";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RoomCard: React.FC<Room> = (room) => {
  const statusText = room.status ? "Avialable" : "Unavialable";
  return (
    <Link href={'/rooms/1'} className="shadow-xl h-56 rounded-lg pr-24 hover:bg-secondary hover:cursor-pointer">
      <div className="flex justify-between">
        <div className="flex space-x-8">
          <Image
            src={room.photo}
            alt={"room"}
            className="w-64 h-56 object-cover"
            width={200}
            height={200}
          />
          <div className="flex flex-col space-y-12 py-10">
            <h1 className="font-montserrat font-bold text-3xl">{room.name}</h1>
            <div className="flex flex-col space-y-2 text-xs font-semibold">
              <p>
                <span className="text-slate-500">Status: </span>{" "}
                <i className={room.status ? "text-green-500" : "text-red-500"}>
                  {statusText}
                </i>
              </p>
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
              {room.service_provided?.map((tag: string) => (
                <p
                  key={tag}
                  className="w-fit rounded-full px-3 py-1 text-xs bg-secondary"
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <div className="btn text-white hover:scale-100">Price: ${room.price.toString()}</div>
        </div>
      </div>
    </Link>
  );
};

export default RoomCard;
