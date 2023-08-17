import { useInventory } from "@/hooks/useInventory";
import React, { useState, useEffect } from "react";

// import Modal from "./Modal";
export default function Inventory() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [itemModel, setitemModel] = useState({});
  const userData = localStorage.getItem('userData');
  const [magic, setMagic] = useState(true);
  const [name, setNewName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setNewCategory] = useState("");
  const [image, setImage] = useState("");
  const { data, loading, createInventoryElement, updateInventory } = useInventory();


  const modalClose = () => {
    setModalOpen(false);
  };

  const openModal = (item) => {
    setModalOpen(true);
    setitemModel(item)
  };
  const [newart, setNewArt] = useState(undefined)

  const handleSubmit = async (item) => {
    let url = "";
    if (image) {
      const sasToken = "sp=racwdli&st=2023-08-15T16:25:59Z&se=2023-08-18T00:25:59Z&sv=2022-11-02&sr=c&sig=vDctGTXrq7uvQyvZ4AxEuALtDH6xs%2FOBpXCBSLy38Ms%3D";
      try {
        url = await uploadImageToAzure(image, sasToken);
        console.log(url);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }

    const body = {
      name: name,
      description: description,
      category: category,
      image: url,
      artist: userData.user_id,
    };

    await updateInventory(body, item.id);
    setModalOpen(false);
  };






  // const { getInvontry } = useResource();
  return (
    <>
      <div className="flex flex-row flex-wrap justify-around w-full rounded">
        {loading ? <h1>loading..</h1> : <>

          {data.map((card, index) => (
            <div key={index} className="w-1/5 h-full m-2">
              <div className={"card"} style={{ backgroundImage: `url(${card.image})`, backgroundSize: "cover", height: "100%", width: "90%" }}>
                <div className="image"></div>
                <div className="content">
                  <h2 className="title">{card.name}</h2>
                  <p>{card.category}</p>
                  {/* <p>{card.highest_bidder_name} {card.current_price}</p> */}
                  {/* <p>{card.artist_name}</p> */}
                  <button className="btn" onClick={() => openModal(card)}>
                    Place your bid
                  </button>
                </div>
              </div>
            </div>
          ))}
        </>}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center w-full overflow-hidden main-modal h-100 animated fadeIn faster mt-34"
            style={{ background: "rgba(0,0,0,.7)" }}
          >
            <div className="z-50 w-11/12 mx-auto overflow-y-auto bg-white border border-teal-500 rounded shadow-lg modal-container md:max-w-md">
              <div className="flex px-6 py-4 text-left modal-content">
                <div className="w-1/2">
                  <img
                    src={itemModel.image}
                    alt="Header Image"
                    className="h-50 w-50"
                  />
                </div>
                <div className="w-1/2 px-6">
                  <div className="text-black">
                    <div className="mb-4">
                      <h2 className="title">Name: {itemModel.name}</h2>
                      <input
                        type="text"
                        placeholder="Enter New Name"
                        value={name}
                        onChange={(e) => setNewName(e.target.value)}
                        className="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-900 sm:text-sm focus:outline-none"
                      />
                    </div>
                    <div className="mb-4">
                      <p>Description: {itemModel.description}</p>
                      <input
                        type="text"
                        placeholder="Enter New Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-900 sm:text-sm focus:outline-none"
                      />
                    </div>
                    <div className="mb-4">
                      <h3 className="title">Category: {itemModel.category}</h3>
                      <select
                        name="category"
                        value={category}
                        onChange={(e) => setNewCategory(e.target.value)}
                        className="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-900 sm:text-sm focus:outline-none"
                      >
                        <option value="" disabled>
                          Select a category
                        </option>
                        <option value="physical_art">Physical Art</option>
                        <option value="digital_art">DIGITAL</option>
                        <option value="photography">Photography</option>
                      </select>
                    </div>
                  </div>
                </div>
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
                  onClick={() => handleSubmit(itemModel)}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

    </>
  );
}