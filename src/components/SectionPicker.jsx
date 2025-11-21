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
                            justifyContent: "center"
                        }}
                    >
                        <SectionPickerCard title={"Experiences"} description={"..."} image={AboutMePicture} destination={"experiences"}/>
                        <SectionPickerCard title={"Youtube"} description={"..."} image={AboutMePicture} destination={""}/>
                        <SectionPickerCard title={"Projects"} description={"..."} image={AboutMePicture} destination={"projects"}/>
                        <SectionPickerCard title={"??"} description={"..."} image={AboutMePicture} destination={""}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default SectionPicker;
