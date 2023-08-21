import React, { useEffect, useState } from "react";
import { useResource } from "@/hooks/useResousrce"; // Make sure to import useResource
import { useArtDetail } from "@/hooks/useArtDetail";
import { useCredits } from "@/hooks/useUpdateCredits";
// import { useMoveRow } from "@/hooks/useMove";
export default function AllArts() {
  // const {updateState} = useMoveRow()
  const [isModalOpen, setModalOpen] = useState(false);
  const [itemModel, setItemModel] = useState(null);
  const [magic, setMagic] = useState(true);
  const [newPrice, setNewPrice] = useState("");
  const [newart, setNewArt] = useState(undefined);
  const [timerEnd, setTimerEnd] = useState(false); // Flag for timer end
  const { resource, loading, createResource, updateResource } = useResource();

  const modalClose = () => {
    setModalOpen(false);
  };

  const openModal = (item) => {
    setModalOpen(true);
    setItemModel(item);
  };
  const {updateArtDetail} = useArtDetail();
  const {updateCredits} = useCredits()
  const handleSubmit = async (item) => {
    if ( Number(newPrice) < Number(item.current_price)) {
      alert("Your input price is lower than the highest bid.");
      return;
    }
  
    const info = { "current_price": newPrice };
    await updateArtDetail(info, item.id);
    modalClose();
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
      resource
      // const x = await getArtResource();
      // setNewArt(x);
    }
    fetchData();

    if (itemModel) {
      const timerInterval = setInterval(() => {
        const timeLeft = calculateTimeLeft(itemModel.end_date);
        if (timeLeft.total <= 0) {
          clearInterval(timerInterval); // Stop the interval when time is up
          // updateState(itemModel.id); // Call change_Status function when time ends
          setTimerEnd(true); // Set timer end flag
        }
      }, 1000); // Update the timer every second

      return () => {
        clearInterval(timerInterval); // Clean up the interval when component unmounts
      };
    }
  }, [magic, setMagic, itemModel]);

  useEffect(() => {
    if (timerEnd) {
      setModalOpen(false); // Close the modal when timer ends
      setTimerEnd(false); // Reset the timer end flag
    }
  }, [timerEnd]);

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
          resource.map((card, index) => (
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
              <div className="w-1/2 " style={{
                "align-content": "center",
                "display": "flex",
                "flex-direction": "column",
                "justify-content": "space-around"
              }}>
                <div className="gap-8 text-black">
                  <div className="flex flex-col items-center gap-10 mb-4 space-x-4">
                  <h2 className="mb-4 title">Image Name: {itemModel.name}</h2>
                  <h3 className="mb-4 title">Category: {itemModel.category}</h3>
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
        </div >
      )
      }

    </>
  );
}