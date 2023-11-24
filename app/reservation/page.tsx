"use client";

import React from "react";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Select from "react-select";
import { Room } from "@/models/Room";
import RoomCard from "@/components/rooms/RoomCard";

const ReservationPage = () => {
  const bgImageUrl = "/images/home/backgroundHotel.jpg";
  const [formData, setFormData] = useState({
    start_date: null,
    end_date: null,
    capacity: null,
  });
  const capacityOptions: any = [
    { value: 1, label: "One" },
    { value: 2, label: "Two" },
    { value: 3, label: "Three" },
    { value: 4, label: "Four" },
    { value: 5, label: "Five" },
  ];
  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      minHeight: "3.5rem", // Adjust the height as needed
      width: "280px", // Adjust the right padding as needed
    }),
  };

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
      photos: []
    },
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
      photos: []
    },
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
      photos: []
    },
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
      photos: []
    },
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
      photos: []
    },
  ];

  const handleClick = (e: any) => {
    console.log(formData);
  };

  return (
    <div className="flex flex-col">
      <div className="w-full h-[120px] md:h-[250px] relative">
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
          <p className="mt-2 text-2xl md:text-5xl uppercase">Reservation</p>
        </div>
        <div className="relative bottom-0 mt-10 md:-mt-14 md:h-28 w-9/12 mx-auto md:shadow-xl bg-white z-10 rounded-lg">
          <div className="px-4 md:px-10 flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between items-center pt-6">
            {/* <DateRange
              minDate={addDays(new Date(), 0)}
              editableDateInputs={true}
              onChange={(item: any) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
              className="h-full"
            /> */}
            <DatePicker
              label="Start Date"
              className="w-full md:w-fit"
              value={formData.start_date}
              onChange={(newValue) =>
                setFormData((prev: any) => ({
                  ...prev,
                  start_date: newValue,
                }))
              }
              slotProps={{
                textField: {
                  helperText: "MM/DD/YYYY",
                },
              }}
            />
            <DatePicker
              label="End Date"
              className="w-full md:w-fit"
              value={formData.end_date}
              onChange={(newValue) =>
                setFormData((prev: any) => ({
                  ...prev,
                  end_date: newValue,
                }))
              }
              slotProps={{
                textField: {
                  helperText: "MM/DD/YYYY",
                },
              }}
            />
            <div className="self-start mb-0.5 flex flex-col">
              <Select
                placeholder="Capacity..."
                styles={customStyles}
                classNamePrefix="Capacity"
                defaultValue={1}
                onChange={(newValue) => {
                  setFormData((prev: any) => ({
                    ...prev,
                    capacity: newValue,
                  }));
                }}
                isSearchable
                id="capacity"
                name="capacity"
                options={capacityOptions}
              />
              {/* <label htmlFor="capacity" className="ml-4 text-sm text-gray-500 font-sans">
                Capacity
              </label> */}
            </div>
            <button
              onClick={handleClick}
              className="md:self-start btn text-white font-montserrat font-normal hover:scale-100 hover:bg-blue-800"
            >
              Check Avialability
            </button>
          </div>
        </div>
      </div>

      
      <div className="mt-[550px] mb-32 md:my-32 md:w-10/12 mx-auto bg-white px-10">
            {/* <div className="flex space-x-2 items-center group">
              <div className="w-3 h-3 bg-primary rounded-full group-hover:animate-ping"></div>
              <h1 className="text-xl font-montserrat">
                Please Fill the fields and search for Avialable Rooms
              </h1>
            </div> */}

            <div className="flex flex-col space-y-10">
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
                  photos={room.photos}
                />
              ))}
            </div>
          </div>
    </div>
  );
};

export default ReservationPage;
