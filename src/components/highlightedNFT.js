import React from "react";
import '../css/highlightedNFT.css'

const HighlightedNFT = ({ data }) => {

  const formattedDate = new Date(data.created_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });


  return (
    <div className="highlightedCollection">
      <a href="https://opensea.io/collection/strokernft" className="collectionLink" target="_blank" rel="noopener noreferrer">
          <img src={data.image_url} alt={data.name} className="collectionImage" />
        </a>
      <div className="highlightedCollectionContent">
        <div className="collectionText">
          <h3>Highlighted Collection:</h3>
          <h1>{data.name}</h1>
          <p><strong>Description:</strong> {data.description} </p>
          <div className="highlightedCollectionStats">
            <h2>Collection Stats</h2>
            <p><strong>Created On:</strong> {formattedDate}</p>
            <p><strong>Total Supply:</strong> {data.total_supply.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default HighlightedNFT;
