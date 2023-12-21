"use client";

import { useGetconfirmationQuery } from "@/store/confirm/confirmApi";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect } from "react";
import Loading from "../loading";

const Page: React.FC = () => {
  const bgImageUrl = "/images/home/backgroundHotel.jpg";
  const ref = sessionStorage.getItem("tx_ref");
  const { data, isLoading, isError, error } = useGetconfirmationQuery(ref);
  let status: any = { fields: { payment_status: "Failed" } };
  if (data) {
    status = data[0];
  }

  const success = status.fields.payment_status == "approved";

  if (isLoading) {
    return <Loading />;
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
          <p className="mt-2 text-2xl md:text-5xl uppercase">Confirmation</p>
        </div>
      </div>

      {/* Success */}
      {success && (
        <div className="md:w-10/12 md:pt-10 mx-auto md:py-10 flex flex-col justify-center items-center space-y-6">
          <img
            src="/images/confirmation/checkmark.svg"
            alt="payment success"
            className=" w-1/2 object-cover md:w-1/4"
          />
          <h1 className="text-xl md:text-4xl font-montserrat font-bold">
            Payment Successful
          </h1>

          <div className="pt-16">
            <Link
              href={"/"}
              className="text-white bg-green-600 px-8 py-3 rounded-full outline outline-2 outline-green-600 hover:bg-white hover:text-green-500 hover:shadow-inner transition ease-out duration-200"
              onClick={() => sessionStorage.removeItem('tx_ref')}
            >
              Go Back to Home
            </Link>
          </div>
        </div>
      )}

      {!success && (
        <div className="md:w-10/12 md:pt-10 mx-auto md:py-10 flex flex-col justify-center items-center space-y-6">
          <img
            src="/images/confirmation/failed.svg"
            alt="payment success"
            className=" w-1/2 object-cover md:w-1/4"
          />
          <h1 className="text-xl md:text-4xl font-montserrat font-bold">
            Payment Not Successful
          </h1>

          <div className="pt-16">
            <Link
              href={"/"}
              className="text-white bg-red-500 px-8 py-3 rounded-full outline outline-2 outline-red-500 hover:bg-white hover:text-red-500 hover:shadow-inner transition ease-out duration-200"
            >
              Go Back to Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
