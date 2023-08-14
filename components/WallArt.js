export default function WallArts() {
    return (
        <section className=" dark:text-gray-100 " style={{
            alignItems: "center",
            "background-image":
                "url(https://cutewallpaper.org/28/color-explosion-pc-wallpaper/10824183.jpg)" , "border-radius": "100px",
                "margin": "20px", "box-shadow": "20px 20px #0000006e"
        }}>
            <div className="ml-10 flex flex-col justify-between p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="bg-black bg-opacity-50 flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leadi sm:text-2xl text-center">
                        <span className="dark:text-white-400 text-center"> Step into a gallery that encapsulates the artistic spirit of our time</span>
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 dark:text-white-900 w-96 text-center">seamlessly weaving together digital brilliance,
                        <br className="hidden md:inline lg:hidden dark:text-gray-900 " />tactile artistry, and the evocative power of photography.
                    </p>
                    <div className="flex items-center justify-center flex-row  ">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 ">Sign up</a>
                    </div>
                </div>
                <div className="flex items-center justify-center  w-[100%]  lg:h-96 ">
                    <img src="https://prestashop.dostguru.com/ART01/artista_01/modules/wbimgbanner/views/img/banner-1.jpg" alt="" className="h-screen w-screen  " />
                </div>
            </div>
        </section>
    )
}
