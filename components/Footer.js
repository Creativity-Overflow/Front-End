import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <>
      
      <footer className=" bottom-0 left-0 w-full bg-black bg-opacity-30" >
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="md:flex md:justify-between">
            <div className="p-5 ">
              <ul>
                <div className="flex flex-col items-center pb-5">
                  <p className="text-gray-800 font-bold text-2xl pb-4">
                    Contact us:
                  </p>
                  <div className="flex gap-6">
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
                    </a>
                  </div>
                </div>
              </ul>
            </div>
            <div className="p-5">
              <h1 className="text-center">
                Thank you for your trust in us, and we are eager to serve you
                and enrich your life with the beauty of art."
              </h1>
              <p className="flex flex-col justify-center items-center text-center  p-5bg-blue-400">
                © 2022-2023 All rights reserved | Build with ❤ by{" "}
                <span className="hover:text-blue-600 font-semibold cursor-pointer">
                Overflow Crafters{" "}
                </span>
              </p>
            </div>

            <div className="p-5">
                <p className="text-gray-800 font-bold text-2xl pb-4">
                  Support:
                </p>
              <ul className="flex flex-row " >
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer m-1">
                  LTUC
                </li>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer  m-1">
                  DIGITS
                </li>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer  m-1">
                  ASAC
                </li>
              </ul>
            </div>
          </div>
        </div>

       
      </footer>
    </>
  );
}

export default Footer;
