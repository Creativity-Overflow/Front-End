import { useResource } from "@/hooks/useResousrce";
import React, { useState} from "react";

// import Modal from "./Modal";
export default function Customerbid() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [itemModel, setitemModel] = useState({});

  const modalClose = () => {
    setModalOpen(false);
  };

  const openModal = (item) => {
    setModalOpen(true);
    setitemModel(item);
  };
  const { CustomerBid } = useResource();
  return (
    <>
   
      <main className="page-content">
      <div className="flex gap-7">
          {CustomerBid.map((item) => (
            <>
              <div
                className="card"
                style={{
                  backgroundImage: `url('${item.image}')`,
                  backgroundSize: "cover",
                  width: 250,
                }}
              >
                <div className="image"></div>
                <div className="content">
                  <h2 className="title">{item.name}</h2>
                  <h3 className="title">{item.category}</h3>
                  <button
                    className="btn"
                    onClick={() => {
                      openModal(item);
                    }}
                  >
                    View Item
                  </button>
                </div>
              </div>
            </>
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
                      <h2 className="title">{itemModel.name}</h2>
                    </div>
                    <div className="copy">
                      <p>{itemModel.description}</p>
                    </div>
                    <div>
                      <h3 className="title">{itemModel.category}</h3>
                    </div>
                  </div>
                  <div className="flex justify-end pt-2">
                    <button
                      onClick={modalClose}
                      className="focus:outline-none modal-close px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                    <button className="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400">
                      Confirm
                    </button>
                    <button className="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400">
                      Update
                    </button>
                    <button className="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div> 

        
      </main>
    </>
  );
}
