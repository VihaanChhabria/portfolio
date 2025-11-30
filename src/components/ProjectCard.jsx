import React from "react";
import useResponsive from "../hooks/useResponsive";

const ProjectCard = ({ project }) => {
  const { isMobile, isTablet } = useResponsive();

  const titleFontSize = isMobile ? "20px" : isTablet ? "22px" : "25px";
  const subtitleFontSize = isMobile ? "16px" : "18px";
  const detailFontSize = isMobile ? "15px" : "16.5px";
  const buttonWidth = isMobile ? "100%" : "120px";
  const buttonFontSize = isMobile ? "14px" : "15px";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        width: "100%",
      }}
    >
      {/* Left Text */}
      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3 style={{ margin: 0, fontSize: titleFontSize }}>
            {project.title}
          </h3>
        </div>
        <h3
          style={{
            margin: "5px 0",
            fontSize: subtitleFontSize,
            color: "#a78bfa",
          }}
        >
          {project.subtitle}
        </h3>
        <ul>
          {project.details.map((detail, idx) => (
            <li
              key={idx}
              style={{ fontSize: detailFontSize, marginTop: "10px" }}
            >
              {detail}
            </li>
          ))}
        </ul>
        <button
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#865ffbff",
            color: "#fff",
            fontWeight: "medium",
            cursor: "pointer",
            transition: "background-color 200ms",
            width: buttonWidth,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#8e72e4ff")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#865ffbff")
          }
          onClick={() => window.open(project.learnMoreLink, "_blank")}
        >
          <p style={{ fontSize: buttonFontSize, margin: 0, padding: 0 }}>
            Learn More
          </p>
        </button>
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          {project.skills.map((skill, idx) => (
            <div
              key={idx}
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
                  margin: 0,
                  padding: 0,
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
    </div>
  );
};

export default ProjectCard;
