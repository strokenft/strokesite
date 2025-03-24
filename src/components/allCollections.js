import React from "react";
import '../css/allCollections.css';

const AllCollections = ({ collections }) => {
  const newCollection = {
    collection: "3", // ID or identifier of the collection
    name: "ASCII Strokers", // Name of the collection
    opensea_url: "https://opensea.io/collection/ascii-strokers", // OpenSea URL
    image_url: "https://i.seadn.io/s/primary-drops/0x5f6ff7225d3560542d008067ecaffa058563819c/34370498:about:preview_media:3d5ed437-b615-46c9-bbb3-86acb51b797c.gif?auto=format&dpr=1&w=640", // Image URL
    category: "pfps" // Category of the collection
  };

  // Append the new collection to the existing ones
  const updatedCollections = [...collections, newCollection];

  return (
    <div className="allCollectionsContainer">
      <h1>All Collections</h1>
      <div className="allCollectionsList">
        {updatedCollections.map((collection) => (
          <div key={collection.collection} className="allCollectionItem">
            <a href={collection.opensea_url} target="_blank" rel="noopener noreferrer">
              <img src={collection.image_url} alt={collection.name} className="allCollectionImage" />
            </a>
            <a href={collection.opensea_url} className="collectionName" target="_blank" rel="noopener noreferrer">
              <h3>{collection.name}</h3>
            </a>
            <p>
              <strong>Category: </strong>
              <a href="https://opensea.io/rankings/trending?sortBy=one_day_volume&category=pfps" className="collectionCategory" target="_blank" rel="noopener noreferrer">
                {collection.category}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCollections;
