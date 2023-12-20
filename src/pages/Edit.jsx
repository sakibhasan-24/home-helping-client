import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";

export default function Edit() {
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const [newInformation, setNewInformation] = useState([]);

  console.log(newInformation);
  useEffect(() => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setNewInformation(data));
  }, [id]);

  const handleEditBookingData = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.customerName.value;
    // console.log("name", name);
    const date = form.date.value;
    const address = form.address.value;
    const phone = form.phone.value;
    const detail = form.details.value;
    const latestBooking = { name, date, address, phone, detail, _id: id };
    fetch(`http://localhost:5000/booking/update/${id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(latestBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.updateInfo);
        //   form.reset();

        alert("Booking Updated");
        //   setNewInformation({...newInformation,data.updatedResult})
      });
    // console.log(name);
  };
  //   console.log(newInformation);

  return (
    <>
      {!user && <Spinner />}
      <div>
        <div>
          <h1 className="text-center text-4xl font-bold">
            edit Booking for {newInformation.customerName}
          </h1>
          <form
            onSubmit={handleEditBookingData}
            className="max-w-4xl mx-auto bg-gray-600 px-6 py-4 rounded-lg shadow-2xl flex flex-col gap-6"
          >
            <input
              type="text"
              name="customerName"
              id="customerName"
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
              readOnly
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
    </>
  );
}
