import React from "react";

const Section = ({ icon, title, cards }) => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "30px",
          borderBottom: "4px solid #e5e7eb",
          paddingBottom: "60px",
          backgroundColor: "#242424",
          zIndex: "999",
          position: "relative",
        }}
      >
        {icon}

        <h1
          style={{ fontSize: "40px", marginTop: "10px", paddingBottom: "30px" }}
          className="gradient-text"
        >
          {title}
        </h1>

        {cards}
      </div>
    </div>
  );
};

export default Section;
