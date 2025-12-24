import React from "react";
import { useNavigate } from "react-router-dom";
import useResponsive from "../../hooks/useResponsive";

const HomeSectionPickerCard = ({ title, description, image, destination }) => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  const flexDirection = isMobile ? "column" : "row";
  const imageHeight = isMobile ? "150px" : "100px";
  const imageWidth = isMobile ? "100%" : "auto";
  const titleFontSize = isMobile ? "20px" : "25px";
  const descriptionFontSize = isMobile ? "15px" : "16.5px";
  const padding = isMobile ? "15px" : "20px";

  return (
    <div
      style={{
        border: "2px solid #dcdcdcff",
        borderRadius: "10px",
        padding: padding,
        display: "flex",
        flexDirection: flexDirection,
        justifyContent: "space-between",
        gap: "20px",
        backgroundColor: "rgba(36, 36, 36, 0.6)",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transition = "border-color 200ms";
        e.currentTarget.style.borderColor = "#a78bfa";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#dcdcdcff";
      }}
    >
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: "0px", fontSize: titleFontSize }}>{title}</h3>
        <p style={{ fontSize: descriptionFontSize }}>{description}</p>
        <button
          style={{
            background: "transparent",
            border: "1.5px solid rgba(255, 255, 255, 0.35)",
            color: "#ffffff",
            padding: "6px 10px",
            marginTop: "10px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px",
            lineHeight: "1",
            outline: "none",
            transition:
              "background-color 150ms, border-color 150ms, color 150ms, box-shadow 150ms",
          }}
          onClick={() => navigate(destination)}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)";
            e.currentTarget.style.borderColor = "#a78bfa";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.35)";
          }}
        >
          Learn More →
        </button>
      </div>
      <img
        src={image}
        style={{
          height: imageHeight,
          width: imageWidth,
          maxWidth: "100%",
          objectFit: "contain",
          borderRadius: "10px",
          flexShrink: 0,
        }}
      />
    </div>
  );
};

export default HomeSectionPickerCard;
