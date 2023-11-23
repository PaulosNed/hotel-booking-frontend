import RoomCard from "@/components/rooms/RoomCard";
import { Room } from "@/models/Room";
import React from "react";

const RoomsPage = () => {
  const rooms: Room[] = [
    {
      id: 1,
      name: "Deluxe Suite",
      cover_photo:
        "https://plus.unsplash.com/premium_photo-1661876306620-f2f2989f8f8b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRlbHV4ZSUyMHJvb218ZW58MHx8MHx8fDA%3D",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt esse excepturi perspiciatis autem, ad, nobis velit placeat id quibusdam vero fuga numquam provident sint quae possimus ut ducimus quam animi?",
      service_provided: ["food", "shower", "tv"],
      capacity: 2,
      bedNumber: 30,
      status: false,
      price: 200,
    },
  ];

  return (
    <div className="md:w-10/12 mx-auto flex flex-col space-y-10 px-10">
      {rooms?.map((room: Room) => (
        <RoomCard
          price={room.price}
          key={room.id.toString()}
          name={room.name}
          cover_photo={room.cover_photo}
          description={room.description}
          service_provided={room.service_provided}
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
