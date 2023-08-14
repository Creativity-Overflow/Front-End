export default function PanalCat() {
    return (

        <section className=" dark:text-gray-100 " style={{
            alignItems: "center",
            backgroundImage: "url(https://wallpapers.com/images/hd/color-smoke-background-1920-x-1080-1taa8nqe8lyw3hea.jpg)", "border-radius": "100px",
            "margin": "20px", "box-shadow": "20px 20px #0000006e"
        }}>
            <div className="container   mx-auto">
                <div className="grid items-center gap-4 xl:grid-cols-5">
                    <div className="bg-black bg-opacity-70 max-w-2xl mx-auto my-8  text-center xl:col-span-2 xl:text-left">
                        <h2 className="text-4xl font-bold text-center m-20">Experience the synergy of creativity as our gallery</h2>
                        <p className="dark:text-gray-400 text-center">proudly showcases the fusion of digital art, physical expressions, and the timeless beauty of photography</p>
                    </div>
                    <div className="p-6 xl:col-span-3">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="grid content-center gap-4">
                                <div className="card m-2 rounded-lg shadow-lg" style={{ backgroundImage: `url('https://media.tenor.com/QtEfzowhyzEAAAAC/universe-galaxy.gif')`, backgroundSize: "cover" }}>
                                    <div className="image" ></div>
                                    <div className="content">
                                        <h2 className="title">Mountain View</h2>
                                    </div>
                                </div>
                                <div className="card m-2 rounded-lg shadow-lg" style={{ backgroundImage: `url('https://media.tenor.com/QtEfzowhyzEAAAAC/universe-galaxy.gif')`, backgroundSize: "cover" }}>
                                    <div className="image" ></div>
                                    <div className="content">
                                        <h2 className="title">Mountain View</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="grid content-center gap-32">
                                <div className="card m-2  rounded-lg shadow-lg" style={{ backgroundImage: `url('https://media.tenor.com/QtEfzowhyzEAAAAC/universe-galaxy.gif')`, backgroundSize: "cover" }}>
                                    <div className="image" ></div>
                                    <div className="content">
                                        <h2 className="title">Mountain View</h2>
                                    </div>
                                </div>
                                <div className="card m-2 rounded-lg shadow-lg" style={{ backgroundImage: `url('https://media.tenor.com/QtEfzowhyzEAAAAC/universe-galaxy.gif')`, backgroundSize: "cover" }}>
                                    <div className="image" ></div>
                                    <div className="content">
                                        <h2 className="title">Mountain View</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
