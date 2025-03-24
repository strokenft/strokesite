import React from "react";
import discordLogo from "../resources/discord.png";
import tiktokLogo from "../resources/tiktok.png";
import openseaLogo from "../resources/opensea.png";
import xLogo from "../resources/x.png";
import '../css/socials.css';

const Socials = () => {
  return (
    <div className="socialLinks">
      <h1>Connect with Us</h1>
      <div className="socialIcons">
        <a href="https://opensea.io/TheStrokeKing" target="_blank" rel="noopener noreferrer">
          <img src={openseaLogo} alt="OpenSea" width="50" />
        </a>
        <a href="https://discord.gg/es9R56wX6y" target="_blank" rel="noopener noreferrer">
          <img src={discordLogo} alt="Discord" width="50" />
        </a>
        <a href="https://www.tiktok.com/@strokenft" target="_blank" rel="noopener noreferrer">
          <img src={tiktokLogo} alt="TikTok" width="50" />
        </a>
        <a href="https://x.com/strokenfts" target="_blank" rel="noopener noreferrer">
          <img src={xLogo} alt="X (Twitter)" width="50" />
        </a>
      </div>
    </div>
  );
};

export default Socials;
