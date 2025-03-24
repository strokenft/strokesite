import React, { useEffect, useRef } from "react";
import '../css/collectionPreview.css';

const CollectionPreview = ({ nfts }) => {
  const scrollRef = useRef(null);
  
  // Function to handle infinite scrolling effect
  const handleScroll = () => {
    const container = scrollRef.current;
    const itemWidth = container.children[0].offsetWidth;
    const scrollPosition = container.scrollLeft;
    const containerWidth = container.clientWidth;
    const totalScrollWidth = container.scrollWidth;
    
    // When the user reaches the end of the visible section of the first list, we jump to the end of the second set
    if (scrollPosition + containerWidth >= totalScrollWidth - itemWidth) {
      container.scrollLeft = itemWidth; // Jump to the start of the second list
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    const interval = setInterval(() => {
      container.scrollLeft += 1; // Auto-scroll to create the infinite effect
    }, 20); // Adjust this value for scroll speed

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="collectionPreview">
      <h2>Collection Preview</h2>
      <div
        ref={scrollRef}
        className="nftList"
        style={{ display: 'flex', overflowX: 'auto', scrollBehavior: 'smooth' }}
        onScroll={handleScroll}
      >
        {/* Display the list twice for infinite scroll effect */}
        {[...nfts, ...nfts].map((nft, index) => (
          <div key={nft.identifier + index} className="nftItem" style={{ flexShrink: 0, marginRight: '15px' }}>
            <a href={nft.opensea_url} target="_blank" rel="noopener noreferrer">
              <img src={nft.image_url} alt={nft.name} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
