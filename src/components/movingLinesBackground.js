import { useEffect, useState } from "react";
import "../css/movingLinesBackground.css"; // Make sure to create this CSS file

const MovingLinesBackground = () => {
  const [lines, setLines] = useState([]);
  const maxLines = 10; // Set a limit for maximum lines

  useEffect(() => {
    const createLine = () => {
      // Only create a new line if there are fewer than maxLines
      if (lines.length >= maxLines) {
        return; // Don't create a new line if the limit is reached
      }

      const id = Math.random().toString(36).substr(2, 9);
      const isHorizontal = Math.random() > 0.5;
      const length = Math.random() * 200 + 50;
      const speed = Math.random() * 10 + 5; // Speed in seconds
      const color = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFFF33"][
        Math.floor(Math.random() * 5)
      ];

      // Assign a fixed position at creation to prevent jumping
      const position = isHorizontal
        ? { top: `${Math.random() * 100}vh`, left: "-20vw" }
        : { top: "-20vh", left: `${Math.random() * 100}vw` };

      setLines((prev) => {
        const newLines = [
          ...prev,
          { id, isHorizontal, length, speed, color, ...position },
        ];
        
        // Limit the number of lines in state
        if (newLines.length > maxLines) {
          newLines.shift(); // Remove the oldest line to keep the count under the limit
        }
        
        return newLines;
      });

      // Remove the line after its animation duration
      setTimeout(() => {
        setLines((prev) => prev.filter((line) => line.id !== id));
      }, speed * 1000);
    };

    const interval = setInterval(createLine, 1000); // New line every 5 seconds (if there are fewer than maxLines)

    return () => clearInterval(interval);
  }, [lines]); // Added lines as a dependency to ensure the effect runs when lines state changes

  return (
    <div className="moving-lines-container">
      {lines.map((line) => (
        <div
          key={line.id}
          className={`moving-line ${line.isHorizontal ? "horizontal" : "vertical"}`}
          style={{
            backgroundColor: line.color,
            width: line.isHorizontal ? `${line.length}px` : "2px",
            height: line.isHorizontal ? "2px" : `${line.length}px`,
            top: line.top,
            left: line.left,
            animation: `${line.isHorizontal ? "move-horizontal" : "move-vertical"} ${line.speed}s linear infinite`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default MovingLinesBackground;
