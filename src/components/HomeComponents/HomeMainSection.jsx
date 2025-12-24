import React from "react";
import profilePicture from "../../assets/VihaanProfilePic.jpg";
import { FileUser, Mail } from "lucide-react";
import linkedin from "../../assets/linkedin.svg";
import youtube from "../../assets/youtube.svg";
import github from "../../assets/github.svg";

import useResponsive from "../../hooks/useResponsive";
import modeChange from "../config/modeChange";

const HomeMainSection = () => {
  const { isMobile, isTablet } = useResponsive();

  const containerMargin = isMobile ? "0 20px" : isTablet ? "0 40px" : "0 100px";
  const flexDirection = isMobile ? "column" : "row";
  const titleFontSize = isMobile ? "32px" : isTablet ? "42px" : "60px";
  const subtitleFontSize = isMobile ? "18px" : isTablet ? "20px" : "25px";
  const introFontSize = isMobile ? "16px" : isTablet ? "18px" : "20px";
  const socialWidth = isMobile ? "100%" : "275px";
  const socialGap = isMobile ? "15px" : "20px";
  const sectionMarginTop = isMobile ? "30px" : "70px";
  const sectionPaddingBottom = isMobile ? "40px" : "75px";

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(135deg, #a78bfab0 0%, #e2e8f043 100%)",
      }}
    >
      <div
        className="grid-pattern"
        style={{
          paddingBottom: sectionPaddingBottom,
          borderBottom: "4px solid #e5e7eb",
        }}
      >
        <div style={{ margin: containerMargin }}>
          <h2
            style={{
              paddingTop: "20px",
              marginTop: "0px",
              fontSize: isMobile ? "24px" : "inherit",
            }}
          >
            Vihaan Chhabria
          </h2>
          <div
            style={{
              marginTop: sectionMarginTop,
              display: "flex",
              alignItems: isMobile ? "flex-start" : "center",
              flexDirection: flexDirection,
            }}
          >
            <img
              src={profilePicture}
              style={{
                height: "480px",
                width: isMobile ? "100%" : "auto",
                maxWidth: "100%",
                objectFit: "cover",
                borderRadius: "15px",
                zIndex: "999",
                position: "relative",
              }}
            />
            <div
              style={{
                marginLeft: isMobile ? "0" : "30px",
                height: isMobile ? "auto" : "100%",
                width: isMobile ? "100%" : "auto",
              }}
            >
              <h2
                style={{
                  fontSize: introFontSize,
                  marginTop: isMobile ? "20px" : "0",
                }}
              >
                Hi, I'm Vihaan Chhabria, and I love
              </h2>
              <h1
                style={{
                  display: "inline",
                  fontSize: titleFontSize,
                  lineHeight: "1.2",
                }}
              >
                {modeChange(
                  // 1. Medicine (unchanged)
                  <>
                    Exploring The <span className="gradient-text">Science</span>{" "}
                    That Keeps Us Alive 🔬
                  </>,

                  // 2. Engineering
                  <>
                    Exploring The <span className="gradient-text">Engineering</span>{" "}
                    That Builds Our Future ⚙️
                  </>,

                  // 3. General
                  <>
                    Exploring The <span className="gradient-text">Ideas</span>{" "}
                    That Shape Our World 🌍
                  </>
                )}

              </h1>
              <h2
                style={{
                  fontSize: subtitleFontSize,
                  marginTop: isMobile ? "25px" : "45px",
                }}
              >
                High School Student (Grade 10)
                {modeChange(
                  <>{" "}|{" "}<span style={{ color: "#a78bfa" }}>Aspiring Physician</span></>,
                  <>{" "}|{" "}<span style={{ color: "#a78bfa" }}>Future Engineer</span></>,
                  <></>
                )}

              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: isMobile ? "flex-start" : "space-between",
                  width: socialWidth,
                  gap: socialGap,
                  marginTop: isMobile ? "30px" : "45px",
                  zIndex: "999",
                  position: "relative",
                  flexWrap: "wrap",
                }}
              >
                {/*<img
                  src={linkedin}
                  height={isMobile ? "30px" : "35px"}
                  onClick={() =>
                    window.open("https://www.linkedin.com/", "_blank")
                  }
                  style={{ cursor: "pointer" }}
                />*/}
                <img
                  src={github}
                  height={isMobile ? "30px" : "35px"}
                  onClick={() =>
                    window.open("https://github.com/VihaanChhabria/", "_blank")
                  }
                  style={{ cursor: "pointer" }}
                />
                <img
                  src={youtube}
                  height={isMobile ? "30px" : "35px"}
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/@vihaanthebot/",
                      "_blank"
                    )
                  }
                  style={{ cursor: "pointer" }}
                />
                <Mail
                  size={isMobile ? 30 : 35}
                  onClick={() =>
                    window.open("mailto:chhabria.vihaan2@gmail.com", "_blank")
                  }
                  style={{ cursor: "pointer" }}
                />
                <FileUser
                  size={isMobile ? 30 : 35}
                  onClick={() =>
                    window.open(
                      `${window.location.origin}/VihaanChhabriaResume.pdf`,
                      "_blank"
                    )
                  }
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMainSection;
