import { useResource } from "@/hooks/useResousrce";
import React, { useState, useEffect } from "react";
export default function Photography() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [itemModel, setitemModel] = useState({});
  const [magic, setMagic] = useState(true);
  const [newPrice, setNewPrice] = useState("");

  const modalClose = () => {
    setModalOpen(false);
  };

  const openModal = (item) => {
    setModalOpen(true);
    setitemModel(item)
  };
  const { updatePrice, getPhotography } = useResource();
  const [newart, setNewArt] = useState(undefined)
  const handleSubmit = async (item) => {

    if(newPrice<item.current_price){
      alert("your input price is lower than highest bid")
      return 
    }
    await updatePrice(item,newPrice)

    modalClose();
    const x = await getPhotography()
    setNewArt(x)
    setMagic(!magic)
  };
  useEffect(() => {
    async function amjad() {
      const x = await getPhotography()
      setNewArt(x)
    }
    amjad()

  }, [magic, setMagic])
  return (
    <>
      <div className="flex flex-row flex-wrap justify-around w-full rounded">
        {!newart ? <h1>loading..</h1> : <>
          {newart.map((card, index) => (
            <div key={index} className="w-1/5 h-full m-2">
              <div className={"card"} style={{ backgroundImage: `url(${card.image})`, backgroundSize: "cover", height: "100%", width: "90%" }}>
                <div className="image"></div>
                <div className="content">
                  <h2 className="title">{card.name}</h2>

                  <p>Status: {card.status}</p>
                  <p>{card.highest_bidder_name}: {card.current_price}</p>
                  <p>{card.artist_name}</p>
                  <button className="btn" onClick={() => openModal(card)}>
                    Place your bid
                  </button>
                </div>
              </div>
            </div>
          ))}</>}
        {isModalOpen && (
        <div
          className="main-modal fixed w-full h-100  inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster mt-34"
          style={{ background: "rgba(0,0,0,.7)" }}
        >
          <div className="border border-teal-500 modal-container bg-white max-w-40rem mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4  px-6 flex">
              <div className="w-1/2 pr-4">
                <img
                  src={itemModel.image}
                  alt="Header Image"
                  className="h-50 w-50"
                />
              </div>
              <div className="w-1/2 " style={{
                "align-content": "center",
                "display": "flex",
                "flex-direction": "column",
                "justify-content": "space-around"
              }}>
                <div className="text-black gap-8">
                  <div className="flex flex-col gap-10 items-center space-x-4 mb-4">
                  <h2 className="title mb-4">Image Name: {itemModel.name}</h2>
                  <h3 className="title mb-4">Category: {itemModel.category}</h3>
                    <p className="mr-2">
                      Current price: {itemModel.current_price}
                    </p>
                    <p className="mr-2">
                      Highest Bidder: {itemModel.highest_bidder_name}
                    </p>
                    <input
                      type="number"
                      placeholder="Enter bid amount"
                      value={newPrice}
                      onChange={(e) => setNewPrice(e.target.value)}
                      className="border px-2 py-1"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={modalClose}
                    className="focus:outline-none modal-close px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleSubmit(itemModel)}
                    className="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div >
      )
      }
      </div>

    </>
  );
}