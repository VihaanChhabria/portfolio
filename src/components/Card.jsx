import React from "react";

const Card = ({ title, subtitle, details, skills, time }) => {
  return (
    <div
      style={{
        border: "2px solid #dcdcdcff",
        borderRadius: "10px",
        width: "calc(100% - 200px)",
        padding: "20px",
        marginBottom: "30px",
      }}
    onMouseEnter={(e) => {
        e.currentTarget.style.transition = "border-color 200ms";
        e.currentTarget.style.borderColor = "#a78bfa";
    }}
    onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#dcdcdcff";
    }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <h3 style={{ margin: "0px", fontSize: "25px" }}>{title}</h3>
        <div
          style={{
            backgroundColor: "#a78bfa22",
            width: "fit-content",
            padding: "5px 10px",
            borderRadius: "20px",
            marginTop: "10px",
            fontSize: "16px",
          }}
        >
          <p
            style={{
              margin: "0px",
              padding: "0px",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            {time}
          </p>
        </div>
      </div>
      <h3
        style={{
          margin: "0px",
          marginTop: "5px",
          fontSize: "18px",
          color: "#a78bfa",
        }}
      >
        {subtitle}
      </h3>
      <ul>
        {details.map((detail, index) => (
          <li key={index} style={{ fontSize: "16.5px", marginTop: "10px" }}>
            {detail}
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", gap: "10px" }}>
        {skills.map((skill, index) => (
          <div
            style={{
              border: "1.5px solid #a3a3a3ff",
              width: "fit-content",
              padding: "3px 7px",
              borderRadius: "20px",
              marginTop: "10px",
              fontSize: "16px",
            }}
          >
            <p
              style={{
                margin: "0px",
                padding: "0px",
                fontWeight: "bold",
                fontSize: "12px",
              }}
            >
              {skill}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
