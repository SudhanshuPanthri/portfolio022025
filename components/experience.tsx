"use client"

import React, { useEffect } from "react";
import { experiencesData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

const Experience = () => {

    const { ref, inView } = useInView({
        threshold: 0.5
    });
    const { setActiveSection, timeofLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeofLastClick > 1000) {
            setActiveSection("Experience");
        }
    }, [inView, setActiveSection, timeofLastClick])

    return (
        <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
            <SectionHeading name="Experience" />
            <VerticalTimeline lineColor="">
                {
                    experiencesData.map((experience, index) => (
                        <React.Fragment key={index}>
                            <VerticalTimelineElement contentStyle={{
                                background: "#f3f4f6",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem"
                            }}
                                contentArrowStyle={{
                                    borderRight: "0.4rem solid #9ca3fa"
                                }}
                                date={experience.date}
                                icon={experience.icon}
                                iconStyle={{
                                    background: "#f3f4f6",
                                    fontSize: "1.5rem"
                                }}>
                                <h3 className="font-semibold capitalize">{experience.title}</h3>
                                <p className="font-normal !mt-0">{experience.location}</p>
                                <p className="!mt-1 !font-normal">{experience.description}</p>
                            </VerticalTimelineElement>
                        </React.Fragment>
                    ))
                }
            </VerticalTimeline>
        </section>
    )
}

export default Experience;