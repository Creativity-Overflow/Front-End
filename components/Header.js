import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 bg-blue-200 text-gray-50 flex justify-between items-center">
      <h5 className="text-2xl text-black">creativity overflow</h5>
      <div className="flex space-x-4">
        {/* <a href="signup" className="px-4 py-2 text-white bg-blue-400 rounded-md">Sign out</a> */}
        <Link href="/" className="px-4 py-2 text-white bg-blue-400 rounded-md">Home</Link>
        <Link href="/About" className="px-4 py-2 text-white bg-blue-400 rounded-md">About Us</Link>
      </div>

    </header>
    
  );
};

