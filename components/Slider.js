// import { Carousel, Typography, Button } from "@material-tailwind/react";
 
// export default function Slider() {
//   return (
    
// <div id="default-carousel" class="relative w-full" data-carousel="slide">
//     {/* <!-- Carousel wrapper --> */}
//     <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
//          {/* <!-- Item 1 --> */}
//         <div class="hidden duration-700 ease-in-out" data-carousel-item>
//             {/* <img src="/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
//         </div>
//         {/* <!-- Item 2 --> */}
//         <div class="hidden duration-700 ease-in-out" data-carousel-item>
//             {/* <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
//         </div>
//         {/* <!-- Item 3 --> */}
//         <div class="hidden duration-700 ease-in-out" data-carousel-item>
//             {/* <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
//         </div>
//         {/* <!-- Item 4 --> */}
//         <div class="hidden duration-700 ease-in-out" data-carousel-item>
//             {/* <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
//         </div>
//         {/* <!-- Item 5 --> */}
//         <div class="hidden duration-700 ease-in-out" data-carousel-item>
//             {/* <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
//         </div>
//     </div>
//     {/* <!-- Slider indicators --> */}
//     <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
//         <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
//         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
//         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
//         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
//         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
//     </div>
//     {/* <!-- Slider controls --> */}
//     <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
//         <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
//             </svg>
//             <span class="sr-only">Previous</span>
//         </span>
//     </button>
//     <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
//         <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
//             </svg>
//             <span class="sr-only">Next</span>
//         </span>
//     </button>
// </div>

//   );
// }


import React, { useState } from 'react';

const images = [
  {
    url: 'https://example.com/image1.jpg',
    caption: 'Caption for Image 1',
  },
  {
    url: '/images/artist-stories-hammer.jpg',
    caption: 'Caption for Image 2',
  },
  {
    url: 'https://example.com/image3.jpg',
    caption: 'Caption for Image 3',
  },
  // Add more image URLs and captions as needed
];

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="relative">
      <div className="relative h-56 md:h-96">
        <img
          src={images[currentSlide].url}
          className="w-full h-full object-cover rounded-lg"
          alt="Slider Image"
        />
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            className="bg-black text-white px-4 py-2 rounded-full opacity-70 hover:opacity-100"
            onClick={goToPrevSlide}
          >
            Prev
          </button>
          <button
            className="bg-black text-white px-4 py-2 rounded-full opacity-70 hover:opacity-100"
            onClick={goToNextSlide}
          >
            Next
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 text-white">
          <p className="text-center">{images[currentSlide].caption}</p>
        </div>
      </div>
    </div>
  );
}

