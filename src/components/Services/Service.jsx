import React from "react";
import { Link } from "react-router-dom";

export default function Service({ service }) {
  const { title, image, cost, _id, offer, description } = service;
  return (
    <div className="flex flex-col space-y-4 px-4 py-2 rounded-md shadow-xl">
      <div className="flex-grow ">
        <img src={image} className="w-full h-[300px] rounded-lg " alt="image" />
      </div>
      <div className="my-6 py-4 px-2 flex-grow ">
        <h2 className="text-center text-orange-900 font-semibold text-2xl">
          {title}
        </h2>
        <p className="text-center my-6">price:${cost}</p>
        <p className="font-bold text-slate-400 my-6">offer:{offer}</p>
        <div className=" justify-end">
          <Link
            to={`/checkout/${_id}`}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md"
          >
            Confirm Now
          </Link>
        </div>
      </div>
    </div>
  );
}
