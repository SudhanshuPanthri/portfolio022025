"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

const Intro = () => {
    return (
        <section className="mb-28 max-w-[50rem] text-center sm:-scroll-mb-0" >
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
                            alt="Ricardo portrait"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>
                    <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{
                        type: "spring",
                        stiffness: 125,
                        delay: 0.1,
                        duration: 0.7
                    }} className="absolute text-4xl bottom-0 right-0">
                        👋
                    </motion.span>
                </div>
            </div>
            <motion.p className="mb-10 mt-4 px-4 lg:text-2xl md:text-2xl font-medium !leading-[1.5] sm:text-3xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">
                    Hi, I'm Sudhanshu Panthri, {""}
                </span>
                <span className="italic">
                    a software developer based in delhi. {""}
                </span>
                <span>
                    Thanks for visiting—feel free to explore my work!
                </span>
            </motion.p>

            <motion.div className="flex flex-col text-sm sm:flex-row gap-2 justify-center px-4 font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1
                }}
            >
                <Link href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
                    Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>

                <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer">Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" /></a>

                <a href="https://www.linkedin.com/in/sudhanshu-p-43797ab1/" target="_blank" className="bg-[#0077b5] text-white p-4 flex items-center gap-2 rounded-full text-lg">
                    <BsLinkedin />
                </a>

                <a href="https://github.com/SudhanshuPanthri" target="_blank" className="bg-[#fff] text-[#333] text-[1.35rem] p-4 flex items-center gap-2 rounded-full text-lg">
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    )
}

export default Intro;