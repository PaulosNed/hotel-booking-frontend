"use client";

import { useContactMutation } from "@/store/contact/contactApi";
import React from "react";
import { useForm } from "react-hook-form";
import Loading from "../loading";
import { toast } from "react-toastify";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Page: React.FC = () => {
  const bgImageUrl = "/images/home/nahu7.jpg";

  const [
    contact,
    {
      data,
      isError,
      isLoading,
      isSuccess,
    },
  ] = useContactMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: any) => {
    data.date = new Date().toISOString().slice(0, 10)
    console.log(data)
    const response: any = await contact(data)

    if (response.data !== null) {
      console.log("success", response)
      toast.success("Message sent successfully")
      reset()
    } else {
      toast.error("Unable to send message")
    }
  };

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="flex flex-col space-y-28 pb-10">
      <div className="w-full h-[120px] md:h-[200px] relative">
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
          <p className="mt-2 text-2xl md:text-5xl uppercase">
            Contact Information
          </p>
        </div>
      </div>

      <div className="md:w-10/12 md:pt-10 mx-auto md:py-10 flex flex-col md:flex-row md:space-x-16">
        <iframe
          className="w-full md:rounded-xl"
          title="address"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.0683193036753!2d38.735814174557056!3d9.057533088542609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f222bdae539%3A0x7ffe63d2ada9ecdd!2sNahusenay%20Hotel!5e0!3m2!1sen!2set!4v1702889099093!5m2!1sen!2set"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="w-full mx-auto py-10">
          <p className="text-4xl md:text-6xl font-inter mb-10 font-bold">
            Contact Us
          </p>
          <div className="mt-16">
            <form
              target="_blank"
              onSubmit={handleSubmit(onSubmit)}
              action="https://formsubmit.co/pauldessie@gmail.com"
              method="POST"
              className="flex flex-col gap-5 md:w-10/12"
            >
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full py-1 px-2 outline outline-slate-300"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.type === "required" &&
                      "This field is required."}
                    {errors.name.type === "maxLength" &&
                      "Max length is 100 char."}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full py-1 px-2 outline outline-slate-300"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.type === "required" &&
                      "This field is required."}
                    {errors.email.type === "pattern" &&
                      "Invalid email address."}
                  </p>
                )}
              </div>
              <div>
                <textarea
                  id=""
                  className="w-full h-24 py-1 px-2 outline outline-slate-300"
                  placeholder="Type your message here..."
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                  })}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.message.type === "required" &&
                      "This field is required."}
                    {errors.message.type === "maxLength" &&
                      "Max length is 2000 char."}
                  </p>
                )}
              </div>
              <button
                disabled={!isValid}
                className="self-end btn-small text-white py-2"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
