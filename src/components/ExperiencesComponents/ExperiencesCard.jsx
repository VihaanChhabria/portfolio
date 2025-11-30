import React from "react";
import useResponsive from "../../hooks/useResponsive";

const ExperiencesCard = ({ title, subtitle, details, skills, time }) => {
  const { isMobile, isTablet } = useResponsive();

  const cardWidth = isMobile
    ? "calc(100% - 60px)"
    : isTablet
      ? "calc(100% - 80px)"
      : "calc(100% - 200px)";
  const padding = isMobile ? "15px" : "20px";
  const titleFontSize = isMobile ? "20px" : isTablet ? "22px" : "25px";
  const subtitleFontSize = isMobile ? "16px" : "18px";
  const detailFontSize = isMobile ? "15px" : "16.5px";
  const flexDirection = isMobile ? "column" : "row";
  const timeMarginTop = isMobile ? "5px" : "10px";

  return (
    <div
      style={{
        border: "2px solid #dcdcdcff",
        borderRadius: "10px",
        width: cardWidth,
        padding: padding,
        marginBottom: "30px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transition = "border-color 200ms";
        e.currentTarget.style.borderColor = "#a78bfa";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#dcdcdcff";
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: flexDirection,
          justifyContent: "space-between",
          width: "100%",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? "10px" : "0",
        }}
      >
        <h3 style={{ margin: "0px", fontSize: titleFontSize }}>{title}</h3>
        <div
          style={{
            backgroundColor: "#a78bfa22",
            width: "fit-content",
            padding: "5px 10px",
            borderRadius: "20px",
            marginTop: timeMarginTop,
            fontSize: "16px",
            flexShrink: 0,
          }}
        >
          <p
            style={{
              margin: "0px",
              padding: "0px",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            {time}
          </p>
        </div>
      </div>
      <h3
        style={{
          margin: "0px",
          marginTop: "5px",
          fontSize: subtitleFontSize,
          color: "#a78bfa",
        }}
      >
        {subtitle}
      </h3>
      <ul>
        {details.map((detail, index) => (
          <li
            key={index}
            style={{ fontSize: detailFontSize, marginTop: "10px" }}
          >
            {detail}
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              border: "1.5px solid #a3a3a3ff",
              width: "fit-content",
              padding: "3px 7px",
              borderRadius: "20px",
              marginTop: "10px",
              fontSize: "16px",
            }}
          >
            <p
              style={{
                margin: "0px",
                padding: "0px",
                fontWeight: "bold",
                fontSize: "12px",
              }}
            >
              {skill}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencesCard;
