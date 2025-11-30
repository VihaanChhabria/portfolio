import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import PowerBIGameDashboard from "../assets/PowerBIGameDashboard.png";
import { ChevronLeft, ChevronRight, Code2 } from "lucide-react";

import ArrowSwap1 from "../assets/ProjectImages/ArrowSwap1.png";
import ArrowSwap2 from "../assets/ProjectImages/ArrowSwap2.png";
import FountainQRCodeDemo1 from "../assets/ProjectImages/FountainQRCodeDemo1.png";
import FountainQRCodeDemo2 from "../assets/ProjectImages/FountainQRCodeDemo2.png";
import FRC2024NoteDetector1 from "../assets/ProjectImages/FRC2024NoteDetector1.png";
import FRCLimelightOffsetCalibration1 from "../assets/ProjectImages/FRCLimelightOffsetCalibration1.png";
import FRCLimelightOffsetCalibration2 from "../assets/ProjectImages/FRCLimelightOffsetCalibration2.png";
import FRCReefscapeReefTracker1 from "../assets/ProjectImages/FRCReefscapeReefTracker1.png";
import FTCAutonomousPlanner1 from "../assets/ProjectImages/FTCAutonomousPlanner1.png";
import FTCAutonomousPlanner2 from "../assets/ProjectImages/FTCAutonomousPlanner2.png";
import GavelPal1 from "../assets/ProjectImages/GavelPal1.png";
import VRoboHub1 from "../assets/ProjectImages/VRoboHub1.png";
import VRoboHub2 from "../assets/ProjectImages/VRoboHub2.png";
import VScouter1 from "../assets/ProjectImages/VScouter1.png";
import VScouter2 from "../assets/ProjectImages/VScouter2.png";
import VScouter3 from "../assets/ProjectImages/VScouter3.png";
import VScouter4 from "../assets/ProjectImages/VScouter4.png";
import YDEP1 from "../assets/ProjectImages/YDEP1.png";
import YDEP2 from "../assets/ProjectImages/YDEP2.png";

