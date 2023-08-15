import Link from "next/link";
export default function WallArts() {
    return (
        <section className=" dark:text-gray-100 " style={{
            alignItems: "center",
            "backgroundImage":
                "url(https://cdn.discordapp.com/attachments/1088176345957290005/1140948868280881152/wall-art-removebg-preview.png)", "backgroundSize": "cover"
        }}>
            <div className="ml-10 flex flex-col justify-between p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="bg-black bg-opacity-50 flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left" >
                    <h1 className="text-5xl font-bold leadi sm:text-2xl text-center">
                        <span className="dark:text-white-400 text-center"> Step into a gallery that encapsulates the artistic spirit of our time</span>
                    </h1>
                    <h1 className="font-bold leadi sm:text-2xl text-center">
                        <span className="dark:text-white-400 text-2xl text-center"> seamlessly weaving together digital brilliance, tactile artistry, and the evocative power of photography.</span>
                    </h1>

                    <a href="/signup" className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group" style={{ "width": "180px", "align-self": "center"}}>
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                        {/* <!-- Top glass gradient --> */}
                        <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                        {/* <!-- Bottom gradient --> */}
                        <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                        {/* <!-- Left gradient --> */}
                        <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                        {/* <!-- Right gradient --> */}
                        <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                        <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                        <span className="relative">Sign Up</span>
                    </a>
                </div>
                <div className="flex items-center justify-center  w-[100%]  lg:h-96 ">
                    <img src="https://cdn.discordapp.com/attachments/1088176345957290005/1140949519182348298/image.png" alt="" className="h-screen w-screen  " />
                </div>
            </div>
        </section>
    )
}
