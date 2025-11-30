import React from "react";
import useResponsive from "../../hooks/useResponsive";

const ExperiencesSection = ({ icon, title, cards }) => {
  const { isMobile, isTablet } = useResponsive();

  const titleFontSize = isMobile ? "28px" : isTablet ? "34px" : "40px";
  const paddingTop = isMobile ? "20px" : "30px";
  const paddingBottom = isMobile ? "40px" : "60px";

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: paddingTop,
          borderBottom: "4px solid #e5e7eb",
          paddingBottom: paddingBottom,
          backgroundColor: "#242424",
          zIndex: "999",
          position: "relative",
        }}
      >
        <div style={{ transform: `scale(${isMobile ? 0.7 : 1})` }}>{icon}</div>

        <h1
          style={{
            fontSize: titleFontSize,
            marginTop: "10px",
            paddingBottom: "30px",
            textAlign: "center",
          }}
          className="gradient-text"
        >
          {title}
        </h1>

        {cards}
      </div>
    </div>
  );
};

export default ExperiencesSection;
