import React, { useState } from "react";
export default function CreateForm() {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div class="min-h-screenpy-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto border">
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
                <div className="flex flex-col">
                  <label className="leading-loose">Category</label>
                  <select 
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    
                  >
                    <option value="" disabled selected>Select a category</option>
                    <option value="">AI</option>
                    <option value="">DIGITAL</option>
                    <option value="">Photography</option>
                  </select>
                </div>
                <div class="flex flex-col">
                  <label class="leading-loose">description</label>
                  <input
                    type="text"
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="description"
                  />
                </div>
                <div class="flex items-center space-x-4">
                  <div class="flex flex-col">
                    <label class="leading-loose">End</label>
                    <div class="relative focus-within:text-gray-600 text-gray-400">
                      <input
                        type="text"
                        class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="26/02/2020"
                      />
                      <div class="absolute left-3 top-2">
                        <svg
                          class="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <label
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  for="file_input"
                >
                  Upload Image
                </label>
                <input
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                ></input>
              </div>

              <div className="pt-4 flex items-center space-x-4 bg-slate-500">
                <button
                  onClick={closeModal}
                  className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  Cancel
                </button>
                <button className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                  Create
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center py-12">
        <button
          onClick={openModal}
          className="bg-slate-500 text-white p-2 rounded text-2xl font-bold"
        >
          Add Art
        </button>
      </div>
    </>
  );
}