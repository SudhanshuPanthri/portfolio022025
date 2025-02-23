"use client"

import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.05
        },
    })
}

const Skills = () => {

    const { ref, inView } = useInView();
    const { setActiveSection, timeofLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeofLastClick > 1000) {
            setActiveSection("Skills");
        }
    }, [inView, setActiveSection, timeofLastClick])

    return (
        <section ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40" id="skills">
            <SectionHeading name="Skills" />
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsData.map((skill, index) => (
                    <motion.li key={index} className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80" variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{
                        once: true
                    }} custom={index}>
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default Skills;
