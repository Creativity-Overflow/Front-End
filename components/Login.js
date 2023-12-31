
import Image from "next/image";

import Link from "next/link"; // Import the Link component
import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/contexts/auth";

export default function loginIn() {
  const { login,tokens} = useAuth();
  const router = useRouter();
  function LoginHandler(event) {
    event.preventDefault();
    const user_name = event.target.username.value;
    const user_password = event.target.password.value;
    login(user_name, user_password);
    router.push("/Artist");
  }

  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center">
          <div
            className="hidden bg-cover lg:block lg:w-2/3"
            style={{
              "background-image":
                "url(https://i.gifer.com/YDmM.gif)",
            }}
          >
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">

              <div className="flex justify-center mx-auto">
  <img className="" src="https://cdn.discordapp.com/attachments/1088176345957290005/1140939277220454491/image.png" alt="logo" />
</div>



                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Sign in to access your account
                </p>
              </div>

              <div className="mt-8">
                <form onSubmit={LoginHandler}>
                  <div>
                    <label
                      for="username"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      User name
                    </label>
                    <input required
                      type="text"
                      name="username"
                      id="username"
                      placeholder="username"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label
                        for="password"
                        className="text-sm text-gray-600 dark:text-gray-200"
                      >
                        Password
                      </label>
                    </div>

                    <input required
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Your Password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                      Sign in
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-sm text-center text-gray-400">
                  Don't have an account yet?{" "}
                  <Link href="/signup" passHref legacyBehavior>
                    <a className="text-blue-500 focus:outline-none focus:underline hover:underline">
                      Sign up
                    </a>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
