import React from "react";

const SectionPickerCard = ({ title, description, image, destination }) => {
  return (
    <div
      style={{
        border: "2px solid #dcdcdcff",
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "20px",
        backgroundColor: "rgba(36, 36, 36, 0.6)",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(10px)", 
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transition = "border-color 200ms";
        e.currentTarget.style.borderColor = "#a78bfa";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#dcdcdcff";
      }}
    >
      <div>
        <h3 style={{ margin: "0px", fontSize: "25px" }}>{title}</h3>
        <p style={{ fontSize: "16.5px" }}>{description}</p>
        <button
          style={{
            background: "transparent",
            border: "1.5px solid rgba(255, 255, 255, 0.35)",
            color: "#ffffff",
            padding: "6px 10px",
            marginTop: "10px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px",
            lineHeight: "1",
            outline: "none",
            transition:
              "background-color 150ms, border-color 150ms, color 150ms, box-shadow 150ms",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)";
            e.currentTarget.style.borderColor = "#a78bfa";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.35)";
          }}
        >
          Learn More →
        </button>
      </div>
      <img src={image} style={{ height: "100px", borderRadius: "10px" }} />
    </div>
  );
};

export default SectionPickerCard;
