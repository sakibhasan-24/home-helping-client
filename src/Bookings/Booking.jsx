import React from "react";
import { Link } from "react-router-dom";

export default function Booking({ booking, handleDelete }) {
  console.log(booking._id);
  return (
    <div>
      <div className="flex flex-col lg:flex-col items-center justify-center py-4 border-4 mx-1 my-4">
        <div className="w-[50px] ">
          <img
            className="w-[50px] rounded-full h-[50px]"
            src={booking.img}
            alt="image"
          />
        </div>
        <div className="w-full lg:w-4/5 flex flex-col lg:flex-row gap-4 shadow-2xl space-y-2 lg:space-y-8 whitespace-nowrap">
          <h3>{booking.title}</h3>
          <p>${booking.price}</p>
          <p>client Name:{booking.customerName}</p>
          <p>email:{booking.email}</p>
          <p>calls:{booking.phone ? booking.phone : "no number"}</p>
          <p>service date{booking.date}</p>
          <p>{booking.address}</p>
          <Link
            className="bg-green-400 px-2 py-1 w-1/2 mx-auto text-black cursor-pointer"
            to={`/edit/${booking._id}`}
          >
            <p>edit</p>
          </Link>
          <p
            onClick={() => handleDelete(booking._id)}
            className="cursor-pointer w-1/2 mx-auto bg-red-600 px-2 py-2"
          >
            Delete
          </p>
        </div>
      </div>
    </div>
  );
}
