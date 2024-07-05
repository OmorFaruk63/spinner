"use client";
import React, { useState } from "react";

const Spinner = () => {
  const [angle, setAngle] = useState(0);

  const spin = () => {
    const newAngle = Math.floor(Math.random() * 360) + 3600; // Ensure at least 10 full spins
    setAngle(newAngle);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-teal-500">
      <div className="relative w-64 h-64">
        <div
          className="absolute w-full h-full border-4 border-solid border-red-700 overflow-hidden"
          style={{
            transform: `rotate(${angle}deg)`,
            transition: "transform 4s cubic-bezier(0.25, 0.1, 0.25, 1)",
            borderRadius: "50%",
          }}
        >
          <div className="absolute w-1/2 h-1/2 bg-teal-200 top-0 left-0">
            <div className="w-full h-full flex items-center justify-center">
              1
            </div>
          </div>
          <div className="absolute w-1/2 h-1/2 bg-teal-300 top-0 right-0">
            <div className="w-full h-full flex items-center justify-center">
              2
            </div>
          </div>
          <div className="absolute w-1/2 h-1/2 bg-teal-400 bottom-0 left-0">
            <div className="w-full h-full flex items-center justify-center">
              3
            </div>
          </div>
          <div className="absolute w-1/2 h-1/2 bg-teal-500 bottom-0 right-0">
            <div className="w-full h-full flex items-center justify-center">
              4
            </div>
          </div>
          <div
            className="absolute w-1/2 h-1/2 bg-teal-600 top-0 left-0"
            style={{ transform: "rotate(90deg)" }}
          >
            <div className="w-full h-full flex items-center justify-center">
              5
            </div>
          </div>
          <div
            className="absolute w-1/2 h-1/2 bg-teal-700 top-0 right-0"
            style={{ transform: "rotate(90deg)" }}
          >
            <div className="w-full h-full flex items-center justify-center">
              6
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={spin}
        className="mt-8 px-4 py-2 bg-teal-700 text-white rounded"
      >
        SPIN
      </button>
    </div>
  );
};

export default Spinner;
