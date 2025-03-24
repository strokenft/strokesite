import React, { useState } from "react";
import strokelandScreenshot from "../resources/IMG_1716.png";
import "../css/strokelandSection.css";

const StrokelandSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="strokelandSection">
      <h1>Strokeland</h1>
      <div className="strokelandContent">
        <img src={strokelandScreenshot} alt="Strokeland BETA" />
        <div className="strokelandText">
          <h2>
            <strong>NEW!</strong> Strokeland Open BETA
          </h2>

          {/* Toggle Button */}
          <button className="readMoreButton" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Show Less ⮝" : "Read More ⮟"}
          </button>

          {/* Expandable Content */}
          <div className={`expandableContent ${isExpanded ? "expanded" : ""}`}>
            <p>
              Strokeland is a 3D multiplayer sandbox game I'm currently developing in Unity--similar to VR chat without the VR, or Tower Unite.<br/>
              Now that the entire source code & build files are available to the public, we can start to see the beginning of a new interactive experience powered by Stroke enthusiasts everywhere.
            </p>
            <p>
              Follow our socials to stay up to date with announcements, progress updates, memes, and more!
            </p>
            <a href="https://github.com/TheStrokeKing/Strokeland-BETA" target="_blank" rel="noopener noreferrer">
              Check out the GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrokelandSection;
