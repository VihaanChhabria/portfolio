import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "../components/ProjectsComponents/ProjectCard";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import useResponsive from "../hooks/useResponsive";
import projects from "../data/projects";

const ProjectsPage = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useResponsive();

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  const [currentImageIndices, setCurrentImageIndices] = useState(
    projects.map(() => 0)
  );
  const sectionsRef = useRef([]);

  const handleImageIndexChange = (projectIndex, newIndex) => {
    setCurrentImageIndices((prev) => {
      const updated = [...prev];
      updated[projectIndex] = newIndex;
      return updated;
    });
  };

  const handlePrev = (projectIndex, imagesLength) => {
    if (imagesLength <= 1) return;
    const currentIndex = currentImageIndices[projectIndex];
    const newIndex = currentIndex === 0 ? imagesLength - 1 : currentIndex - 1;
    handleImageIndexChange(projectIndex, newIndex);
  };

  const handleNext = (projectIndex, imagesLength) => {
    if (imagesLength <= 1) return;
    const currentIndex = currentImageIndices[projectIndex];
    const newIndex = (currentIndex + 1) % imagesLength;
    handleImageIndexChange(projectIndex, newIndex);
  };

  const containerPaddingHorizontal = isMobile
    ? "20px"
    : isTablet
      ? "40px"
      : "120px";
  const titleFontSize = isMobile ? "28px" : isTablet ? "34px" : "40px";
  const carouselHeight = isMobile ? "250px" : isTablet ? "350px" : "500px";
  const projectGap = isMobile ? "60px" : isTablet ? "100px" : "175px";
  const arrowSize = isMobile ? 20 : 24;
  const buttonFontSize = isMobile ? "16px" : "20px";

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <button
        style={{
          position: "absolute",
          top: "10px",
          left: isMobile ? "10px" : "10px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: 1000,
        }}
        onClick={() => navigate("/")}
      >
        <ArrowLeft size={isMobile ? 28 : 35} />
      </button>
      <h1
        style={{
          fontSize: titleFontSize,
          textAlign: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
          paddingLeft: isMobile ? "50px" : "0",
          paddingRight: isMobile ? "50px" : "0",
        }}
        className="gradient-text"
      >
        Learn About My Projects
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: "60px",
          paddingLeft: containerPaddingHorizontal,
          paddingRight: containerPaddingHorizontal,
          width: "100%",
          maxWidth: "1400px",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              marginBottom: index < projects.length - 1 ? projectGap : "0",
              paddingBottom: "15px",
              paddingLeft: "20px",
              paddingRight: "20px",
              borderBottom:
                index < projects.length - 1 ? "4px solid #e5e7eb" : "none",
            }}
          >
            {/* Project Card */}
            <div>
              <ProjectCard project={project} />
            </div>

            {/* Image Carousel */}
            <div
              style={{
                width: "100%",
                height: carouselHeight,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                position: "relative",
                borderRadius: "15px",
                backgroundColor: "#1a1a1a",
              }}
            >
              {project.images.length > 1 && (
                <button
                  onClick={() => handlePrev(index, project.images.length)}
                  style={{
                    position: "absolute",
                    left: "10px",
                    background: "rgba(75, 75, 75, 0.7)",
                    border: "none",
                    borderRadius: "50%",
                    padding: "10px",
                    cursor: "pointer",
                    zIndex: 10,
                  }}
                >
                  <ChevronLeft size={arrowSize} />
                </button>
              )}
              <div
                style={{
                  display: "flex",
                  transition: "transform 0.5s ease-in-out",
                  transform: `translateX(-${currentImageIndices[index] * 100}%)`,
                  width: "100%",
                  height: "100%",
                }}
              >
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    style={{
                      width: "100%",
                      height: "100%",
                      flexShrink: 0,
                      objectFit: "contain",
                      borderRadius: "15px",
                    }}
                  />
                ))}
              </div>
              {project.images.length > 1 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    gap: "6px",
                    zIndex: 10,
                  }}
                >
                  {project.images.map((_, i) => (
                    <span
                      key={i}
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background:
                          i === currentImageIndices[index]
                            ? "#fff"
                            : "rgba(255,255,255,0.5)",
                        transition: "background 0.3s",
                      }}
                    />
                  ))}
                </div>
              )}

              {project.images.length > 1 && (
                <button
                  onClick={() => handleNext(index, project.images.length)}
                  style={{
                    position: "absolute",
                    right: "10px",
                    background: "rgba(75, 75, 75, 0.7)",
                    border: "none",
                    borderRadius: "50%",
                    padding: "10px",
                    cursor: "pointer",
                    zIndex: 10,
                  }}
                >
                  <ChevronRight size={arrowSize} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "20px", width: "100%" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            background: "rgba(75, 75, 75, 0.7)",
            border: "none",
            borderRadius: "6px",
            padding: "10px 20px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          <span style={{ fontSize: buttonFontSize }}>Back to Home Page</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectsPage;
