

export default function Card3d() {
    return (
        <main className="page-content">
            {/* Card 1 */}
            <div className={"card"} style={{ backgroundImage: `url('https://media.tenor.com/QtEfzowhyzEAAAAC/universe-galaxy.gif')` , backgroundSize: "cover" , height: "450px", width: "350px" }}>
                <div className="image" ></div>
                <div className="content">
                    <h2 className="title">Mountain View</h2>
                    <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
                    <button className="btn">View Trips</button>
                </div>
            </div>

            {/* Card 2 */}
            <div className="card" style={{ backgroundImage: `url('https://64.media.tumblr.com/d761053b39282282173cf080d132658c/tumblr_oe0g2u21KG1relaado1_400.gif')`, backgroundSize: "cover" }}>
                <div className="image" ></div>
                <div className="content">
                    <h2 className="title">To The Beach</h2>
                    <p className="copy">Plan your next beach trip with these fabulous destinations</p>
                    <button className="btn">View Trips</button>
                </div>
            </div>

            {/* Card 3 */}
            <div className="card" style={{ backgroundImage: "url('https://media.tenor.com/QtEfzowhyzEAAAAC/universe-galaxy.gif')", backgroundSize: "cover" }}>
                <div className="image" ></div>
                <div className="content">
                    <h2 className="title">Desert Destinations</h2>
                    <p className="copy">It's the desert you've always dreamed of</p>
                    <button className="btn">Book Now</button>
                </div>
            </div>

            {/* Card 4 */}
            <div className="card" style={{ backgroundImage: "url('https://67.media.tumblr.com/c1e849d2f71d2c414e502b552e0bdc3d/tumblr_o40cn40RgY1ukzte5o1_500.gif')", backgroundSize: "cover" }}>
                <div className="image" ></div>
                <div className="content">
                    <h2 className="title">Explore The Galaxy</h2>
                    <p className="copy">Seriously, straight up, just blast off into outer space today</p>
                    <button className="btn">Book Now</button>
                </div>
            </div>
        </main>
    )
}