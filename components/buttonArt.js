import React, { useState } from "react";
import { useResource } from "@/hooks/useResousrce";

const ButtonArt = (props) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const [addArts, setaddArts] = useState("");

    const modalClose = () => {
        setModalOpen(false);
    };

    const openModal = () => {
        setModalOpen(true);
    };
    const { addArt } = useResource()
    const handleClick = () => {
        const newObj = {
            Name: "Image Name",
            Description: "description",
            Category: "Category",
            Image: "Upload Image",





        }

    }

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
                            {/* <div className="flex items-center justify-between pb-3"> */}
                            {/* <img
                  src={props.image}
                  alt="Header Image"
                  className="w-12 h-12"
                /> */}

                            {/* </div> */}
                            <div class="py-8 text-base leading-6 space-y-4 text-black sm:text-lg sm:leading-7 bg-white">
                                <div class="flex flex-col">
                                    <label class="leading-loose text-gray-800 font-medium">Image Name</label>
                                    <input
                                        type="text"
                                        name="Event title"
                                        id="Event title"
                                        value={addArts}
                                        onChange={(e) => setaddArts(e.target.value)}
                                        class="px-4 py-2 mt-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-700"
                                        placeholder="Event title"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="leading-loose">Category</label>

                                    <select
                                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    >
                                        <option value="" disabled selected="">Select a category</option>
                                        <option value="AI">AI</option>
                                        <option value="DIGITAL">DIGITAL</option>
                                        <option value="Photography">Photography</option>
                                    </select>
                                </div>

                                <div class="flex flex-col">
                                    <label class="leading-loose">description</label>
                                    <input
                                        value={addArts}
                                        onChange={(e) => setaddArts(e.target.value)}
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
                                                value={addArts}
                                                onChange={(e) => setaddArts(e.target.value)}
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
                                //   for="file_input"
                                >
                                    Upload Image
                                </label>
                                <input
                                    value={addArts}
                                    onChange={(e) => setaddArts(e.target.value)}
                                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    id="file_input"
                                    type="file"
                                ></input>
                            </div>

                            <div className="flex justify-end pt-2">
                                <button
                                    onClick={modalClose}
                                    className="p-3 px-4 text-black bg-gray-400 rounded-lg focus:outline-none modal-close hover:bg-gray-300"
                                >
                                    Cancel
                                </button>
                                <button
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
