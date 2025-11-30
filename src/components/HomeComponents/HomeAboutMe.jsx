import React from "react";
import AboutMePicture from "../../assets/AboutMePicture.jpg";
import useResponsive from "../../hooks/useResponsive";

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
          src={AboutMePicture}
          style={{
            height: imageHeight,
            width: imageWidth,
            maxWidth: "100%",
            objectFit: "cover",
            borderRadius: "15px",
            flexShrink: 0,
          }}
        />
        <p style={{ fontSize: fontSize, lineHeight: "1.6", marginTop: "0px" }}>
          Hello! I'm Vihaan Chhabria, a passionate high school student in Grade
          10 with a deep interest in the sciences and a strong desire to pursue
          a career in medicine. I am fascinated by the intricacies of human
          biology and the advancements in medical science that improve lives
          every day. Beyond academics, I am actively involved in my school's
          student government as the Class President, where I strive to make a
          positive impact on my school community. I also enjoy playing soccer,
          which has taught me valuable lessons in teamwork and perseverance.
        </p>
      </div>
    </div>
  );
};

export default HomeAboutMe;
