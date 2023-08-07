import Parents from "@/components/Parents";
import Image from "next/image";

export default function login() {
  return (
    <>
      <Parents>
        <div class="bg-white dark:bg-gray-900">
          <div class="flex justify-center h-screen">
            <div
              class="hidden bg-cover lg:block lg:w-2/3"
              style={{
                "background-image":
                  "url(https://bestanimations.com/media/art/1184413667painting-art-animated-gif-12.gif)",
              }}
            >
              <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                <div>
                  <h2 class="text-2xl font-bold text-white sm:text-3xl">
                    Creativity Overflow
                  </h2>

                  <p class="max-w-xl mt-3 text-gray-300">
                    Welcome to the world of creativity and beauty! Our website
                    is your perfect destination to explore art in all its forms
                    and colors. We offer a diverse collection of unique artworks
                    and paintings that embody the talents and skills of our
                    talented artists,Whether you're looking for art pieces to
                    decorate your home or a special gift for a loved one, we
                    provide you with a wonderful array of options We look
                    forward to helping you find pieces that cater to your
                    refined taste and inspire you to continue your artistic
                    journey, creating with brilliance. Thank you for your trust
                    in us, and we are eager to serve you and enrich your life
                    with the beauty of art."
                  </p>
                </div>
              </div>
            </div>

            <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
              <div class="flex-1">
                <div class="text-center">
                  <div class="flex justify-center mx-auto">
                    {/* <img class="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt=""> */}
                  </div>

                  <p class="mt-3 text-gray-500 dark:text-gray-300">
                    Sign in to access your account
                  </p>
                </div>

                <div class="mt-8">
                  <form>
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@example.com"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div class="mt-6">
                      <div class="flex justify-between mb-2">
                        <label
                          for="password"
                          class="text-sm text-gray-600 dark:text-gray-200"
                        >
                          Password
                        </label>
                        <a
                          href="#"
                          class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                        >
                          Forgot password?
                        </a>
                      </div>

                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Your Password"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div class="mt-6">
                      <button class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Sign in
                      </button>
                    </div>
                  </form>

                  <p class="mt-6 text-sm text-center text-gray-400">
                    Don&#x27;t have an account yet?{" "}
                    <a
                      href="#"
                      class="text-blue-500 focus:outline-none focus:underline hover:underline"
                    >
                      Sign up
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parents>
    </>
  );
}
