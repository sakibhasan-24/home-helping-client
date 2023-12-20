import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useParams } from "react-router-dom";

export default function Edit() {
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const [newInformation, setNewInformation] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setNewInformation(data));
  }, [id]);

  console.log(newInformation);
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl font-bold">
          edit Booking for {newInformation.customerName}
        </h1>
        <form
          //   onSubmit={handleBookingData}
          className="max-w-4xl mx-auto bg-gray-600 px-6 py-4 rounded-lg shadow-2xl flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            id="name"
            className="w-3/4 mx-auto px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-300"
            placeholder="name"
            defaultValue={newInformation?.customerName}
          />
          <input
            type="email"
            name="email"
            id="email"
            className="w-3/4 mx-auto px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-300"
            defaultValue={newInformation?.email}
          />
          <input
            className="w-3/4 mx-auto px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-300"
            type="date"
            name="date"
            id="date"
            defaultValue={newInformation?.date}
          />
          <input
            type="text"
            name="address"
            id="address"
            className="w-3/4 mx-auto px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-300"
            placeholder="address"
            defaultValue={newInformation?.address}
          />
          <input
            type="text"
            className="w-3/4 mx-auto px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-300"
            name="phone"
            id="phone"
            placeholder="phone"
            defaultValue={newInformation?.phone}
          />
          <textarea
            className="w-3/4 mx-auto px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-300"
            name="details"
            id="details"
            cols="30"
            rows="10"
            defaultValue={newInformation?.detail}
          ></textarea>
          <input
            type="submit"
            value="Edit"
            className="bg-gray-700 px-6 text-orange-700  py-2 rounded-md w-3/4 mx-auto cursor-pointer font-bold text-xl"
          />
        </form>
      </div>
    </div>
  );
}
