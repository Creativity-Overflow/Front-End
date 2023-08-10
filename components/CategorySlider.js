import React, { useRef, useEffect, useState } from "react";

// ... (rest of the imports and styles)

export default function CategorySlider() {
    const slidesContainerRef = useRef(null);
    const slideWidth = useRef(0);

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

    const cardData = [
        
        {
            backgroundImage: "url('https://media1.giphy.com/media/TdQoJS1atKEulCW5Lg/giphy.gif?cid=ecf05e47mc7pzr3q56f6lsep5c037pao13elgl9ekz2ytg89&ep=v1_gifs_search&rid=giphy.gif&ct=g')",
            title: "To The Beach",
            copy: "Plan your next beach trip with these fabulous destinations",
        },
        {
            backgroundImage: "url('https://media2.giphy.com/media/P5B1MmOvBvx1m6vetp/giphy.gif?cid=ecf05e47t1ore3syvncsnendau69tn1bovor5lo21woueg07&ep=v1_gifs_related&rid=giphy.gif&ct=g')",
            title: "To The Beach",
            copy: "Plan your next beach trip with these fabulous destinations",
        },
        {
            backgroundImage: "url('https://media4.giphy.com/media/mRgQiKMnKL8WZeogKl/giphy.gif?cid=ecf05e47t222701ko3edmjyajkfbmln2t9mjz58l6v36qi8e&ep=v1_gifs_related&rid=giphy.gif&ct=g')",
            title: "To The Beach",
            copy: "Plan your next beach trip with these fabulous destinations",
        },
        {
            backgroundImage: "url('https://media0.giphy.com/media/eIm7RckrEHz1y5KyNo/giphy.gif?cid=ecf05e47804o84pqtz8xirt6ia3xbgevl376py3pafyet4bf&ep=v1_gifs_related&rid=giphy.gif&ct=g')",
            title: "To The Beach",
            copy: "Plan your next beach trip with these fabulous destinations",
        },
        // Add more card data as needed
    ];

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

        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 transition-all duration-500 ease-linear">
            <h1 className="font-cabinetGrotesk text-3xl lg:text-4xl font-bold mb-12 leading-tight">Tailwind CSS Carousel</h1>
            <div className="relative">
                <div
                    className="slides-container h-96 flex snap-x snap-mandatory overflow-hidden space-x-2 rounded scroll-smooth"
                    ref={slidesContainerRef}
                >
                    {cardData.map((card, index) => (
                        <div key={index} className="slide aspect-square flex-shrink-0 snap-center rounded overflow-hidden relative">
                            <div className={"card"} style={{ backgroundImage: card.backgroundImage, backgroundSize: "cover", height: "100%" }}>
                                <div className="image"></div>
                                <div className="content">
                                    <h2 className="title">{card.title}</h2>
                                    <p className="copy">{card.copy}</p>
                                    <button className="btn">{card.buttonText}</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute top-0 -left-4 h-full items-center hidden md:flex">
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
                <div className="absolute top-0 -right-4 h-full items-center hidden md:flex">
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
        </div>

    );
};
