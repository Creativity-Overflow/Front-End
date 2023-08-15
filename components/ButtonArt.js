import React, { useState } from "react";
import { useResource } from "@/hooks/useResousrce";

const ButtonArt = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [artData, setArtData] = useState({
    name: "",
    description: "",
    category: "",
    end_date: "",
    // image: null,
  });

  const modalClose = () => {
    setModalOpen(false);
    // Reset the input fields when modal is closed
    setArtData({
      name: "",
      description: "",
      category: "",
      end_date: "",
    //   image: null,
    });
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const { AddArt } = useResource();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArtData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

//   const handleImageUpload = (e) => {
//     const imageFile = e.target.files[0];
//     setArtData((prevData) => ({
//       ...prevData,
//       image: imageFile,
//     }));
//   };

  const handleAddArt = () => {
    // Perform validation on artData before adding
    if (
      artData.name &&
      artData.description &&
      artData.category &&
      artData.end_date 
    //   artData.image
    ) {
      AddArt(artData);
      console.log(artData); // Assuming addArt expects an object with artwork data
      modalClose(); // Close the modal after adding
      // You can update your UI state here to reflect the newly added artwork data
    } else {
      // Handle validation error
      console.log("Please fill in all the fields");
    }
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="p-2 text-2xl font-bold text-white bg-blue-500 rounded"
      >
        Open Modal
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center w-full overflow-hidden main-modal h-100 animated fadeIn faster"
          style={{ background: "rgba(0,0,0,.7)" }}
        >
          <div className="z-50 w-11/12 mx-auto overflow-y-auto bg-white border border-teal-500 rounded shadow-lg modal-container md:max-w-md">
            <div className="px-6 py-4 text-left modal-content">
              {/* ... (other modal content) ... */}
              <div class="py-8 text-base leading-6 space-y-4 text-black sm:text-lg sm:leading-7 bg-white">
                <div class="flex flex-col">
                  <label class="leading-loose text-gray-800 font-medium">
                    Image Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={artData.name}
                    onChange={handleInputChange}
                    class="px-4 py-2 mt-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-700"
                    placeholder="Image Name"
                  />
                </div>
                <div class="flex flex-col">
                  <label class="leading-loose">Category</label>
                  <select
                    name="category"
                    value={artData.category}
                    onChange={handleInputChange}
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option value="physical_art">Physical Art</option>
                    <option value="digital_art">DIGITAL</option>
                    <option value="photography">Photography</option>
                  </select>
                </div>
                <div class="flex flex-col">
                  <label class="leading-loose">Description</label>
                  <input
                    type="text"
                    name="description"
                    value={artData.description}
                    onChange={handleInputChange}
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Description"
                  />
                </div>
                <div class="flex items-center space-x-4">
                  <div class="flex flex-col">
                    <label class="leading-loose">End</label>
                    <div class="relative focus-within:text-gray-600 text-gray-400">
                      <input
                        type="datetime-local"
                        name="end_date"
                        value={artData.end_date}
                        onChange={handleInputChange}
                        class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="End Date"
                      />
                      <div class="absolute left-3 top-2">
                        <svg
                          class="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* SVG path for calendar icon */}
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div class="flex flex-col">
                  <label class="leading-loose">Upload Image</label>
                  <input
                    type="file"
                    name="image"
                    onChange={handleImageUpload}
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  />
                </div> */}
              </div>
              <div className="flex justify-end pt-2">
                <button
                  onClick={modalClose}
                  className="p-3 px-4 text-black bg-gray-400 rounded-lg focus:outline-none modal-close hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddArt}
                  className="p-3 px-4 ml-3 text-white bg-teal-500 rounded-lg focus:outline-none hover:bg-teal-400"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonArt;
