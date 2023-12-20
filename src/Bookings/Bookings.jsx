import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import Booking from "./Booking";
import Swal from "sweetalert2";
export default function Bookings() {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [getOnlyDataCount, setGetOnlyDataCount] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [numberOfItemPerPage, setNumberOfItemPerPage] = useState(3);
  // console.log(user?.email);
  const url = `http://localhost:5000/bookings?email=${user?.email}&page=${currentPage}&size=${numberOfItemPerPage}`;
  // console.log(url);
  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        // console.log(data);
      });
  }, [url]);
  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setGetOnlyDataCount(data);
        // console.log(data);
      });
  }, [url]);

  // paginations
  // per page 3
  // setcurrent page
  // find total page

  const totalPage = Math.ceil(getOnlyDataCount.length / numberOfItemPerPage);
  const pageList = [...Array(totalPage).keys()];
  console.log("pages", pageList);
  const handleCurrentPage = (page) => {
    // console.log(page);
    setCurrentPage(page);
  };
  const handleCurrentPageChange = (e) => {
    setNumberOfItemPerPage(parseInt(e.target.value));
    setCurrentPage(0);
  };

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
        {user?.displayName} has {getOnlyDataCount.length} bookings
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
      {/* paginations */}
      <div className="bg-red-400 p-4 rounded-lg">
        {pageList.map((btn) => (
          <button
            style={{ backgroundColor: currentPage === btn ? "red" : "black" }}
            onClick={() => handleCurrentPage(btn)}
            className="bg-slate-900 text-white p-2 rounded-lg ml-4"
            key={btn}
          >
            {btn}
          </button>
        ))}
        <select
          name=""
          id=""
          value={numberOfItemPerPage}
          onChange={handleCurrentPageChange}
          className="ml-6"
        >
          <option value="1"> 1 </option>
          <option value="2"> 2 </option>
          <option value="3"> 3 </option>
          <option value={getOnlyDataCount.length}>All </option>
        </select>
      </div>
    </div>
  );
}
