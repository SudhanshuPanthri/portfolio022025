import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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

export const experiencesData = [{
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
{
    title: "Software Developer Intern",
    location: "Delhi, IN",
    description:
        "Worked as a software developer intern at Symbiotic Consulting Group for 6 months working on tech stack of C#, .NET, SQL",
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
        title: "CorpComment",
        description:
            "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
        imageUrl: corpcommentImg,
    },
    {
        title: "rmtDev",
        description:
            "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: rmtdevImg,
    },
    {
        title: "Word Analytics",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: wordanalyticsImg,
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