import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/auth";
import uploadImageToAzure from "./uploadImageToAzureStorage";
import { useRouter } from "next/router";

export default function SignUpArtist() {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState(null);
  const { signup_artist } = useAuth()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
    profilePicture: null,
    isArtist: true,
  });

  const [fieldErrors, setFieldErrors] = useState({
    username: false,
    email: false,
    password1: false,
    password2: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      profilePicture: file,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedImage) {
      try {
        var url = await uploadImageToAzure(selectedImage);
        console.log(url);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
    const body = await {
      username: event.target.username.value,
      email: event.target.email.value,
      password1: event.target.password1.value,
      password2: event.target.password2.value,
      image: url,
    }
    console.log(body)
    const newFieldErrors = {};
    for (const field in formData) {
      if (formData[field] === "") {
        newFieldErrors[field] = true;
      }
    }
    setFieldErrors(newFieldErrors);

    if (formData.password1 !== formData.password2) {
      alert("Passwords do not match.");
      return;
    }
    signup_artist(body)
    router.push("/login");
  }
  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center ">
          <div
            className="hidden bg-cover lg:block lg:w-2/3"
            style={{
              backgroundImage:
                "url(https://i.gifer.com/YDmM.gif)",
            }}
          >
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">

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
                  <img className="" src="https://cdn.discordapp.com/attachments/1088176345957290005/1140939277220454491/image.png" alt="logo" />
                </div>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Sign up to create a new account
                </p>
              </div>

              <div className="mt-8">
                <form onSubmit={handleSubmit}>
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
                      className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${fieldErrors.username
                          ? "border-red-500"
                          : "border-gray-200"
                        } rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 ${fieldErrors.username
                          ? "dark:border-red-500"
                          : "dark:border-gray-700"
                        } focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                      value={formData.username}
                      onChange={handleInputChange}
                    />
                    {fieldErrors.username && (
                      <p className="mt-1 text-sm text-red-500">Username is required.</p>
                    )}
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
                      className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${fieldErrors.email ? "border-red-500" : "border-gray-200"
                        } rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 ${fieldErrors.email ? "dark:border-red-500" : "dark:border-gray-700"
                        } focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {fieldErrors.email && (
                      <p className="mt-1 text-sm text-red-500">Email is required.</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="password1"
                      className="block mt-4 mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password1"
                      id="password1"
                      placeholder="Your Password"
                      className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${fieldErrors.password1 ? "border-red-500" : "border-gray-200"
                        } rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 ${fieldErrors.password1 ? "dark:border-red-500" : "dark:border-gray-700"
                        } focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                      value={formData.password1}
                      onChange={handleInputChange}
                    />
                    {fieldErrors.password1 && (
                      <p className="mt-1 text-sm text-red-500">Password is required.</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="password2"
                      className="block mt-4 mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="password2"
                      id="password2"
                      placeholder="Confirm Password"
                      className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${fieldErrors.password2 ? "border-red-500" : "border-gray-200"
                        } rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 ${fieldErrors.password2 ? "dark:border-red-500" : "dark:border-gray-700"
                        } focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                      value={formData.password2}
                      onChange={handleInputChange}
                    />
                    {fieldErrors.password2 && (
                      <p className="mt-1 text-sm text-red-500">Password confirmation is required.</p>
                    )}
                    {formData.password1 !== formData.password2 && (
                      <p className="mt-1 text-sm text-red-500">Passwords do not match.</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="profilePicture"
                      className="block mt-4 mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Profile Picture
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      name="profilePicture"
                      id="profilePicture"
                      onChange={handleImageChange}
                      className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"
                    />
                  </div>

                  <div className="mt-6">
                    <button
                      href="/login"
                      type="submit"
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
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
