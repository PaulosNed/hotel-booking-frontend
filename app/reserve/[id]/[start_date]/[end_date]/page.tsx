"use client";

import { useForm } from "react-hook-form";
import React from "react";
import { useParams } from "next/navigation";
import { useBookRoomMutation } from "@/store/reserve/reserveApi";

interface FormData {
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  zip_code: string;
}

const Page = () => {
  const { id, start_date, end_date } = useParams();
  
  const [
    bookRoom,
    {
      data,
      isError,
      isLoading,
      isSuccess,
    },
  ] = useBookRoomMutation();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm<FormData>();

  const reserveRoom = async (data: any) => {
    data.start_date = start_date;
    data.end_date = end_date;

    const request = {
      customer_first_name: data.first_name,
      customer_last_name: data.last_name,
      customer_email: data.email,
      customer_phone_number: data.phone_number,
      start_date: start_date,
      end_date: end_date,
      id: Number(id),
      currency: "etb",
    };

    console.log(request);
    const response: any = await bookRoom(request);
    console.log("respone", response.data.data.checkout_url)

    if (response.data.status == "success") {
      console.log("in", response.data.data.checkout_url)
      window.location.href = response.data.data.checkout_url;
    }
  };

  return (
    <div className="my-10 md:my-28 w-full md:w-8/12 md:shadow-lg md:rounded-lg mx-auto px-4 md:px-10 py-6 md:py-12">
      <form
        className="flex flex-col space-y-2 md:space-y-5"
        onSubmit={handleSubmit(reserveRoom)}
      >
        <h1 className="pt-2 pb-10 text-3xl font-bold font-montserrat mx-auto uppercase text-primary">Reserve Your room</h1>
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
            <label htmlFor="middle_name" className="text-xs font-semibold px-1">
              Middle Name
            </label>
            <div className="flex">
              <input
                type="text"
                id="middle_name"
                className="w-full p-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary"
                required={true}
                {...register("middle_name", {
                  required: "Last Name is Required!!!",
                })}
                onKeyUp={() => {
                  trigger("middle_name");
                }}
              />
            </div>
            {errors.middle_name && (
              <small className="text-red-500">
                {errors.middle_name.message}
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
        </div>
        <div className="w-full flex flex-col md:flex-row">
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
            <label htmlFor="zip_code" className="text-xs font-semibold px-1">
              Zip Code
            </label>
            <div className="flex">
              <input
                type="text"
                id="zip_code"
                className="w-full p-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary"
                {...register("zip_code", {})}
                onKeyUp={() => {
                  trigger("zip_code");
                }}
              />
            </div>
            {errors.zip_code && (
              <small className="text-red-500">{errors.zip_code.message}</small>
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
