import { useResource } from "@/hooks/useResousrce";

export default function PhysicalArts() {
  const { physicalArts, phyloading } = useResource();
  return (
    <div className="flex flex-row flex-wrap justify-around w-full rounded">
      {physicalArts.map((card, index) => (
        <div key={index} className="w-1/5 h-full m-2">
          <div className={"card"} style={{ backgroundImage: `url(${card.image})`, backgroundSize: "cover", height: "100%",width:"90%"}}>
            <div className="image"></div>
            <div className="content">
              <h2 className="title">{card.name}</h2>
              <p className="copy">{card.category}</p>
              <p className="copy">{card.highest_bidder_name} {card.current_price}</p>
              <p className="copy">{card.artist_name}</p>
              <button className="btn">bid</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
