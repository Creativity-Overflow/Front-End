import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    
<header class="w-full text-gray-700 bg-blue-400 shadow-sm body-font">
    <div class="container flex flex-col items-start p-6 mx-auto md:flex-row">
    <a
        class="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
        href="/">
        <img
          src="/images/image.png"
          style={{"height": "30px"}}
          alt="TE Logo"
          loading="lazy" />
      </a>
        <nav class="flex items-center justify-center text-base md:ml-auto">
            <a href="/" class="mr-5 font-medium hover:text-gray-900">Home</a>
            <a href="/About" class="mr-5 font-medium hover:text-gray-900">About Us</a>
        </nav>
        <div class="items-center h-full pl-6 ml-6 border-l border-gray-200">
            <a href="/login" class="mr-5 font-medium hover:text-gray-950">Login</a>
            <a href="#"
                class="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-gray-800 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease">
                Sign Up
            </a>
        </div>
    </div>
</header>

    
    
  );
};

