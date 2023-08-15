
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


        <div className="flex mt-4 gap-10">
          <button className=" relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold hover:text-white rounded-md shadow-2xl group" style={{ "width": "180px", "align-self": "center" }} onClick={() => handleCategoryClick("AllsArts")}>
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-20  bg-gradient-to-br from-pink-200 via-purple-700 to-blue-200 group-hover:opacity-100"></span>
            {/* <!-- Top glass gradient --> */}
            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
            {/* <!-- Bottom gradient --> */}
            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
            {/* <!-- Left gradient --> */}
            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
            {/* <!-- Right gradient --> */}
            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
            <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
            <span className="relative">All</span>
          </button>

          <button className=" relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold hover:text-white rounded-md shadow-2xl group" style={{ "width": "180px", "align-self": "center" }} onClick={() => handleCategoryClick("digitalArts")}>
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-20  bg-gradient-to-br from-pink-200 via-purple-700 to-blue-200 group-hover:opacity-100"></span>
            {/* <!-- Top glass gradient --> */}
            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
            {/* <!-- Bottom gradient --> */}
            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
            {/* <!-- Left gradient --> */}
            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
            {/* <!-- Right gradient --> */}
            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
            <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
            <span className="relative">DigitalArts</span>
          </button>
          <button className=" relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold hover:text-white rounded-md shadow-2xl group" style={{ "width": "180px", "align-self": "center" }} onClick={() => handleCategoryClick("Photography")}>
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-20  bg-gradient-to-br from-pink-200 via-purple-700 to-blue-200 group-hover:opacity-100"></span>
            {/* <!-- Top glass gradient --> */}
            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
            {/* <!-- Bottom gradient --> */}
            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
            {/* <!-- Left gradient --> */}
            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
            {/* <!-- Right gradient --> */}
            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
            <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
            <span className="relative">Photography</span>
          </button>
          <button className=" relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold hover:text-white rounded-md shadow-2xl group" style={{ "width": "180px", "align-self": "center" }} onClick={() => handleCategoryClick("physicalArt")}>
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-20  bg-gradient-to-br from-pink-200 via-purple-700 to-blue-200 group-hover:opacity-100"></span>
            {/* <!-- Top glass gradient --> */}
            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
            {/* <!-- Bottom gradient --> */}
            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
            {/* <!-- Left gradient --> */}
            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
            {/* <!-- Right gradient --> */}
            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
            <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
            <span className="relative">PhysicalArt</span>
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
