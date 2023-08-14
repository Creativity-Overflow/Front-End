import React, { useRef, useEffect, useState } from "react";
import DialogCustomAnimation from "./Background";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";


// ... (rest of the imports and styles)

export default function CategorySlider(props) {
    const [open, setOpen] = React.useState(false);
    const slidesContainerRef = useRef(null);
    const slideWidth = useRef(0);

    

    const handleOpen = () => {

        if (open) {
            
            setOpen(false)
            document.body.style.overflow = '';
        } else {
            setOpen(true)
            document.body.style.overflow = 'hidden';
        }
    };
    const buttonRef = useRef(null);


    const handleDialogClick = (e) => {
        e.stopPropagation();
    };

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

    return (

        <div className="max-w-screen-xl min-h-screen transition-all duration-500 ease-linear" style={open ? {} : {overflow: 'hidden'}}>

            {open ? (

                <div
                    style={{

                        minWidth: "100vw",
                        minHeight: "100vh",
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000,
                    }}
                    onClick={handleOpen}
                >
                    <div
                        onClick={handleDialogClick}
                        style={{
                            backgroundColor: "white",
                            width: "100%",
                            maxWidth: "600px",
                            borderRadius: "0.5rem",
                            overflow: "hidden",
                            transform: "translateY(-20px)",
                        }}
                    >
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">
                                It's a simple dialog.
                            </h2>
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
                                    style={{
                                        backgroundImage: "linear-gradient(to right, #68D391, #38B2AC)",
                                        color: "white",
                                        padding: "0.5rem 1rem",
                                        borderRadius: "0.25rem",
                                    }}
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (

                < >
                    <h1 className="font-cabinetGrotesk text-3xl text-slate-100 lg:text-4xl font-bold ml-20 my-12 leading-tight text-center">{props.categoryname}</h1>

                    <div className="relative ml-20 ">
                        <div
                            className="slides-container h-[450px]  flex snap-x snap-mandatory overflow-hidden space-x-2 rounded scroll-smooth"
                            ref={slidesContainerRef}
                        >
                            {props.data.map((card, index) => (
                                <div key={index} className="slide aspect-square flex-shrink-0 snap-center rounded overflow-hidden relative">
                                    <div className={"card"} style={{ backgroundImage: `url(${card.image})`, backgroundSize: "cover", height: "100%", width: "350px" }} onClick={handleOpen} ref={buttonRef} >
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
                        <div className="absolute top-0 -left-9 h-full items-center hidden md:flex">
                            <button
                                role="button"
                                className="prev px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
                                onClick={prevButtonHandler}
                                aria-label="prev"
                            >
                                {/* ... prev button content ... */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>

                        </div>
                        <div className="absolute top-0 -right-0 h-full items-center hidden md:flex">
                            <button
                                role="button"
                                className="next px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
                                onClick={nextButtonHandler}
                                aria-label="next"
                            >
                                {/* ... next button content ... */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </>
            )}


        </div>

    );
};

