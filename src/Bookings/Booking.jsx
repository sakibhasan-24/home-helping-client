import React from "react";

export default function Booking({ booking }) {
  //   console.log(booking);
  return (
    <div>
      <div className="flex items-center justify-center py-4">
        <div className="w-[50px] ">
          <img
            className="w-[50px] rounded-full h-[50px]"
            src={booking.img}
            alt="image"
          />
        </div>
        <div className="w-4/5 flex  gap-4 shadow-2xl space-y-8 whitespace-nowrap">
          <h3>{booking.title}</h3>
          <p>${booking.price}</p>
          <p>client Name:{booking.customerName}</p>
          <p>email:{booking.email}</p>
          <p>calls:{booking.phone ? booking.phone : "no number"}</p>
          <p>service date{booking.date}</p>
          <p>{booking.address}</p>
          <p className="bg-green-400 px-2 py-1 text-black cursor-pointer">
            edit
          </p>
          <p className="cursor-pointer bg-red-600 px-2 py-2">Delete</p>
        </div>
      </div>
    </div>
  );
}