const projects = [
  {
    title: "VScouter - FRC Scouting App",
    subtitle:
      "Used by 20+ FRC teams worldwide to analyze performance and optimize strategy",
    details: [
      "Collect and organize robot performance data via mobile and web platforms",
      "Analyze match and team data with advanced visualization tools (Power BI, Tableau) to give insight for alliance selection",
      "Adopted by 20+ teams internationally, supporting strategic decisions in real competitions",
      "Provides an easy-to-use interface for both beginner and advanced users",
      "Open-source, helping teams worldwide access reliable data freely",
    ],
    skills: [
      "Data Analysis",
      "Data Visualization",
      "Power BI",
      "Tableau",
      "React",
      "JavaScript",
    ],
    learnMoreLink: "https://github.com/VihaanChhabria/",
    images: [
      VScouter1,
      VScouter2,
      VScouter3,
      VScouter4,
    ],
  },
  {
    title: "VRoboHub",
    subtitle: "Collective platform for unified FRC scouting data to level the playing field",
    details: [
      "Integrates data from multiple FRC scouting apps to create a central, reliable dataset",
      "Supports strategic decision-making across teams, promoting fairness and collaboration",
      "Experience with data aggregation, database management, and real-time updates",
      "Developed skills in designing accessible, collaborative software solutions",
      "Open-source to provide equitable access to high-quality scouting data",
    ],
    skills: ["Database Management", "React", "JavaScript", "Data Aggregation", "Collaboration Tools"],
    learnMoreLink: "https://github.com/VihaanChhabria/",
    images: [
      VRoboHub1,
      VRoboHub2
    ],
  },
  {
    title: "GavelPal",
    subtitle: "Tool to manage timing and questioning for high school debate presiding officers",
    details: [
      "Automates speech timing and questioning tracking to improve efficiency and fairness",
      "Experience translating problem-solving skills from debate to practical software solutions",
      "Enhanced organizational and multitasking skills transferable to managing medical workflows",
      "Open-source to help other students freely improve debate experiences",
    ],
    skills: ["JavaScript", "App Development", "UI/UX Design", "Problem-Solving", "Automation"],
    learnMoreLink: "https://github.com/VihaanChhabria/",
    images: [
      GavelPal1
    ],
  },
  {
    title: "FTC-Autonomous-Planner",
    subtitle: "Simplifies creation of autonomous routines for FTC robots",
    details: [
      "Visual interface to plan, simulate, and export autonomous routines efficiently",
      "Experience with translating complex movements into structured, executable plans",
      "Strengthened logical thinking and stepwise problem-solving skills relevant to medicine",
      "Open-source to support students learning robotics strategy",
    ],
    skills: ["React", "JavaScript", "Simulation", "Algorithm Design", "Planning Tools"],
    learnMoreLink: "https://github.com/VihaanChhabria/",
    images: [
      FTCAutonomousPlanner1,
      FTCAutonomousPlanner2
    ],
  },
  {
    title: "YDEP",
    subtitle: "Automates creation of social media-ready video shorts with interactive overlays",
    details: [
      "Records, edits, and formats videos automatically, demonstrating automation skills",
      "Experience with workflow automation and handling multimedia data",
      "Shows ability to connect creative tools with practical outputs, similar to designing medical education or patient tools",
      "Open-source to allow free access for content creators",
    ],
    skills: ["Python", "Video Processing", "Automation", "Creative Programming", "UI Development"],
    learnMoreLink: "https://github.com/VihaanChhabria/",
    images: [
      YDEP1,
      YDEP2
    ],
  },
  {
    title: "FRC 2024 NoteDetector",
    subtitle: "Prototype to detect 2024 FRC game notes for robot navigation",
    details: [
      "Image recognition software to detect objects for autonomous robot actions",
      "Experience with computer vision and real-time decision making",
      "Improves analytical thinking and pattern recognition skills applicable to diagnostics",
      "Open-source, sharing code to help other teams implement similar systems",
    ],
    skills: ["Computer Vision", "Python", "OpenCV", "Algorithm Design", "Robotics"],
    learnMoreLink: "https://github.com/VihaanChhabria/",
    images: [
      FRC2024NoteDetector1
    ],
  },
  {
    title: "Fountain QR Code Demo",
    subtitle: "Showcases high-speed data transfer via multiple QR codes",
    details: [
      "Innovative QR code cycling system for rapid information transfer",
      "Experience optimizing data collection and processing speed",
      "Cultivates technical problem-solving mindset, similar to rapid analysis in medicine",
      "Open-source, improving tools for the FRC community and beyond",
    ],
    skills: ["React JS", "QR Code Generation", "Data Transfer Optimization", "Problem-Solving"],
    learnMoreLink: "https://github.com/VihaanChhabria/",
    images: [
      FountainQRCodeDemo1,
      FountainQRCodeDemo2
    ],
  },
  {
    title: "FRC Reefscape Reef Tracker",
    subtitle: "Prototype for autonomous robot alignment in 2025 FRC game",
    details: [
      "Computer vision and positioning system to locate game elements",
      "Experience with real-time orientation, precision alignment, and spatial analysis",
      "Builds skills in accuracy, critical thinking, and iterative design relevant to surgical or procedural planning",
      "Open-source to contribute to community robotics innovation",
    ],
    skills: ["Computer Vision", "Python", "Spatial Analysis", "Robotics Automation"],
    learnMoreLink: "https://github.com/VihaanChhabria/",
    images: [
      FRCReefscapeReefTracker1
    ],
  },
  {
    title: "FRC Limelight Offset Calibration",
    subtitle: "Tool to calibrate FRC team's vision system for accurate targeting",
    details: [
      "Assisted another team by creating a calibration script to improve robot vision accuracy",
      "Demonstrates collaborative problem solving and technical mentoring",
      "Highlights adaptability and attention to detail, similar to clinical precision in medicine",
      "Open-source, enabling other teams to benefit from technical solutions",
    ],
    skills: ["Python", "Vision Systems", "Calibration", "Collaboration", "Problem-Solving"],
    learnMoreLink: "https://github.com/VihaanChhabria/",
    images: [
      FRCLimelightOffsetCalibration1
    ],
  },
  {
    title: "ArrowSwap",
    subtitle: "Custom app to swap arrow keys for CNC control in robotics club",
    details: [
      "Modified user input mapping to improve ergonomics and machine usability",
      "Experience in creating user-centered solutions and troubleshooting technical issues",
      "Fosters iterative problem-solving mindset applicable to medical device design",
      "Open-source, making tools accessible for educational purposes",
    ],
    skills: ["Python", "App Development", "CNC Control", "User Interface Design", "Problem-Solving"],
    learnMoreLink: "https://github.com/VihaanChhabria/",
    images: [
      ArrowSwap1
    ],
  },
];


const ProjectsPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const sectionsRef = useRef([]);

  useEffect(() => {
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
    console.log("setting up interval");
    const interval = setInterval(() => {
      console.log("changing image");
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % projects[activeProjectIndex].images.length
      );
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? activeProject.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % activeProject.images.length
    );
  };

  const activeProject = projects[activeProjectIndex];

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginLeft: "120px",
        marginRight: "120px",
      }}
    >
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

      <div style={{ display: "flex", flexDirection: "row" }}>
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
            top: "50vh",
            transform: "translateY(-50%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            marginLeft: "50px",
          }}
        >
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
        </div>
      </div>
    </div>
  );
};


export default ProjectsPage;
