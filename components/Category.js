import React, { useState } from "react";
import AllArts from "@/components/allArts";
import Inventory from "./Inventory";
import ArtistArt from "./ArtistArt";
import soldArtistArt from "./SoldArtistArt";
import Customerbid from "./Customerbid";
import WonBids from "./WonBids";


const categories = ["Inventory", "ArtistArt", "Sold", "On going bid", "Winner"];

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState("Inventory");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-20">
      <div className="flex gap-5">
        {categories.map((category, index) => (
          <button key={index} className={`${selectedCategory === category}  relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold hover:text-white rounded-md shadow-2xl group`} style={{ "width": "180px", "align-self": "center" }} onClick={() => handleCategoryClick(category)}>
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
            <span className="relative">{category}</span>
          </button>
        ))}
      </div>
      {selectedCategory === "Inventory" && <Inventory />}
      {selectedCategory === "ArtistArt" && <ArtistArt />}
      {selectedCategory === "Sold" && <soldArtistArt />}
      {selectedCategory === "On going bid" && <Customerbid />}
      {selectedCategory === "Winner" && <WonBids />}


    </div>
  );
};

export default CategoryList;

