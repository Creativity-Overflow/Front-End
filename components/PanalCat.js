export default function PanalCat() {
    return (

        <section className=" dark:text-gray-100 " style={{
            alignItems: "center",
            backgroundImage: "url(https://cdn.discordapp.com/attachments/1088176345957290005/1140950725908774982/art-removebg-preview.png)", "backgroundSize": "cover"
        }}>
            <div className="container   mx-auto">
                <div className="grid items-center gap-4 xl:grid-cols-5">
                    <div className="bg-black bg-opacity-70 max-w-2xl mx-auto m-8  text-center xl:col-span-2 xl:text-left" >
                        <h2 className="text-4xl font-bold text-center m-10">Experience the synergy of creativity </h2>
                        <p className="dark:text-gray-400 text-center m-10">as our gallery proudly showcases the fusion of digital art, physical expressions, and the timeless beauty of photography</p>
                    </div>
                    <div className="p-6 xl:col-span-3">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="grid content-center gap-4">
                                <a href="/art">
                                    <div className="card m-2 rounded-lg shadow-lg" style={{ backgroundImage: `url('https://mymodernmet.com/wp/wp-content/uploads/2017/03/paintings-merged-with-photography-1.jpg')`, backgroundSize: "cover" }}>
                                        <div className="image" ></div>
                                        <div className="content">
                                            <h2 className="title">Photography</h2>
                                        </div>
                                    </div>
                                </a>
                                <a href="/art">
                                    <div className="card m-2 rounded-lg shadow-lg" style={{ backgroundImage: `url('https://static.miraheze.org/greatcharacterswiki/thumb/3/3d/Eren_Paths.jpg/640px-Eren_Paths.jpg')`, backgroundSize: "cover" }}>
                                        <div className="image" ></div>
                                        <div className="content">
                                            <h2 className="title">Digital Art</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="grid content-center gap-32">
                                <a href="/art">
                                    <div className="card m-2  rounded-lg shadow-lg" style={{ backgroundImage: `url('https://sep.turbifycdn.com/ty/cdn/madisonartshop/most-famous-paintings-1.jpg?t=1678352599&')`, backgroundSize: "cover" }}>
                                        <div className="image" ></div>
                                        <div className="content">
                                            <h2 className="title">Phisical Art</h2>
                                        </div>
                                    </div>
                                </a>
                                <a href="/art">
                                    <div className="card m-2 rounded-lg shadow-lg" style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/paint-splashes-against-white-backgroundvertical-shot-ai_372999-9200.jpg')`, backgroundSize: "cover" }}>
                                        <div className="image" ></div>
                                        <div className="content">
                                            <h2 className="title">All Art</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
