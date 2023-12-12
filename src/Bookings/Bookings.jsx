import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import Booking from "./Booking";
import Swal from "sweetalert2";
export default function Bookings() {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  console.log(user?.email);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/booking/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remainging = bookings.filter((booking) => booking._id !== id);
            setBookings(remainging);
            if (data.deletedCount > 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your booking has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className=" w-full lg:max-w-full mx-auto shadow-2xl my-8 text-center">
      <h1 className="text-4xl font-bold">
        {user?.displayName} has {bookings.length} bookings
      </h1>
      <div>
        {bookings.map((booking) => (
          <Booking
            key={booking._id}
            booking={booking}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
