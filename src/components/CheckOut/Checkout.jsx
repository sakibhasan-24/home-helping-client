import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

export default function Checkout() {
  const { user } = useContext(AuthContext);
  const services = useLoaderData();
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-center font-bold text-2xl my-6">
        Checkout for{" "}
        <span className="text-orange-900 text-4xl">{services.title}</span>
      </h1>
      <div>
        <div>
          <img
            src={services.image}
            alt="image"
            className="w-1/2 mx-auto rounded-lg"
          />
        </div>
        <div className="mx-auto max-w-4xl text-center my-12 ">
          <p className="text-2xl font-semibold">price : ${services.cost}</p>
          <p>offer:{services.offer}</p>
          <p>{services.description}</p>
          <div className="max-w-2xl mx-auto ">
            {services.facilities.map((service, idx) => (
              <p
                className="bg-blue-700 text-white px-4 py-2 rounded-md text-center my-4 w-1/2 mx-auto"
                key={idx}
              >
                {service}
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* form section */}
      <div>
        <h1 className="text-center text-4xl font-bold">Add Booking</h1>
        <form className="max-w-4xl mx-auto bg-gray-600 px-6 py-4 rounded-lg shadow-2xl flex flex-col gap-6">
          <input
            type="text"
            name="name"
            id="name"
            className="w-3/4 mx-auto px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-300"
            placeholder="name"
          />
          <input
            type="email"
            name="email"
            id="email"
            className="w-3/4 mx-auto px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-300"
            defaultValue={user?.email}
          />
          <input
            className="w-3/4 mx-auto px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-300"
            type="date"
            name="date"
            id="date"
          />
          <input
            type="text"
            name="address"
            id="address"
            className="w-3/4 mx-auto px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-300"
            placeholder="address"
          />
          <input
            type="text"
            className="w-3/4 mx-auto px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-300"
            name="phone"
            id="phone"
            placeholder="phone"
          />
          <textarea
            className="w-3/4 mx-auto px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-300"
            name="details"
            id="details"
            cols="30"
            rows="10"
          ></textarea>
          <input
            type="submit"
            value="add"
            className="bg-gray-700 px-6 py-2 rounded-md w-3/4 mx-auto cursor-pointer font-bold text-xl"
          />
        </form>
      </div>
    </div>
  );
}
