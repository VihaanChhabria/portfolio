import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "../components/ProjectsComponents/ProjectCard";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import projects from "../data/projects";

const ProjectsPage = () => {
  const navigate = useNavigate();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const sectionsRef = useRef([]);

  const activeProject = projects[activeProjectIndex];

  useEffect(() => {
    scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionsRef.current.indexOf(entry.target);
          if (index === -1) return;

          if (entry.isIntersecting) {
            setActiveProjectIndex(index);
            setCurrentImageIndex(0);

            sectionsRef.current.forEach((sec, i) => {
              if (!sec) return;
              sec.style.opacity = i === index ? "1" : "0.3";
            });
          }
        });
      },
      { threshold: 0.55 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeProject.images.length <= 1) return; // No need to rotate

    const rotate = () => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % activeProject.images.length
      );
    };

    const timeout = setTimeout(rotate, 6500);

    return () => clearTimeout(timeout);
  }, [currentImageIndex, activeProjectIndex, activeProject.images.length]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeProjectIndex]);

  const handlePrev = () => {
    if (activeProject.images.length <= 1) return;
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? activeProject.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    if (activeProject.images.length <= 1) return;
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % activeProject.images.length
    );
  };

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
          left: "10px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        <ArrowLeft size={35} />
      </button>
      <h1
        style={{
          fontSize: "40px",
          textAlign: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
        className="gradient-text"
      >
        Learn About My Projects
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingBottom: "60px",
          paddingLeft: "120px",
          paddingRight: "120px",
          borderBottom: "4px solid #e5e7eb",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "175px",
            width: "50%",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (sectionsRef.current[index] = el)}
              style={{
                transition: "opacity 300ms ease",
                opacity: index === 0 ? 1 : 0.3,
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* image carousel */}

        <div
          style={{
            width: "42.5%",
            height: "500px",
            position: "sticky",
            top: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            marginLeft: "50px",
          }}
        >
          {activeProject.images.length > 1 && (
            <button
              onClick={handlePrev}
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
              <ChevronLeft size={24} />
            </button>
          )}
          <div
            style={{
              display: "flex",
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${currentImageIndex * 100}%)`,
              width: "100%",
            }}
          >
            {activeProject.images.map((img, i) => (
              <img
                key={i}
                src={img}
                style={{
                  width: "100%",
                  flexShrink: 0,
                  objectFit: "contain",
                  borderRadius: "15px",
                }}
              />
            ))}
          </div>
          {activeProject.images.length > 1 && (
            <div
              style={{
                position: "absolute",
                bottom: "50px",
                display: "flex",
                justifyContent: "center",
                width: "100%",
                gap: "6px",
                zIndex: 10,
              }}
            >
              {activeProject.images.map((_, i) => (
                <span
                  key={i}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background:
                      i === currentImageIndex
                        ? "#fff"
                        : "rgba(255,255,255,0.5)",
                    transition: "background 0.3s",
                  }}
                />
              ))}
            </div>
          )}

          {activeProject.images.length > 1 && (
            <button
              onClick={handleNext}
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
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
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
          <span style={{ fontSize: "20px" }}>Back to Home Page</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectsPage;
