import React from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/auth";
export default function Header() {
  const { login, username, logout } = useAuth()
  const user_data = typeof window !== 'undefined' ? localStorage.getItem("authState") : null;
  return (

    <header className="bg-black bg-opacity-30 w-full text-gray-700  shadow-sm body-font " style={{ opacity: " 1.0" }}>
      <div className="flex items-center justify-between mx-auto ">

        <Link

          href="/">
          <img
            src="https://cdn.discordapp.com/attachments/1088176345957290005/1140939277220454491/image.png"
            className="w-32 align-middle justify-center"
            alt="TE Logo"
            loading="lazy" />
        </Link>
        <nav className="flex  items-center justify-between gap-5 text-base md:ml-auto">

          <Link href="/" className="rounded px-5 py-2.5 overflow-hidden group  relative hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">

            
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Home</span>
            

          </Link>
          <Link href="/art" className="rounded px-5 py-2.5 overflow-hidden group  relative hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Art</span>
          </Link>
          <Link href="/About" className="rounded px-5 py-2.5 overflow-hidden group  relative hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">About Us</span>
          </Link>
          <Link href="/Artist" className="rounded px-5 py-2.5 overflow-hidden group  relative hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Artist</span>
          </Link>

          {username ? (
            <>
              <button className="mr-5 font-medium hover:text-gray-950" onClick={() => logout()}> logout </button>

            </>
          ) : (

            <div className="items-center h-full pl-6 ml-6 border-l border-gray-200">
              <Link href="/login" className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-gray-800 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease">Login</Link>
              <Link
                href="/signup"
                className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-gray-800 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
              >
                Sign Up
              </Link>



            </div>
          )}
        </nav>
      </div>
    </header>



  );
};

