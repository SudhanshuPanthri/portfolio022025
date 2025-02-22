"use client"

import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./section-heading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";

const Contact = () => {

    const { ref, inView } = useInView({
        threshold: 0.5
    });
    const { setActiveSection, timeofLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeofLastClick > 1000) {
            setActiveSection("Contact");
        }
    }, [inView, setActiveSection, timeofLastClick])
    return (
        <section id="contact" ref={ref} className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center">
            <SectionHeading name="Contact" />
            <p className="text-gray-700 -mt-5">Please contact me directly at <a className="underline text-orange-500" href="mailto:panthrisudhanshu666@gmail.com">panthrisudhanshu666@gmail.com</a>{" "}or through this form</p>
            <form className="mt-10 flex flex-col">
                <input className="h-14 rounded-md borderBlack px-4" type="email" placeholder="Your email" />
                <textarea className="h-52 my-3 rounded-md borderBlack p-4" placeholder="Your message" />
                <button className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:bg-gray-950 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105" type="submit">Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" /></button>
            </form>
        </section>
    )
}


export default Contact;