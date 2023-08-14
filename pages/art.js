
import React, { useState } from "react";
import AllArts from "@/components/allArts";
import PhysicalArts from "@/components/physicalArts";
import DigitalArts from "@/components/digital";
import Photography from "@/components/photography";

export default function Art() {
  const categories = ["AllsArts", "digitalArts", "Photography", "physicalArt"];
  const [showComponent, setShowComponent] = useState("");

  const handleCategoryClick = (category) => {
    setShowComponent(category === showComponent ? null : category);
  };
  return (
    <>
      <div className="flex flex-col items-center m-4">
        <div className="flex mt-4">
          <button
            className="px-4 py-2 mx-2 font-bold text-white "
            onClick={() => handleCategoryClick("AllsArts")}
          >
            <a
              href="#_"
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">AllsArts</span>
              </span>
            </a>
          </button>

          <button
            className="px-4 py-2 mx-2 font-bold text-white"
            onClick={() => handleCategoryClick("digitalArts")}
          >
            <a
              href="#_"
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">digitalArts</span>
              </span>
            </a>
          </button>
          <button
            className="px-4 py-2 mx-2 font-bold text-white"
            onClick={() => handleCategoryClick("Photography")}
          >
            <a
              href="#_"
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">Photography</span>
              </span>
            </a>
          </button>
          <button
            className="px-4 py-2 mx-2 font-bold text-white"
            onClick={() => handleCategoryClick("physicalArt")}
          >
            <a
              href="#_"
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">physicalArt</span>
              </span>
            </a>
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
