import React, { useEffect, useState } from "react";
import { useResource } from "@/hooks/useResousrce"; // Make sure to import useResource
import axios from "axios"; // Make sure to import axios

export default function AllArts() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [itemModel, setItemModel] = useState(null);
  const [magic, setMagic] = useState(true);
  const [newPrice, setNewPrice] = useState("");
  const [newart, setNewArt] = useState(undefined);
  const [timerEnd, setTimerEnd] = useState(false); // Flag for timer end
  const { updatePrice, getArtResource, change_Status, getArts } = useResource();

  const modalClose = () => {
    setModalOpen(false);
  };

  const openModal = (item) => {
    setModalOpen(true);
    setItemModel(item);
  };

  const handleSubmit = async (item) => {
    await updatePrice(item, newPrice);
    modalClose();
    const x = await getArtResource();
    setNewArt(x);
    setMagic(!magic);
  };

  const calculateTimeLeft = (endDate) => {
    const now = new Date().getTime();
    const end = new Date(endDate).getTime();
    const timeRemaining = end - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return {
      total: timeRemaining,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  useEffect(() => {
    async function fetchData() {
      getArts
      // const x = await getArtResource();
      // setNewArt(x);
    }
    fetchData();

    if (itemModel) {
      const timerInterval = setInterval(() => {
        const timeLeft = calculateTimeLeft(itemModel.end_date);
        if (timeLeft.total <= 0) {
          clearInterval(timerInterval); // Stop the interval when time is up
          change_Status(itemModel.id); // Call change_Status function when time ends
          setTimerEnd(true); // Set timer end flag
        }
      }, 1000); // Update the timer every second

      return () => {
        clearInterval(timerInterval); // Clean up the interval when component unmounts
      };
    }
  }, [magic, setMagic, itemModel, change_Status, getArtResource]);

  useEffect(() => {
    if (timerEnd) {
      setModalOpen(false); // Close the modal when timer ends
      setTimerEnd(false); // Reset the timer end flag
    }
  }, [timerEnd]);

  return (
    <>
      <div className="flex flex-row flex-wrap justify-around w-full rounded">
        {!getArts ? (
          <h1>loading..</h1>
        ) : (
          getArts.map((card, index) => (
            <div key={index} className="w-1/5 h-full m-2">
              <div
                className="card"
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
                  <p>
                    Ends in: {calculateTimeLeft(card.end_date).days}d{" "}
                    {calculateTimeLeft(card.end_date).hours}h{" "}
                    {calculateTimeLeft(card.end_date).minutes}m
                    
                  </p>
                  <p>Status: {card.status}</p>
                  <p>{card.highest_bidder_name}: {card.current_price}</p>
                  <p>{card.artist_name}</p>
                  <button
                    className="btn"
                    onClick={() => openModal(card)}
                    disabled={card.status !== "available"}
                  >
                    Place your bid
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {/* Your modal code */}
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

    </>
  );
}