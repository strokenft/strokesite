import React from "react";
import '../css/collectionPreview.css';

const CollectionPreview = ({ nfts }) => {
  return (
    <div className="collectionPreview">
      <h2>Collection Preview</h2>
      <div className="scrollContainer">
        <div className="scrollContent">
          {[...nfts, ...nfts].map((nft, index) => (
            <div
              key={nft.identifier + index}
              className="nftItem"
            >
              <a
                href={nft.opensea_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={nft.image_url} alt={nft.name} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionPreview;
