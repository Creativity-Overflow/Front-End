import { useDegitalArt } from "@/hooks/useDigitalArts";
import { useCredits } from "@/hooks/useUpdateCredits";
import React, { useState, useEffect } from "react";
export default function DigitalArts() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [itemModel, setitemModel] = useState({});
  const [magic, setMagic] = useState(true);
  const [newPrice, setNewPrice] = useState("");

  const modalClose = () => {
    setModalOpen(false);
  };

  const openModal = (item) => {
    setModalOpen(true);
    setitemModel(item);
  };
  const { digitalArt, loading, updateDigitalArt } = useDegitalArt();
  const { updateCredits } = useCredits();
  const handleSubmit = async (item) => {
    if (newPrice < item.current_price) {
      alert("your input price is lower than highest bid");
      return;
    }
    const info = { current_price: newPrice };
    await updateDigitalArt(info, item.id);

    modalClose();
  };

  return (
    <>
      <div className="flex flex-row flex-wrap justify-around w-full rounded">
        {loading ? (
          <div class="flex justify-center items-center h-screen">
            <div class="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"></div>
            </div>
          </div>
        ) : (
          <>
            {digitalArt.map((card, index) => (
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
                    <h2 className="title">{card.name}</h2>

                    <p>Status: {card.status}</p>
                    <p>
                      {card.highest_bidder_name}: {card.current_price}
                    </p>
                    <p>{card.artist_name}</p>
                    <button className="btn" onClick={() => openModal(card)}>
                      Place your bid
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center w-full overflow-hidden main-modal h-100 animated fadeIn faster mt-34"
            style={{ background: "rgba(0,0,0,.7)" }}
          >
            <div className="z-50 mx-auto overflow-y-auto bg-white border border-teal-500 rounded shadow-lg modal-container max-w-40rem">
              <div className="flex px-6 py-4 modal-content">
                <div className="w-1/2 pr-4">
                  <img
                    src={itemModel.image}
                    alt="Header Image"
                    className="h-50 w-50"
                  />
                </div>
                <div
                  className="w-1/2 "
                  style={{
                    "align-content": "center",
                    display: "flex",
                    "flex-direction": "column",
                    "justify-content": "space-around",
                  }}
                >
                  <div className="gap-8 text-black">
                    <div className="flex flex-col items-center gap-10 mb-4 space-x-4">
                      <h2 className="mb-4 title">
                        Image Name: {itemModel.name}
                      </h2>
                      <h3 className="mb-4 title">
                        Category: {itemModel.category}
                      </h3>
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
                        className="px-2 py-1 border"
                      />
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
                      onClick={() => handleSubmit(itemModel)}
                      className="p-3 px-4 ml-3 text-white bg-teal-500 rounded-lg focus:outline-none hover:bg-teal-400"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
