import React from "react";

export default function About() {
  return (
    <div className="hero min-h-screen max-w-6xl mx-auto">
      <div className="hero-content  flex-col lg:flex-row gap-16">
        <div className="relative lg:w-1/2">
          <img
            src="https://i.ibb.co/sWXHrHC/christopher-burns-Wiu3w-99t-Ng-unsplash.jpg"
            className="w-3/4 rounded-lg shadow-2xl"
          />
          <img
            src="https://i.ibb.co/x3K3G2L/thisisengineering-raeng-v-Eo-MKBd-UIzs-unsplash.jpg"
            className="w-1/2 rounded-lg absolute right-12 top-1/2 border-8 border-white shadow-2xl"
          />
        </div>

        <div className="lg:w-1/2 ">
          <h1 className="text-5xl font-bold">
            About <span className="text-orange-700">Us</span>
          </h1>
          <div className="py-6">
            We have skilled qualified Teams.We have provided
            <p className="flex flex-col text-orange-700  space-y-2 font-semibold">
              <span>Home Cleaning</span>
              <span>Garden Cleaning</span>
              <span>Car Cleaning</span>
              <span>Electronics services</span>
            </p>
          </div>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
