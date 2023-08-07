import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <>
{/*       
        <div className="bg-gray-50 w-full flex md:flex-row flex-col justify-around items-start fixed bottom-0 left-0">
        
          
            
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
              Thank you for your trust in us, and we are eager to serve you and
              enrich your life with the beauty of art."
            </h1>
            <p className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
              © 2022-2023 All rights reserved | Build with ❤ by{" "}
              <span className="hover:text-blue-600 font-semibold cursor-pointer">
                Group-5{" "}
              </span>
            </p>
          </div>

          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">Support:</p>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                LTUC
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                DIGITS
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                ASAC
              </li>
            </ul>
          </div>
        </div> */}
      {/* </div> */}
      <footer class="bg-blue-200 dark:bg-blue-200 bottom-0 left-0 w-full">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
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
              Thank you for your trust in us, and we are eager to serve you and
              enrich your life with the beauty of art."
            </h1>
            <p className="flex flex-col justify-center items-center text-center  p-5 bg-blue-200">
              © 2022-2023 All rights reserved | Build with ❤ by{" "}
              <span className="hover:text-blue-600 font-semibold cursor-pointer">
                Group-5{" "}
              </span>
            </p>
          </div>

          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">Support:</p>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                LTUC
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                DIGITS
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                ASAC
              </li>
            </ul>
          </div>
        </div> 
      </div>

          {/* <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://flowbite.com/" class="hover:underline">Flowbite</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <p class="hover:underline">Flowbite™</p>. All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <p className="text-gray-800 font-bold text-2xl pb-4">
                  Contact us:
                </p>
              <Link href="https://www.facebook.com/" target="_blank"
                    rel="noopener noreferrer" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </Link>
              
              <Link href="https://twitter.com/" 
                    target="_blank"
                    rel="noopener noreferrer" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </Link>
              <Link href="https://github.com/" target="_blank"
                    rel="noopener noreferrer" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </Link>
              
          </div> */}
      {/* </div> */}
    {/* </div> */}
</footer>
    </>
  );
}

export default Footer;
