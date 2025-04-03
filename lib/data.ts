import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import summarizeImg from "@/public/summarize.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    title: "BCA",
    location: "JIMS, Delhi",
    description:
      "Completed Bachelor of Computer Applications (BCA) from JIMS, Delhi with 9.0 CGPA",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    title: "MCA",
    location: "VIPS, Delhi",
    description:
      "Completed Master of Computer Applications (MCA) from VIPS, Delhi with 8.5 CGPA",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
];

export const experiencesData = [
  {
    title: "Software Developer Intern",
    location: "Delhi, IN",
    description:
      "Worked as a software developer intern at Symbiotic Consulting Group working on tech stack of C#, .NET, SQL",
    icon: React.createElement(CgWorkAlt),
    date: "2023 DEC - 2024 APR",
  },
  {
    title: "Software Developer",
    location: "Delhi, IN",
    description:
      "Working as a Full Stack Software Developer at Symbiotic Consulting Group",
    icon: React.createElement(CgWorkAlt),
    date: "2024 MAY - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Summarize",
    description:
      "A Full stack web app that let users upload pdf and get super concise and on-point summary of it using AI.",
    tags: [
      "React",
      "Next.js",
      "Neon DB",
      "Tailwind",
      "OPEN AI",
      "Gemini AI",
      "SQL",
      "CLERK",
    ],
    imageUrl: summarizeImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "C#",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "SQL",
  "MongoDB",
  "GraphQL",
  "Express",
  ".Net",
] as const;
