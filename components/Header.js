import React from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/auth";
export default function Header() {
  const { login, username, logout } = useAuth();
  //  const user_data = typeof window !== 'undefined' ? localStorage.getItem("authState") : null;
  return (
    <header
      className="w-full text-gray-700  shadow-sm body-font bg-red-400"
      style={{
        "background-image":
          "url('https://w0.peakpx.com/wallpaper/405/807/HD-wallpaper-blue-stone-background-stone-textures-grunge-backgrounds-stone-wall-blue-backgrounds-violet-stone.jpg');",
      }}
    >
      <div className="container flex flex-col items-start p-6 mx-auto md:flex-row">
        <Link
          className="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
          href="/"
        >
          <img
            src="/images/image.png"
            style={{ height: "30px" }}
            alt="TE Logo"
            loading="lazy"
          />
        </Link>
        <nav className="flex items-center justify-center text-base md:ml-auto">
          <Link href="/" className="mr-5 font-medium hover:text-gray-900">
            Home
          </Link>
          <Link href="/art" className="mr-5 font-medium hover:text-gray-900">
            Art
          </Link>
          <Link href="/About" className="mr-5 font-medium hover:text-gray-900">
            About Us
          </Link>
          <Link href="/Artist" className="mr-5 font-medium hover:text-gray-900">
            Artist
          </Link>
        </nav>
        {username ? (
          <>
            <button
              className="mr-5 font-medium hover:text-gray-950"
              onClick={() => logout()}
            >
              {" "}
              logout{" "}
            </button>
          </>
        ) : (
          <div className="items-center h-full pl-6 ml-6 border-l border-gray-200">
            <Link
              href="/login"
              className="mr-5 font-medium hover:text-gray-950"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-gray-800 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
