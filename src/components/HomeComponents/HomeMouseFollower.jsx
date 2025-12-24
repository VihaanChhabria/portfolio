import React, { useEffect } from "react";
import modeChange from "../config/modeChange";

const HomeMouseFollower = () => {
  useEffect(() => {
    const mouseFollower = document.querySelector(".mouse-follower");
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let rotation = 0;

    const handleMouseMove = (event) => {
      targetX = event.clientX + 10;
      targetY = event.clientY + 10;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.065;
      currentY += (targetY - currentY) * 0.065;

      rotation += 0.9;

      if (mouseFollower) {
        mouseFollower.style.left = `${currentX}px`;
        mouseFollower.style.top = `${currentY}px`;
        mouseFollower.style.transform = `rotate(${rotation}deg)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        top: "-100px",
        left: "-100px",
        rotate: "-90deg",
        zIndex: 0,
      }}
      className="mouse-follower"
    >
      <h1 style={{ fontSize: "60px", lineHeight: 1, padding: 0, margin: 0, userSelect: "none" }}>
        {modeChange(
          "🧬",
          "🛠️",
          "🔎"
        )}
      </h1>
    </div>
  );
};

export default HomeMouseFollower;
