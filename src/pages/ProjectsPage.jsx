import React, { useEffect, useRef } from "react";
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
  // {
  //   title: "Team Abilities",
  //   description: "Tracking team abilities over time using Power BI.",
  //   images: [PowerBITeamAbilities, PowerBITeamPerformanceOverTime],
  // },
];

const ProjectsPage = () => {
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
      {/* Line */}
      <div
        style={{
          border: "3px solid white",
          position: "absolute",
          left: "50%",
          top: "130px",
          bottom: 0,
          transform: "translateX(-50%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          width: "20px",
          height: "20px",
          background: "white",
          borderRadius: "50%",
          top: "130px",
          bottom: 0,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Projects */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "100px",
          width: "85%",
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
