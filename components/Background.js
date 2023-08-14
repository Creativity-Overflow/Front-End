

import React, { useState, useEffect, useRef } from 'react';

const Slider = (props) => {
  const slidesContainerRef = useRef(null);
  const slideWidth = useRef(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (slidesContainerRef.current) {
      // Get the width of the first slide element
      const firstSlide = slidesContainerRef.current.querySelector(".slide");
      if (firstSlide) {
        slideWidth.current = firstSlide.clientWidth;
        console.log("Slide Width:", slideWidth.current);
      }
    }
  }, []);

  const nextButtonHandler = () => {
    if (slidesContainerRef.current) {
      slidesContainerRef.current.scrollLeft += slideWidth.current;
    }
  };

  const prevButtonHandler = () => {
    if (slidesContainerRef.current) {
      slidesContainerRef.current.scrollLeft -= slideWidth.current;
    }
  };

  const handleOpen = () => {
    setOpen(!open);
    document.body.style.overflow = open ? '' : 'hidden';
  };

  const handleDialogClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="relative flex items-center justify-center w-full dark:text-gray-50">
      {/* ... Previous button code ... */}
      <svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
        <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
      <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8" ref={slidesContainerRef}>
        {props.data.map((card, index) => (
          <div key={index} className="slide aspect-square flex-shrink-0 snap-center rounded overflow-hidden relative">
            <div className={"card"} style={{ backgroundImage: `url(${card.image})`, backgroundSize: "cover", height: "100%", width: "350px" }}  >
              <div className="image"></div>
              <div className="content ">
                <h2 className="title">{card.name}</h2>
                <p className="copy">{card.artist_name}</p>
                <p className="copy">{card.category}</p>
                {/* <button className="btn">{card.buttonText}</button> */}
              </div>

            </div>

          </div>
        ))}
      </div>
      {/* ... Next button code ... */}
      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
        <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>

      {open && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={handleOpen}>
          <div className="bg-white max-w-md w-full p-4 rounded-lg overflow-hidden" onClick={handleDialogClick}>
            <h2 className="text-xl font-semibold mb-2">It's a simple dialog.</h2>
            <p className="mb-4">
              The key to more success is to have a lot of pillows. Put it
              this way, it took me twenty five years to get these plants,
              twenty five years of blood sweat and tears, and I'm never
              giving up, I'm just getting started. I'm up to something. Fan
              luv.
            </p>
            <div className="flex justify-end">
              <button onClick={handleOpen} className="text-red-500 mr-2">
                Cancel
              </button>
              <button
                onClick={handleOpen}
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
