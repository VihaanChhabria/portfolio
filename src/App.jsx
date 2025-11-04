import { useState } from "react";
import profilePicture from "./assets/VihaanProfilePic.jpg";
import gridImage from "./assets/gridImage.svg";
import {
  FileUser,
  Github,
  GithubIcon,
  Linkedin,
  LucideGithub,
  Mail,
} from "lucide-react";
import linkedin from "./assets/linkedin.svg";
import youtube from "./assets/youtube.svg";
import github from "./assets/github.svg";

function App() {
  console.log(gridImage);
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(135deg, #a78bfa82 0%, #e2e8f043 100%)",
      }}
    >
      <div className="grid-pattern" style={{paddingBottom: "75px", borderBottom: "4px solid #e5e7eb"}}>
        <div style={{ margin: "0 100px" }}>
          <h2 style={{ paddingTop: "10px", marginTop: "0px"}}>
            Vihaan Chhabria
          </h2>
          <div
            style={{
              height: "480px",
              marginTop: "70px",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <img
              src={profilePicture}
              style={{
                height: "100%",
                borderRadius: "15px",
              }}
            />
            <div style={{ marginLeft: "30px", height: "100%" }}>
              <h2 style={{ fontSize: "20px" }}>
                Hi, I'm Vihaan Chhabria, and I love
              </h2>
              <h1 style={{ display: "inline", fontSize: "60px" }}>
                Exploring The <span className="gradient-text">Science</span>{" "}
                That Keeps Us Alive 🧬
              </h1>
              <h2 style={{ fontSize: "25px", marginTop: "45px" }}>
                High School Student | Aspiring Physician
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "275px",
                  gap: "20px",
                  marginTop: "45px"
                }}
              >
                <img src={linkedin} height={"35px"} />
                <img src={github} height={"35px"} />
                <img src={youtube} height={"35px"} />
                <Mail size={35} />
                <FileUser size={35} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
