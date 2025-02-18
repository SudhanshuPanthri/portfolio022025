"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";


const Projects = () => {
    return (
        <motion.section>
            <SectionHeading name="Projects" />
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </motion.section>
    )
}

type ProjectProps = typeof projectsData[number];

const Project = ({
    title,
    description,
    tags,
    imageUrl
}: ProjectProps) => {
    return (
        <section>
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>
                {tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>

            <Image
                src={imageUrl}
                alt="Projec i worked on"
                quality={95}
            />
        </section>
    )
}


export default Projects;