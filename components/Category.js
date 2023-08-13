import React, { useState } from "react";
import Inventory from "./Inventory";
import ArtistArt from "./ArtistArt";

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
          <div
            key={index}
            className={`${
              selectedCategory === category ? "bg-blue-600" : "bg-blue-500"
            } text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
            {console.log(category)}{" "}
          </div>
        ))}
      </div>
      {selectedCategory === "Inventory" && <Inventory />}
      {selectedCategory === "ArtistArt" && <ArtistArt />}
    </div>
  );
};

export default CategoryList;
