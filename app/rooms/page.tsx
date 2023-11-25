"use client"



import RoomCard from "@/components/rooms/RoomCard";
import { Room } from "@/models/Room";
import { useGetAllRoomsQuery } from "@/store/rooms/roomsApi";
import React from "react";

const RoomsPage = () => {
  const { data, isLoading, isError, error } = useGetAllRoomsQuery();
  console.log("data", data)
  
  const rooms = data?.results

  return (
    <div className="md:w-10/12 mx-auto flex flex-col space-y-10 px-10">
      {rooms?.map((room: Room) => (
        <RoomCard
          price={room.price}
          key={room.id.toString()}
          name={room.name}
          image={room.image}
          description={room.description}
          services={room.services}
          capacity={room.capacity}
          bedNumber={room.bedNumber}
          status={room.status}
          id={room.id}
        />
      ))}
    </div>
  );
};

export default RoomsPage;
