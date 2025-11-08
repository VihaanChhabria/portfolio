import React from "react";
import AboutMePicture from "../assets/AboutMePicture.jpg";

const AboutMe = () => {
  return (
    <div style={{ borderBottom: "4px solid #e5e7eb", padding: "20px 100px" }}>
      <h1
        style={{ fontSize: "40px", marginTop: "10px" }}
        className="gradient-text"
      >
        About Me
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          gap: "45px",
          marginBottom: "20px",
        }}
      >
        <img
          src={AboutMePicture}
          style={{ height: "300px", borderRadius: "15px" }}
        />
        <p style={{ fontSize: "18px", lineHeight: "1.6", marginTop: "0px" }}>
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

export default AboutMe;
