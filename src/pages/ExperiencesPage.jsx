import { CircleStar, GraduationCap, Heart, Users } from "lucide-react";
import React, { useEffect } from "react";
import Section from "../components/Section";
import Card from "../components/Card";

const ExperiencesPage = () => {
  useEffect(() => {
    scrollTo(0, 0); 
  }, []);
  return (
    <div>
      <Section
        icon={<GraduationCap size={58} color="#a78bfa" />}
        title={"Education"}
        cards={
          <>
            <Card
              title={"Grade 10"}
              subtitle={
                <>
                  Perkiomen Valley High School (PVHS)
                  <span style={{ color: "white" }}> • Collegeville, PA</span>
                </>
              }
              details={[
                "GPA: 5.0 (Weighted) | 4.0 (Unweighted)",
                "10th Grade AP/College Level Selected Courses: Biology, Chemistry, Human Geography, Calculus AB, Data Structures Using C++ @ Leigh Carbon Community College",
                "9th Grade AP/College Selected Courses: Precalculus, US Government, Computer Science Principles, Intro Computer Science - Programming C++ @ Leigh Carbon Community College",
              ]}
              skills={["Academic Excellence", "High Achiever"]}
              time={"Present"}
            />
          </>
        }
      />
      <Section
        icon={<Heart size={58} color="#a78bfa" />}
        title={"Healthcare & Community Service"}
        cards={
          <>
            <Card
              title={"Hospital Volunteer & Shadow"}
              subtitle={
                <>
                  Reading Hospital - Tower Health
                  <span style={{ color: "white" }}>
                    {" "}
                    • Emergency Department
                  </span>
                </>
              }
              details={[
                "Shadow doctors and nurses in the Emergency Department",
                "Assist with stocking equipment, collecting supplies, and medication",
                "Assemble bags for food donations",
              ]}
              skills={["Healthcare", "Emergency Medicine", "Volunteering"]}
              time={"2025–present"}
            />
            <Card
              title={"Family Practice Shadow"}
              subtitle={"General Physician Dr. Christopher Drumm"}
              details={[
                "Observe clinical practice and patient interactions",
                "Learn about diagnosis, treatment planning, and patient care",
              ]}
              skills={["Clinical Experience", "Primary Care", "Patient Care"]}
              time={"2024–present"}
            />
            <Card
              title={"Community Volunteer"}
              subtitle={"Collegeville Food Pantry"}
              details={[
                "Organize operations and distribute donated food efficiently",
                "Collaborate to support community needs",
              ]}
              skills={["Community Service", "Organization", "Teamwork"]}
              time={"2024–present"}
            />
          </>
        }
      />
      <Section
        icon={<Users size={58} color="#a78bfa" />}
        title={"Leadership & Mentorship"}
        cards={
          <>
            <Card
              title={"Class President & Former Vice-President"}
              subtitle={"Perkiomen Valley High School"}
              details={[
                "Elected Vice-President in Grade 9 and President in Grade 10",
                "Advocate for student needs in meetings with administrators",
                "Led initiatives to enhance student safety, including watering all sports fields",
              ]}
              skills={["Student Government", "Advocacy", "Leadership"]}
              time={"2024–present"}
            />
            <Card
              title={"Student Leader"}
              subtitle={"PVHS Gifted Task Force & Student Leadership Committee"}
              details={[
                "Guide incoming freshmen in academic and extracurricular transitions",
                "Promoted teamwork and collaboration",
              ]}
              skills={["Mentorship", "Guidance", "Collaboration"]}
              time={"2024–present"}
            />
            <Card
              title={"Debate Member & Middle School Coach"}
              subtitle={"***"}
              details={[
                "Compete in Congressional Debate with multiple wins",
                "Mentor 10 middle school students in public speaking, strategy, and teamwork",
              ]}
              skills={["Debate", "Public Speaking", "Coaching", "Mentorship"]}
              time={"2022–present"}
            />
          </>
        }
      />
      <Section
        icon={<CircleStar size={58} color="#a78bfa" />}
        title={"Athletics"}
        cards={
          <>
            <Card
              title={"Defensive Center Back"}
              subtitle={"Perkiomen Valley Travel Soccer Team"}
              details={[
                "Demonstrate leadership, strategic thinking, and strong communication on the field",
                "Maintain composure under pressure and make quick decisions",
                "Collaborate effectively as a team player to execute game strategies",
              ]}
              skills={["Soccer", "Leadership", "Teamwork", "Strategy"]}
              time={"2021–present"}
            />
          </>
        }
      />
    </div>
  );
};

export default ExperiencesPage;
