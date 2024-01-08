"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Select from "react-select";

import { useGetAvialableRoomsQuery } from "@/store/availability/availabilityApi";
import RoomCard from "@/components/rooms/RoomCard";
import Loading from "../loading";

const ReservationPage = () => {
  const bgImageUrl = "/images/home/backgroundHotel.jpg";
  const enviroment = `http://127.0.0.1:8000/media/`;
  const [formData, setFormData] = useState({
    start_date: new Date(),
    end_date: new Date(new Date().setDate(new Date().getDate() + 1)),
    capacity: { value: "1", label: "1" },
  });

  const capacityOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ];
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: "3.5rem", // Adjust the height as needed
    }),
  };

  // const { data, isLoading, isError, error } = useGetAllRoomsQuery();
  // console.log(`end date, ${formData.end_Date}`)
  const request = {
    start_date: formData.start_date.toISOString().slice(0, 10),
    end_date: formData.end_date.toISOString().slice(0, 10),
    capacity: formData.capacity.value,
  };

  const { data, isLoading, refetch } = useGetAvialableRoomsQuery(request, {
    queryKey: ["getAvialableRooms", request], // Specify queryKey with the parameters
  });

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("data", data);
    if (data) {
      let visited = new Set();
      const currRooms = data?.map((sub) => {
        const currRoom = {
          room_id: sub.id,
          id: sub.type[0].pk,
          name: sub.type[0].fields.name,
          image1: enviroment + sub.type[0].fields.image1,
          image2: enviroment + sub.type[0].fields.image2,
          image3: enviroment + sub.type[0].fields.image3,
          image4: enviroment + sub.type[0].fields.image4,
          image5: enviroment + sub.type[0].fields.image5,
          image6: enviroment + sub.type[0].fields.image6,
          description: sub.type[0].fields.description,
          services: sub.type[0].fields.services,
          capacity: sub.type[0].fields.capacity,
          bedNumber: sub.type[0].fields.bedNumber,
          status: sub.type[0].fields.status,
          price: sub.type[0].fields.price,
        };

        if (!visited.has(currRoom.id)) {
          visited.add(currRoom.id);
          return currRoom;
        }
      });
      const mapRooms = currRooms.filter((room) => room != undefined);
      console.log("currRooms", mapRooms);
      setRooms(mapRooms);
    }
  }, [data, enviroment]);

  // console.log("rooms", rooms)

  const handleClick = async (e) => {
    setLoading(true);
    const newRequest = {
      start_date: formData.start_date.toISOString().slice(0, 10),
      end_date: formData.end_date.toISOString().slice(0, 10),
      capacity: formData.capacity.value,
    };

    try {
      // Use refetch with the new parameters by updating the queryKey
      console.log("in try", newRequest);
      const newData = await refetch(["getAvialableRooms", newRequest]);
      console.log("success", newData);
      console.log(data);
    } catch (error) {
      console.error("Error refetching data:", error);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  if (isLoading) {
    return <Loading />;
  }

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
          <div className="px-4 md:px-10 flex flex-col md:flex-row gap-8 md:gap-4 md:justify-between items-center pt-6">
            {/* <DateRange
              minDate={addDays(new Date(), 0)}
              editableDateInputs={true}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
              className="h-full"
            /> */}
            <DatePicker
              label="Start Date"
              className="w-full md:w-fit"
              value={formData.start_date}
              minDate={new Date()}
              onChange={(newValue) => {
                setFormData((prev) => ({
                  ...prev,
                  start_date: newValue,
                }));
              }}
              format="yyyy-MM-dd"
              slotProps={{
                textField: {
                  helperText: "YYYY-MM-DD",
                },
              }}
            />
            <DatePicker
              label="End Date"
              className="w-full md:w-fit"
              value={formData.end_date}
              minDate={
                new Date(new Date().setDate(formData.start_date.getDate() + 1))
              }
              onChange={(newValue) => {
                {
                  setFormData((prev) => ({
                    ...prev,
                    end_date: newValue,
                  }));
                }
              }}
              format="yyyy-MM-dd"
              slotProps={{
                textField: {
                  helperText: "YYYY-MM-DD",
                },
              }}
            />
            <div className="self-start flex-1 w-full md:w-fit flex flex-col">
              <Select
                placeholder="Capacity..."
                styles={customStyles}
                classNamePrefix="Capacity"
                defaultValue={{ value: "1", label: "1" }}
                onChange={(newValue) => {
                  setFormData((prev) => ({
                    ...prev,
                    capacity: newValue,
                  }));
                }}
                isSearchable
                id="capacity"
                name="capacity"
                options={capacityOptions}
                className="w-full"
              />
              <label
                htmlFor="capacity"
                className="ml-4 text-sm text-gray-500 font-sans"
              >
                Capacity
              </label>
            </div>
            <button
              onClick={handleClick}
              className="md:self-start text-white bg-primary px-8 py-4 rounded-lg hover:bg-blue-900 hover:shadow-inner transition ease-out duration-200"
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
        {loading && (
          <h1 className="text-xl md:text-4xl font-montserrat font-bold my-5 text-center">
            Loading...
          </h1>
        )}
        {!loading && rooms.length == 0 && (
          <h1 className="text-xl md:text-4xl font-montserrat font-bold my-5 text-center">
            No Room Available
          </h1>
        )}
        {!loading && rooms.length > 0 && (
          <div className="flex flex-col space-y-10">
            {rooms?.map((room) => (
              <RoomCard
                room_id={room.room_id}
                start_date={formData.start_date.toISOString().slice(0, 10)}
                end_date={formData.end_date.toISOString().slice(0, 10)}
                price={room.price}
                key={room.id.toString()}
                name={room.name}
                image1={
                  room.image1.substring(0, 39) +
                  "/backend" +
                  room.image1.substring(39)
                }
                image2={
                  room.image2.substring(0, 39) +
                  "/backend" +
                  room.image2.substring(39)
                }
                image3={
                  room.image3.substring(0, 39) +
                  "/backend" +
                  room.image3.substring(39)
                }
                image4={
                  room.image4.substring(0, 39) +
                  "/backend" +
                  room.image4.substring(39)
                }
                image5={
                  room.image5.substring(0, 39) +
                  "/backend" +
                  room.image5.substring(39)
                }
                image6={
                  room.image6.substring(0, 39) +
                  "/backend" +
                  room.image6.substring(39)
                }
                description={room.description}
                services={room.services}
                capacity={room.capacity}
                bedNumber={room.bedNumber}
                status={true}
                id={room.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservationPage;
