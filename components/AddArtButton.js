import React, { useState } from "react";

const AddArtButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const modalClose = () => {
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div>
        {isModalOpen && (
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 bg-slate-500">
              <div class="flex flex-col">
                <label class="leading-loose">Image Name</label>
                <input
                  type="text"
                  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder="Event title"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={modalClose}
                  className="p-3 px-4 text-black bg-gray-400 rounded-lg focus:outline-none modal-close hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button className="p-3 px-4 ml-3 text-white bg-teal-500 rounded-lg focus:outline-none hover:bg-teal-400">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <button
        onClick={openModal}
        className="p-2 text-2xl font-bold text-white bg-blue-500 rounded"
      >
        Open Modal
      </button>
    </>
  );
};

export default AddArtButton;
