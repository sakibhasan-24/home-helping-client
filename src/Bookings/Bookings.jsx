import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import Booking from "./Booking";

export default function Bookings() {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user?.email]);
  return (
    <div className=" w-full lg:max-w-full mx-auto shadow-2xl my-8 text-center">
      <h1 className="text-4xl font-bold">
        {user?.displayName} has {bookings.length} bookings
      </h1>
      <div>
        {bookings.map((booking) => (
          <Booking key={booking._id} booking={booking} />
        ))}
      </div>
    </div>
  );
}
