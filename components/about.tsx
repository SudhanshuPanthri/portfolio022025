"use client"

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

const About = () => {
    return (
        <motion.section className="mb-28 max-w-[45rem] text-center leading-8"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.175
            }}
        >
            <SectionHeading name="About Me " />
            <p className="mb-3">
                <span>
                    A software developer with a year of experience working with <span className="font-bold">C#, .NET, Blazor, SQL and Azure.</span> I love building efficient, clean code, and I'm always excited to learn new things and improve my skills along the way.
                </span>
                <span>
                    When I'm not coding, you'll probably find me {""}
                    <span className="italic font-semibold">sketching cars, glued to an F1 race or at the gym. {""}</span>
                    <span>Drawing cars is a creative outlet for me, and F1 has been a long-time passion. All hobbies help me stay sharp and bring a bit of that fast-paced, detail-focused energy into my work.</span>
                </span>
            </p>
            <p>
                I’m always up for new challenges and collaboration, and I can’t wait to see where this dev journey takes me next!
            </p>
        </motion.section>
    )
}

export default About;