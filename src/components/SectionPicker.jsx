import React from "react";
import SectionPickerCard from "./SectionPickerCard";
import AboutMePicture from "../assets/AboutMePicture.jpg";

const SectionPicker = () => {
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
                    style={{ paddingBottom: "75px", borderBottom: "4px solid #e5e7eb" }}
                >
                    <div style={{ margin: "0 70px" }}>
                        <h1
                            style={{
                                fontSize: "40px",
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
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: "20px",
                                rowGap: "30px",
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
                                    gridColumn: "1 / -1",
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
