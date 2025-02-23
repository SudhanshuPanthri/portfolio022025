"use client"

import SectionHeading from "./section-heading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./submit-button";
import toast from "react-hot-toast";

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
        <motion.section id="contact" ref={ref} className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.175 }} viewport={{ once: true }}>
            <SectionHeading name="Contact" />
            <p className="text-gray-700 -mt-5 dark:text-white/80">Please contact me directly at <a className="underline text-orange-500" href="mailto:panthrisudhanshu666@gmail.com">panthrisudhanshu666@gmail.com</a>{" "}or through this form</p>
            <form className="mt-10 flex flex-col dark:text-black" action={async (formData) => {
                const { data, error } = await sendEmail(formData);

                if (error) {
                    toast.error(error);
                    return;
                }
                toast.success("Email sent successfully");
            }}>
                <input className="h-14 rounded-md borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" type="email" required maxLength={500} placeholder="Your email" name="senderEmail" />
                <textarea className="h-52 my-3 rounded-md borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" required maxLength={5000} placeholder="Your message" name="message" />
                <SubmitButton />
            </form>
        </motion.section>
    )
}


export default Contact;