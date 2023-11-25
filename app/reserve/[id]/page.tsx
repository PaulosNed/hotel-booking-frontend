"use client";

import { useForm } from "react-hook-form";
import { Room } from "@/models/Room";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useParams } from "next/navigation";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  start_date: Date;
  end_date: Date;
}

const Page = () => {
  const room: Room = {
    id: 1,
    name: "Deluxe Suite",
    image:
      "https://plus.unsplash.com/premium_photo-1661876306620-f2f2989f8f8b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRlbHV4ZSUyMHJvb218ZW58MHx8MHx8fDA%3D",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt esse excepturi perspiciatis autem, ad, nobis velit placeat id quibusdam vero fuga numquam provident sint quae possimus ut ducimus quam animi?",
    services: "food shower tv",
    capacity: 2,
    bedNumber: 30,
    status: false,
    price: 200,
  };
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm<FormData>();

  const reserveRoom = async (data: any) => {
    data.currency = "etb";
    data.room = Number(id);
    console.log(data);
  };

  return (
    <div className="my-28 w-full md:w-8/12 md:shadow-lg md:rounded-lg mx-auto px-4 md:px-10 py-6 md:py-12">
      <form
        className="flex flex-col space-y-2 md:space-y-5"
        onSubmit={handleSubmit(reserveRoom)}
      >
        <div className="w-full flex flex-col md:flex-row">
          <div className="md:w-1/3 px-2">
            <label htmlFor="first_name" className="text-xs font-semibold px-1">
              First Name
            </label>
            <div className="flex">
              <input
                type="text"
                id="first_name"
                className="w-full p-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary"
                required={true}
                {...register("first_name", {
                  required: "First Name is Required!!!",
                })}
                onKeyUp={() => {
                  trigger("first_name");
                }}
              />
            </div>
            {errors.first_name && (
              <small className="text-red-500">
                {errors.first_name.message}
              </small>
            )}
          </div>

          <div className="md:w-1/3 px-2">
            <label htmlFor="last_name" className="text-xs font-semibold px-1">
              Last Name
            </label>
            <div className="flex">
              <input
                type="text"
                id="last_name"
                className="w-full p-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary"
                required={true}
                {...register("last_name", {
                  required: "Last Name is Required!!!",
                })}
                onKeyUp={() => {
                  trigger("last_name");
                }}
              />
            </div>
            {errors.last_name && (
              <small className="text-red-500">{errors.last_name.message}</small>
            )}
          </div>

          <div className="md:w-1/3 px-2">
            <label htmlFor="email" className="text-xs font-semibold px-1">
              Email
            </label>
            <div className="flex">
              <input
                type="email"
                id="email"
                className="w-full p-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary"
                required={true}
                {...register("email", {
                  required: "Email is Required!!!",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
            </div>
            {errors.email && (
              <small className="text-red-500">{errors.email.message}</small>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row">
          <div className="md:w-1/3 px-2">
            <label
              htmlFor="phone_number"
              className="text-xs font-semibold px-1"
            >
              Phone Number
            </label>
            <div className="flex">
              <input
                type="text"
                id="phone_number"
                className="w-full p-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary"
                required={true}
                {...register("phone_number", {
                  required: "Phone Number is Required!!!",
                })}
                onKeyUp={() => {
                  trigger("phone_number");
                }}
              />
            </div>
            {errors.phone_number && (
              <small className="text-red-500">
                {errors.phone_number.message}
              </small>
            )}
          </div>

          <div className="md:w-1/3 px-2">
            <label htmlFor="start_date" className="text-xs font-semibold px-1">
              Start Date
            </label>
            <div className="flex">
              <input
                type="date"
                id="start_date"
                className="w-full p-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary"
                required={true}
                {...register("start_date", {
                  required: "Start Date is Required!!!",
                })}
                onKeyUp={() => {
                  trigger("start_date");
                }}
              />
            </div>
            {errors.start_date && (
              <small className="text-red-500">
                {errors.start_date.message}
              </small>
            )}
          </div>

          <div className="md:w-1/3 px-2">
            <label htmlFor="end_date" className="text-xs font-semibold px-1">
              End Date
            </label>
            <div className="flex">
              <input
                type="date"
                id="end_date"
                className="w-full p-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary"
                required={true}
                {...register("end_date", {
                  required: "End Date is Required!!!",
                })}
                onKeyUp={() => {
                  trigger("end_date");
                }}
              />
            </div>
            {errors.end_date && (
              <small className="text-red-500">{errors.end_date.message}</small>
            )}
          </div>
        </div>
        <div className="pt-10 self-center md:w-72 flex justify-center">
          <button className="btn-small text-white" disabled={!isValid}>
            Reserve Room
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
