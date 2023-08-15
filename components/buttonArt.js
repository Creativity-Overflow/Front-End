// import React, { useState } from "react";
// import { useResource } from "@/hooks/useResousrce";

// const ButtonArt = (props) => {
//     const [isModalOpen, setModalOpen] = useState(false);

//     const [addArts, setaddArts] = useState("");

//     const modalClose = () => {
//         setModalOpen(false);
//     };

//     const openModal = () => {
//         setModalOpen(true);
//     };
//     const { addArt } = useResource()
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setArtData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };
//     const handleImageUpload = (e) => {
//         const imageFile = e.target.files[0];
//         setArtData((prevData) => ({
//             ...prevData,
//             image: imageFile,
//         }));
//     };
//     const handleAddArt = () => {
//         // Perform validation on artData before adding
//         if (artData.name && artData.description && artData.category && artData.image) {
//             addArt(artData); // Assuming addArt expects an object with artwork data
//             modalClose(); // Close the modal after adding
//         } else {
//             // Handle validation error
//             console.log("Please fill in all the fields");
//         }
//     };

    

//     return (
//         <div>
//             <button
//                 onClick={openModal}
//                 className="p-2 text-2xl font-bold text-white bg-blue-500 rounded"
//             >
//                 Open Modal
//             </button>

//             {isModalOpen && (
//                 <div
//                     className="fixed inset-0 z-50 flex items-center justify-center w-full overflow-hidden main-modal h-100 animated fadeIn faster"
//                     style={{ background: "rgba(0,0,0,.7)" }}
//                 >
//                     <div className="z-50 w-11/12 mx-auto overflow-y-auto bg-white border border-teal-500 rounded shadow-lg modal-container md:max-w-md">
//                         <div className="px-6 py-4 text-left modal-content">
//                             {/* <div className="flex items-center justify-between pb-3"> */}
//                             {/* <img
//                   src={props.image}
//                   alt="Header Image"
//                   className="w-12 h-12"
//                 /> */}

//                             {/* </div> */}
//                             <div class="py-8 text-base leading-6 space-y-4 text-black sm:text-lg sm:leading-7 bg-white">
//                                 <div class="flex flex-col">
//                                     <label class="leading-loose text-gray-800 font-medium">Image Name</label>
//                                     <input
//                                         type="text"
//                                         name="Event title"
//                                         id="Event title"
//                                         value={addArts}
//                                         onChange={(e) => setaddArts(e.target.value)}
//                                         class="px-4 py-2 mt-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-700"
//                                         placeholder="Event title"
//                                     />
//                                 </div>
//                                 <div className="flex flex-col">
//                                     <label className="leading-loose">Category</label>

//                                     <select
//                                         className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//                                     >
//                                         <option value="" disabled selected="">Select a category</option>
//                                         <option value="AI">AI</option>
//                                         <option value="DIGITAL">DIGITAL</option>
//                                         <option value="Photography">Photography</option>
//                                     </select>
//                                 </div>

//                                 <div class="flex flex-col">
//                                     <label class="leading-loose">description</label>
//                                     <input
//                                         value={addArts}
//                                         onChange={(e) => setaddArts(e.target.value)}
//                                         type="text"
//                                         class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//                                         placeholder="description"
//                                     />
//                                 </div>
//                                 <div class="flex items-center space-x-4">
//                                     <div class="flex flex-col">
//                                         <label class="leading-loose">End</label>
//                                         <div class="relative focus-within:text-gray-600 text-gray-400">
//                                             <input
//                                                 value={addArts}
//                                                 onChange={(e) => setaddArts(e.target.value)}
//                                                 type="text"
//                                                 class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//                                                 placeholder="26/02/2020"
//                                             />

//                                             <div class="absolute left-3 top-2">
//                                                 <svg
//                                                     class="w-6 h-6"
//                                                     fill="none"
//                                                     stroke="currentColor"
//                                                     viewBox="0 0 24 24"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                 >
//                                                     <path
//                                                         stroke-linecap="round"
//                                                         stroke-linejoin="round"
//                                                         stroke-width="2"
//                                                         d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                                                     ></path>
//                                                 </svg>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <label
//                                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                                 //   for="file_input"
//                                 >
//                                     Upload Image
//                                 </label>
//                                 <input
//                                     value={addArts}
//                                     onChange={(e) => setaddArts(e.target.value)}
//                                     class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
//                                     id="file_input"
//                                     type="file"
//                                 ></input>
//                             </div>

//                             <div className="flex justify-end pt-2">
//                                 <button
//                                     onClick={modalClose}
//                                     className="p-3 px-4 text-black bg-gray-400 rounded-lg focus:outline-none modal-close hover:bg-gray-300"
//                                 >
//                                     Cancel
//                                 </button>
//                                 <button
//                                 onClick={handleAddArt}
//                                     className="p-3 px-4 ml-3 text-white bg-teal-500 rounded-lg focus:outline-none hover:bg-teal-400"
//                                 >
//                                     Confirm
//                                 </button>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     )
//   }
// export default ButtonArt;
// import React, { useState } from "react";
// import { useResource } from "@/hooks/useResousrce";

// const ButtonArt = () => {
//     const [isModalOpen, setModalOpen] = useState(false);
//     const [artData, setArtData] = useState({
//         name: "",
//         description: "",
//         category: "",
//         image: null,
//     });

//     const modalClose = () => {
//         setModalOpen(false);
//         // Reset the input fields when modal is closed
//         setArtData({
//             name: "",
//             description: "",
//             category: "",
//             image: null,
//         });
//     };

//     const openModal = () => {
//         setModalOpen(true);
//     };

//     const { addArt } = useResource();

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setArtData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleImageUpload = (e) => {
//         const imageFile = e.target.files[0];
//         setArtData((prevData) => ({
//             ...prevData,
//             image: imageFile,
//         }));
//     };

//     const handleAddArt = () => {
//         // Perform validation on artData before adding
//         if (artData.name && artData.description && artData.category && artData.image) {
//             addArt(artData); // Assuming addArt expects an object with artwork data
//             modalClose(); // Close the modal after adding
//             // You can update your UI state here to reflect the newly added artwork data
//         } else {
//             // Handle validation error
//             console.log("Please fill in all the fields");
//         }
//     };

//     return (
//         <div>
//             <button
//                 onClick={openModal}
//                 className="p-2 text-2xl font-bold text-white bg-blue-500 rounded"
//             >
//                 Open Modal
//             </button>

//             {isModalOpen && (
//                 <div
//                     className="fixed inset-0 z-50 flex items-center justify-center w-full overflow-hidden main-modal h-100 animated fadeIn faster"
//                     style={{ background: "rgba(0,0,0,.7)" }}
//                 >
//                     <div className="z-50 w-11/12 mx-auto overflow-y-auto bg-white border border-teal-500 rounded shadow-lg modal-container md:max-w-md">
//                         <div className="px-6 py-4 text-left modal-content">

//                             {/* ... (other modal content) ... */}
//                             <button
//                                 onClick={modalClose}
//                                 className="p-3 px-4 text-black bg-gray-400 rounded-lg focus:outline-none modal-close hover:bg-gray-300"
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 onClick={handleAddArt}
//                                 className="p-3 px-4 ml-3 text-white bg-teal-500 rounded-lg focus:outline-none hover:bg-teal-400"
//                             >
//                                 Confirm
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ButtonArt;
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
