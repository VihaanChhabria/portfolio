import React from "react";
import SectionPickerCard from "./SectionPickerCard";
import AboutMePicture from "../assets/AboutMePicture.jpg";
import useResponsive from "../hooks/useResponsive";

const SectionPicker = () => {
    const { isMobile, isTablet } = useResponsive();

    const margin = isMobile ? "0 20px" : isTablet ? "0 40px" : "0 70px";
    const titleFontSize = isMobile ? "28px" : isTablet ? "34px" : "40px";
    const gridColumns = isMobile ? "1fr" : "repeat(2, 1fr)";
    const paddingBottom = isMobile ? "40px" : "75px";
    const gap = isMobile ? "15px" : "20px";
    const rowGap = isMobile ? "20px" : "30px";

    return (
        <div>
            <div
                style={{
                    backgroundImage:
                        "linear-gradient(135deg, #a78bfab0 0%, #e2e8f043 100%)",
                }}
            >
                <div
                    className="grid-pattern"
                    style={{ paddingBottom: paddingBottom, borderBottom: "4px solid #e5e7eb" }}
                >
                    <div style={{ margin: margin }}>
                        <h1
                            style={{
                                fontSize: titleFontSize,
                                marginTop: "10px",
                                paddingBottom: "30px",
                                textAlign: "center",
                                paddingTop: "20px",
                            }}
                            className="gradient-text"
                        >
                            Learn More About Me!
                        </h1>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: gridColumns,
                                gap: gap,
                                rowGap: rowGap,
                                justifyContent: "center",
                            }}
                        >
                            <SectionPickerCard
                                title={"Experiences"}
                                description={"Real-world experiences that helped me grow: problem-solving, teamwork, engineering, research, and community impact."}
                                image={AboutMePicture}
                                destination={"experiences"}
                            />
                            <SectionPickerCard
                                title={"Projects"}
                                description={"Projects where I apply coding, design, analytics, and engineering to solve real problems and build tools for teams and users."}
                                image={AboutMePicture}
                                destination={"projects"}
                            />
                            <div
                                style={{
                                    gridColumn: isMobile ? "1" : "1 / -1",
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "100%",
                                }}
                            >
                                <SectionPickerCard
                                    title={"Youtube"}
                                    description={"My space for creating, explaining, and documenting cool projects, tech experiments, and everything I'm learning."}
                                    image={AboutMePicture}
                                    destination={"youtube"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionPicker;
