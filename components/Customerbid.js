import { useCustomerBids } from "@/hooks/useCustomerbid";
import {useCredits} from "@/hooks/useUpdateCredits"
import React, { useState} from "react";

// import Modal from "./Modal";
export default function Customerbid() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [itemModel, setitemModel] = useState({});
  const { customerBids,updateCustomerBid,loading } = useCustomerBids();
  const [newPrice, setNewPrice] = useState("");
  const {updateCredits} = useCredits();
  
  const modalClose = () => {
    setModalOpen(false);
  };

  const openModal = (item) => {
    setModalOpen(true);
    setitemModel(item);
  };
  const handleUpdate = async(item)=>{
    if (item.current_price > 0){
      updateCredits(item.current_price,item.highest_bidder)
    }
    item.current_price = newPrice
    await updateCustomerBid(item,item.id)
    var money = -newPrice
    updateCredits(money,userData.user_id)
    modalClose()
  }
  if (loading){return <>loading ...</>}
  return (
    <>
   
   <div className="flex flex-row flex-wrap justify-around w-full rounded">
       {customerBids.map((card, index) => (
        <div key={index} className="w-1/5 h-full m-2">
          <div className={"card"} style={{ backgroundImage: `url(${card.image})`, backgroundSize: "cover", height: "100%",width:"90%"}}>
            <div className="image"></div>
            <div className="content">
              <h2 className="title">{card.name}</h2>
              <p>{card.category}</p>
              <p>{card.highest_bidder_name} {card.current_price}</p>
              <p>{card.artist_name}</p>
              <button className="btn" onClick={() => openModal(card)}>
                Place your bid
              </button>
            {/* <ArtModal showFlag={showFlag}
            handleClose={handleClose}
            item={itemData} /> */}
            </div>
          </div>
        </div>
      ))}
          {isModalOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center w-full overflow-hidden main-modal h-100 animated fadeIn faster mt-34"
              style={{ background: "rgba(0,0,0,.7)" }}
            >
              <div className="z-50 w-11/12 mx-auto overflow-y-auto bg-white border border-teal-500 rounded shadow-lg modal-container md:max-w-md">
                <div className="px-6 py-4 text-left modal-content">
                  <div className="flex items-center justify-between pb-3">
                    <img
                      src={itemModel.image}
                      alt="Header Image"
                      className="h-50 w-50"
                    />
                  </div>

                  <div className="text-black">
                    <div>
                      <h2 className="title">{itemModel.name}</h2>
                    </div>
                    <div className="copy">
                      <p>{itemModel.description}</p>
                    </div>
                    <div>
                      <h3 className="title">{itemModel.category}</h3>
                    </div>
                    <div>
                    <h3 className="title">{itemModel.highest_bidder_name} : {itemModel.current_price}</h3>
                    </div>
                    <div>
                      <label htmlFor="price">Put Your Price</label>
                      <input type="number" value={newPrice}
                      onChange={(e)=>setNewPrice(e.target.value)} />
                    </div>
                  </div>
                  <div className="flex justify-end pt-2">
                  <button
                      onClick={modalClose}
                      className="p-3 px-4 text-black bg-gray-400 rounded-lg focus:outline-none modal-close hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                    <button className="p-3 px-4 ml-3 text-white bg-teal-500 rounded-lg focus:outline-none hover:bg-teal-400">
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