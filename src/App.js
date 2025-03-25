import "./App.css";
import React, { useState, useEffect } from "react";
import MovingLinesBackground from "./components/movingLinesBackground"
import HighlightedNFT from "./components/highlightedNFT";
import CollectionPreview from "./components/collectionPreview";
import AllCollections from "./components/allCollections";
import Socials from "./components/socials";
import StrokelandSection from "./components/strokelandSection";

function App() {
  const [highlightedNFTData, setHighlightedNFTData] = useState(null);
  const [collections, setCollections] = useState([]);
  const [nfts, setNfts] = useState([]);
  const [adjective, setAdjective] = useState("");
  const adjectives = ["truly", "incredibly", "remarkably", "super", "unbelievably", "insanely", "highly"];
  const [loading, setLoading] = useState(true);
  
  const api_key = process.env.REACT_APP_AUTH_TOKEN;
  const url = "https://api.opensea.io/api/v2/collections/strokernft";
  const collectionsUrl = "https://api.opensea.io/api/v2/collections?creator_username=TheStrokeKing";
  const nftsUrl = "https://api.opensea.io/api/v2/collection/strokernft/nfts?limit=10";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [highlightedResponse, collectionsResponse, nftsResponse] = await Promise.all([
          fetch(url, { method: "GET", headers: { "x-api-key": api_key } }),
          fetch(collectionsUrl, { method: "GET", headers: { "x-api-key": api_key } }),
          fetch(nftsUrl, { method: "GET", headers: { "x-api-key": api_key } })
        ]);

        if (!highlightedResponse.ok || !collectionsResponse.ok || !nftsResponse.ok) {
          throw new Error("Error fetching data");
        }

        const highlightedData = await highlightedResponse.json();
        const collectionsData = await collectionsResponse.json();
        const nftsData = await nftsResponse.json();

        setHighlightedNFTData(highlightedData);
        setCollections(collectionsData.collections);
        setNfts(nftsData.nfts);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const cycleAdjective = () => {
      // Pick the next adjective from the list in a cyclic manner
      setAdjective(prev => {
        const currentIndex = adjectives.indexOf(prev);
        const nextIndex = (currentIndex + 1) % adjectives.length; // Loop back to the start if it's the end
        return adjectives[nextIndex];
      });
    };

    const intervalId = setInterval(cycleAdjective, 100); // Change every 200ms
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId); // Stop cycling after 1000ms (5 times)
      const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
      setAdjective(randomAdjective);
    }, 1000); // Stop after 1000ms

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId); // Cleanup both interval and timeout
    };
  }, []); // Only run once when the component mounts

  if (loading) {
    document.body.style.cursor = "progress";
    return (
      <div className="fullPageMessage">
        Loading
        <span className="loadingDot">.</span>
        <span className="loadingDot">.</span>
        <span className="loadingDot">.</span>
      </div>
    );
  }
  else{
    document.body.style.cursor = "default";
  }
  if (!highlightedNFTData || !collections || !nfts) {
    return (
      <div className="fullPageMessage">
        Something went wrong... Please try again.
      </div>
    );
  }
  return (
    <div className="App">
      <MovingLinesBackground />
      <h1 className="header">strokenft</h1>
      <h2 className="subHeader"><span>{adjective}</span> official website</h2>
      <HighlightedNFT data={highlightedNFTData} />
      <CollectionPreview nfts={nfts} />
      <StrokelandSection />
      <AllCollections collections={collections} />
      <Socials />
    </div>
  );
}

export default App;
