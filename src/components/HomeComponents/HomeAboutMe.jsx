import React from "react";
import useResponsive from "../../hooks/useResponsive";

import AboutMePhoto from "../../assets/HomePageImages/AboutMePhoto.jpg";
import modeChange from "../config/modeChange";

const HomeAboutMe = () => {
  const { isMobile, isTablet } = useResponsive();

  const padding = isMobile ? "20px" : isTablet ? "20px 40px" : "20px 100px";
  const flexDirection = isMobile ? "column" : "row";
  const imageHeight = isMobile ? "200px" : isTablet ? "250px" : "300px";
  const imageWidth = isMobile ? "100%" : "auto";
  const fontSize = isMobile ? "16px" : isTablet ? "17px" : "18px";
  const titleFontSize = isMobile ? "28px" : isTablet ? "34px" : "40px";
  const gap = isMobile ? "20px" : "45px";

  return (
    <div
      style={{
        borderBottom: "4px solid #e5e7eb",
        padding: padding,
        zIndex: "999",
        position: "relative",
        backgroundColor: "#242424",
      }}
    >
      <h1
        style={{ fontSize: titleFontSize, marginTop: "10px" }}
        className="gradient-text"
      >
        About Me
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: flexDirection,
          justifyContent: "space-between",
          width: "100%",
          gap: gap,
          marginBottom: "20px",
        }}
      >
        <img
          src={AboutMePhoto}
          style={{
            height: imageHeight,
            width: imageWidth,
            maxWidth: "100%",
            objectFit: "contain",
            borderRadius: "15px",
            flexShrink: 0,
          }}
        />
        <p style={{ fontSize: fontSize, lineHeight: "1.6", marginTop: "0px" }}>
          {modeChange(
            // 1. Medicine
            `Hello! I'm Vihaan Chhabria, a passionate high school student in Grade
            10 with a deep interest in the sciences and a strong desire to pursue
            a career in medicine. I am fascinated by the intricacies of human
            biology and the advancements in medical science that improve lives
            every day. Beyond academics, I am actively involved in my school's
            student government as the Class President, where I strive to make a
            positive impact on my school community. I also enjoy playing soccer,
            which has taught me valuable lessons in teamwork and perseverance.`,

            // 2. Engineering
            `Hello! I'm Vihaan Chhabria, a passionate high school student in Grade
            10 with a strong interest in engineering, technology, and problem-solving.
            I enjoy designing, building, and analyzing systems that turn ideas into
            real-world solutions. I am especially interested in how engineering and
            computer science can be used to create innovative, efficient, and impactful
            technologies. Beyond academics, I serve as my school's Class President,
            where I focus on leadership, collaboration, and improving my school
            community. I also play soccer, which has strengthened my teamwork,
            discipline, and perseverance.`,

            // 3. General
            `Hello! I'm Vihaan Chhabria, a motivated high school student in Grade
            10 with a broad interest in science, technology, and leadership. I enjoy
            learning how ideas, from biology to engineering, can be applied to solve
            real-world problems and improve everyday life. Outside the classroom,
            I am actively involved in student government as the Class President,
            working to make a positive impact on my school community. I also enjoy
            playing soccer, which has helped me develop teamwork, resilience, and
            a strong work ethic.`
          )}

        </p>
      </div>
    </div>
  );
};

export default HomeAboutMe;
