"use client";

import React, { useState } from "react";

export default function App() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [isRideShare, setIsRideShare] = useState(false);
  const [confirmation, setConfirmation] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmation(
      "Your ride from \"" +
        pickup +
        "\" to \"" +
        dropoff +
        "\" has been booked." +
        (isRideShare ? " You chose to share your ride to split payment." : "")
    );
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center p-6 font-sans">
      <header className="w-full max-w-4xl mb-8">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
          Go anywhere with Uber
        </h1>
        <p className="text-lg text-gray-700">
          Book your ride quickly and easily.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-50 p-8 rounded-lg shadow-lg"
        aria-label="Ride booking form"
      >
        <div className="mb-6">
          <label
            htmlFor="pickup"
            className="block text-sm font-semibold mb-2"
          >
            Pickup location
          </label>
          <input
            id="pickup"
            type="text"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="Enter pickup location"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
            aria-required="true"
            aria-describedby="pickup-desc"
          />
          <p id="pickup-desc" className="sr-only">
            Enter the location where you want to be picked up.
          </p>
        </div>

        <div className="mb-6">
          <label
            htmlFor="dropoff"
            className="block text-sm font-semibold mb-2"
          >
            Dropoff location
          </label>
          <input
            id="dropoff"
            type="text"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            placeholder="Enter dropoff location"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
            aria-required="true"
            aria-describedby="dropoff-desc"
          />
          <p id="dropoff-desc" className="sr-only">
            Enter the location where you want to be dropped off.
          </p>
        </div>

        <div className="mb-8 flex items-center">
          <input
            id="rideShare"
            type="checkbox"
            checked={isRideShare}
            onChange={() => setIsRideShare(!isRideShare)}
            className="mr-3 w-5 h-5 rounded border-gray-400 focus:ring-2 focus:ring-black"
          />
          <label htmlFor="rideShare" className="text-sm font-semibold select-none">
            Share my ride to split payment
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          Book Ride
        </button>
      </form>

      {confirmation && (
        <div
          role="alert"
          className="mt-8 max-w-md w-full bg-black text-white p-4 rounded-md shadow-md text-center font-semibold"
        >
          {confirmation}
        </div>
      )}
    </div>
  );
}
