import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import PowerBIGameDashboard from "../assets/PowerBIGameDashboard.png";
import PowerBITeamAbilities from "../assets/PowerBITeamAbilities.png";
import PowerBITeamPerformanceOverTime from "../assets/PowerBITeamPerformanceOverTime.png";
import { Code2 } from "lucide-react";

const projects = [
  {
    title: "VScouter - FRC Scouting App",
    subtitle:
      "Used by 20+ FRC teams worldwide to analyze performance and optimize strategy",
    details: [
      "Collect and organize robot performance data via mobile and web platforms",
      "Analyze match and team data with advanced visualization tools (Power BI, Tableau) to give insight for alliance selection",
      "Adopted by 20+ teams internationally, supporting strategic decisions in real competitions",
      "Provides an easy to use interface for both beginner and advanced users",
    ],
    skills: [
      "Data Analysis",
      "Data Visualization",
      "Power BI",
      "Tableau",
      "React",
      "JavaScript",
    ],
    time: "2024-present",
    learnMoreLink: "https://vscouter.netlify.app/home",
    images: [
      PowerBIGameDashboard,
      PowerBITeamAbilities,
      PowerBITeamPerformanceOverTime,
    ],
  },
  {
    title: "",
    subtitle:
      "Used by 20+ FRC teams worldwide to analyze performance and optimize strategy",
    details: [
      "Collect and organize robot performance data via mobile and web platforms",
      "Analyze match and team data with advanced visualization tools (Power BI, Tableau) to give insight for alliance selection",
      "Adopted by 20+ teams internationally, supporting strategic decisions in real competitions",
      "Provides an easy to use interface for both beginner and advanced users",
    ],
    skills: [
      "Data Analysis",
      "Data Visualization",
      "Power BI",
      "Tableau",
      "React",
      "JavaScript",
    ],
    time: "2024-present",
    learnMoreLink: "https://vscouter.netlify.app/home",
    images: [
      PowerBIGameDashboard,
      PowerBITeamAbilities,
      PowerBITeamPerformanceOverTime,
    ],
  },
  {
    title: "VScouter - FRC Scouting App",
    subtitle:
      "Used by 20+ FRC teams worldwide to analyze performance and optimize strategy",
    details: [
      "Collect and organize robot performance data via mobile and web platforms",
      "Analyze match and team data with advanced visualization tools (Power BI, Tableau) to give insight for alliance selection",
      "Adopted by 20+ teams internationally, supporting strategic decisions in real competitions",
      "Provides an easy to use interface for both beginner and advanced users",
    ],
    skills: [
      "Data Analysis",
      "Data Visualization",
      "Power BI",
      "Tableau",
      "React",
      "JavaScript",
    ],
    time: "2024-present",
    learnMoreLink: "https://vscouter.netlify.app/home",
    images: [
      PowerBIGameDashboard,
      PowerBITeamAbilities,
      PowerBITeamPerformanceOverTime,
    ],
  },
  {
    title: "VScouter - FRC Scouting App",
    subtitle:
      "Used by 20+ FRC teams worldwide to analyze performance and optimize strategy",
    details: [
      "Collect and organize robot performance data via mobile and web platforms",
      "Analyze match and team data with advanced visualization tools (Power BI, Tableau) to give insight for alliance selection",
      "Adopted by 20+ teams internationally, supporting strategic decisions in real competitions",
      "Provides an easy to use interface for both beginner and advanced users",
    ],
    skills: [
      "Data Analysis",
      "Data Visualization",
      "Power BI",
      "Tableau",
      "React",
      "JavaScript",
    ],
    time: "2024-present",
    learnMoreLink: "https://vscouter.netlify.app/home",
    images: [
      PowerBIGameDashboard,
      PowerBITeamAbilities,
      PowerBITeamPerformanceOverTime,
    ],
  },
  // {
  //   title: "Team Abilities",
  //   description: "Tracking team abilities over time using Power BI.",
  //   images: [PowerBITeamAbilities, PowerBITeamPerformanceOverTime],
  // },
];

const ProjectsPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const project = projects[0];

  useEffect(() => {
    console.log("setting up interval");
    const interval = setInterval(() => {
      console.log("changing image");
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % project.images.length
      );
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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

      {/* Projects */}
      <div style={{ display: "flex", flexDirection: "row", width: "90%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "250px",
            width: "50%",
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div
          style={{
            width: "50%",
            height: "300px",
            position: "sticky",
            top: "50vh",
            transform: "translateY(-50%)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={project.images[currentImageIndex]}
            alt="Project Visual"
            style={{
              maxWidth: "95%",
              maxHeight: "100%",
              objectFit: "contain",
              borderRadius: "15px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
