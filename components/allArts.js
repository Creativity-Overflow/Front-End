import React from 'react';
import { useResource } from '@/hooks/useResousrce';
import ArtModal from './artModal';
export default function AllArts() {
    const { getArts,loading } = useResource();
    if (loading) {
      return <p>Loading...</p>;
  }
  return (
    <div className="flex flex-row flex-wrap justify-around w-full rounded">
      {getArts.map((card, index) => (
        <div key={index} className="w-1/5 h-full m-2">
          <div className={"card"} style={{ backgroundImage: `url(${card.image})`, backgroundSize: "cover", height: "100%",width:"90%"}}>
            <div className="image"></div>
            <div className="content">
              <h2 className="title">{card.name}</h2>
              <p>{card.category}</p>
              <p>{card.highest_bidder_name} {card.current_price}</p>
              <p>{card.artist_name}</p>
              <button className="btn" 
            >Place your bid</button>
            {/* <ArtModal showFlag={showFlag}
            handleClose={handleClose}
            item={itemData} /> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
