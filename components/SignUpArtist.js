import Image from "next/image";
import Link from "next/link";

export default function SignUpArtist() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/3"
            style={{
              backgroundImage:
                "url(https://media.giphy.com/media/Iw8fHoP37Xi36/giphy.gif)",
            }}
          >
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Creativity Overflow
                </h2>

                <p className="max-w-xl mt-3 text-gray-300">
                  Welcome to the world of creativity and beauty! Our website is
                  your perfect destination to explore art in all its forms and
                  colors. We offer a diverse collection of unique artworks and
                  paintings that embody the talents and skills of our talented
                  artists. Whether you're looking for art pieces to decorate
                  your home or a special gift for a loved one, we provide you
                  with a wonderful array of options. We look forward to helping
                  you find pieces that cater to your refined taste and inspire
                  you to continue your artistic journey, creating with
                  brilliance. Thank you for your trust in us, and we are eager
                  to serve you and enrich your life with the beauty of art.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <div className="mt-4 text-sm text-center text-gray-400">
                  Are you a buyer?{" "}
                  <Link href="/signup" passHref legacyBehavior>
                    <a className="text-blue-500 focus:outline-none focus:underline hover:underline">
                      Sign Up here!
                    </a>
                  </Link>
                </div>
                <div className="flex justify-center mx-auto">
                <img className="w-auto h-7 sm:h-8" src="public/images/image.png" alt="logo"/>
                </div>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Sign up to create a new account
                </p>
              </div>

              <div className="mt-8">
                <form>
                  <div>
                    <label
                      htmlFor="username"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Your Username"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mt-4 mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@example.com"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block mt-4 mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Your Password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                      Sign up
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-sm text-center text-gray-400">
                  Already have an account?{" "}
                  <Link href="/login" passHref legacyBehavior>
                    <a className="text-blue-500 focus:outline-none focus:underline hover:underline">
                      Sign in
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
