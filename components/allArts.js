
import { useAuth } from "@/contexts/auth";

import { useResource } from "@/hooks/useResousrce";
import React, { useState } from "react";

// import Modal from "./Modal";
export default function AllArts() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [itemModel, setitemModel] = useState({});

  const [newPrice, setNewPrice] = useState("");
  // const{updatePrice}=useAuth()


  const modalClose = () => {
    setModalOpen(false);
  };

  const openModal = (item) => {
    setModalOpen(true);
    setitemModel(item);
  };

  const { getArts, loading,updatePrice} = useResource();
  const handleSubmit = async (item) => {
    // event.preventDefault();
    // const newPrice=event.target.newprice.value;
    updatePrice(item,newPrice)
    modalClose();
  };

  return (
    <>
      <div className="flex flex-row flex-wrap justify-around w-full rounded">
        {getArts.map((card, index) => (
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
                <p>{card.category}</p>

                <p>
                  {card.highest_bidder_name} {card.current_price}
                </p>
                <p>{card.artist_name}</p>
                <button className="btn" onClick={() => openModal(card)}>
                  Place your bid
                </button>
              </div>
            </div>
          </div>
        ))}
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
                    <h2 className="title">
                      Image Name:{"    "}
                      {itemModel.name}
                    </h2>
                  </div>


                  <div>
                    <h3 className="title">
                      Category:{"  "}
                      {itemModel.category}
                    </h3>
                  </div>
                  <div>
                    <p>
                      {itemModel.highest_bidder_name}Current price{"   "}
                      {itemModel.current_price}
                    </p>
                    <input
                      type="number"
                      placeholder="Enter bid amount"

                      value={newPrice}
                      onChange={(e)=>setNewPrice(e.target.value)}
                      // name="newprice"
                      // onChange={()=>}

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

                  <button onClick={()=>handleSubmit(itemModel)} className="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400">

                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}