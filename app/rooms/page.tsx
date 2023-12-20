"use client"

import RoomCard from "@/components/rooms/RoomCard";
import { Room } from "@/models/Room";
import { useGetAllRoomsQuery } from "@/store/rooms/roomsApi";
import React from "react";

const RoomsPage = () => {
  const { data: rooms} = useGetAllRoomsQuery();
  
  return (
    <div className="md:w-10/12 mx-auto flex flex-col space-y-10 px-10">
      {rooms?.map((room: Room) => (
        <RoomCard
          price={room.price}
          key={room.id.toString()}
          name={room.name}
          image1={room.image1}
          image2={room.image2}
          image3={room.image3}
          image4={room.image4}
          image5={room.image5}
          image6={room.image6}
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
