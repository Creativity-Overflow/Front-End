
import React, { useState } from "react";
import AllArts from "@/components/allArts";
import PhysicalArts from "@/components/physicalArts";
import DigitalArts from "@/components/digital";
import Photography from "@/components/photography";


export default function Art() {
  const [showComponent, setShowComponent] = useState("");

  const handleClick = (category) => {
    setShowComponent(category);
  };
  return (
    <>
        <div className="flex flex-col items-center m-4">
          <div className="flex mt-4">
            <button
              className="px-4 py-2 mx-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
              style={{ backgroundColor: "#3b82f6" }}
              onClick={() => handleClick("AllsArts")}
            >
              All Arts
            </button>

            <button
              className="px-4 py-2 mx-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
              style={{ backgroundColor: "#10b981" }}
              onClick={() => handleClick("digitalArts")}
            >
              digitalArts
            </button>
            <button
              className="px-4 py-2 mx-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
              style={{ backgroundColor: "#ef4444" }}
              onClick={() => handleClick("Photography")}
            >
              Photography
            </button>
            <button
              className="px-4 py-2 mx-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
              style={{ backgroundColor: "#ef4444" }}
              onClick={() => handleClick("physicalArt")}
            >
              physicalArt
            </button>
          </div>
        </div>
        {showComponent === "Photography" ? (
          <Photography />
        ) : showComponent === "digitalArts" ? (
          <DigitalArts />
        ) : showComponent === "physicalArt" ? (
          <PhysicalArts />
        ) : (
          <AllArts />
        )}
    </>
  );
}