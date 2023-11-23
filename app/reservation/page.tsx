"use client"

import React from "react";
import { DateRange, Range } from "react-date-range";
import { addDays } from 'date-fns';
import { useState } from "react";

const ReservationPage = () => {
  const bgImageUrl = "/images/home/backgroundHotel.jpg";
  const [state, setState] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="flex flex-col relative">
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
        <div className="relative bottom-0 -mt-14 h-28 w-8/12 mx-auto shadow-xl bg-white z-10">
          <div className="px-4 md:px-10 flex flex-col md:flex-row gap-4 items-center">
            <DateRange
              minDate={addDays(new Date(), 0)}
              editableDateInputs={true}
              onChange={(item: any) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
              className="h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
