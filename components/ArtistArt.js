import { useResource } from "@/hooks/useResousrce";

import React, { useState, useEffect } from "react";


export default function ArtistArt() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [itemModel, setitemModel] = useState({});
  const [magic, setMagic] = useState(true);
  // const [newPrice, setNewPrice] = useState("");
  const [name, setNewName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setNewCategory] = useState("");


  const { updateArtistArt, getArtResource } = useResource();

  const [newart, setNewArt] = useState(undefined)


  const handleSubmit = async (item) => {
    await updateArtistArt(item, name, description, category)
    // console.log(updateArtistArt)
    modalClose();
    const x = await getArtResource()
    setNewArt(x)
    setMagic(!magic)
  };
  useEffect(() => {
    async function amjad() {
      const x = await getArtResource()
      setNewArt(x)
    }
    amjad()

  }, [magic, setMagic])



  const modalClose = () => {
    setModalOpen(false);
  };

  const openModal = (item) => {
    setModalOpen(true);
    setitemModel(item);
  };

  return (
    <>
      {/* <main className="page-content"> */}
      <div className="flex flex-row flex-wrap justify-around w-full rounded">
        {!newart ? <h1>loading..</h1> : <>
          {newart.map((card, index) => (
            <div key={index} className="w-1/5 h-full m-2">
              <div
                className={"card"}
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: "cover",
                  height: "100%",
                  width: "90%",
                }}
              >
                <div className="image"></div>
                <div className="content">
                  <h2 className="title">Name :{card.name}</h2>
                  <p>Category : {card.category}</p>
                  <p>
                    Highest Bidder : {card.highest_bidder_name}
                  </p>
                  <p>
                    Description : {card.description}
                  </p>
                  <p>
                    Current Price : {card.current_price}
                  </p>
                  {/* <p>{card.artist_name}</p> */}
                  <button className="btn" onClick={() => openModal(card)}>
                    Place your bid
                  </button>
                </div>
              </div>
            </div>
          ))}
        </>}
      </div>

      {isModalOpen && (
        <div
          className="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster mt-34"
          style={{ background: "rgba(0,0,0,.7)" }}
        >
          <div className="border border-teal-500 modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              <div className="flex justify-between items-center pb-3">
                <img
                  src={itemModel.image}
                  alt="Header Image"
                  className="h-50 w-50"
                />
              </div>

              <div className="text-black">
                <div>
                  <h2 className="title">Name : {itemModel.name}</h2>
                  <input
                    type="text"
                    placeholder="Enter New Name"
                    value={name}
                    onChange={(e) => setNewName(e.target.value)}

                  />
                </div>
                <div className="copy">
                  <p>Description : {itemModel.description}</p>
                  <input
                    type="text"
                    placeholder="Enter New Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}

                  />
                </div>

                <div>
                  <h3 className="title">Category : {itemModel.category}</h3>
                  <select
                    name="category"
                    value={category}
                    onChange={(e) => setNewCategory(e.target.value)}
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
              </div>




              <div className="flex justify-end pt-2">
                <button
                  onClick={modalClose}
                  className="focus:outline-none modal-close px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300"
                >
                  Cancel
                </button>

                <button className="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400" onClick={() => handleSubmit(itemModel)}>
                  Update
                </button>
                
              </div>
            </div>
          </div>
        </div>
      )}
      {/* </main> */}
    </>
  );
}