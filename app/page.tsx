"use client";
import { FaLaptopCode, FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center space-y-6 px-4 sm:px-6 lg:px-8 py-8">
      <motion.img
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        src="/Profile.jpg"
        alt="Profile"
        className="w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full border-[6px] border-orange-500 shadow-lg shadow-orange-200 object-cover transition-all duration-300 hover:scale-105"
      />

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight px-2"
      >
        Hi, I'm a Front-End Developer{" "}
        <FaLaptopCode className="inline text-yellow-600 ml-2" />
      </motion.h2>

      <motion.p
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.4, duration: 0.5 }}
  className="text-base sm:text-lg md:text-xl text-gray-800 max-w-3xl leading-relaxed px-2"
>
  Passionate about crafting intuitive, high-performance web experiences using modern technologies like{" "}
  <span className="inline-flex items-center gap-1 align-middle text-blue-600 font-semibold">
    <FaReact className="text-xl sm:text-2xl align-middle" />
    <span className="align-middle">React</span>
  </span>
  ,{" "}
  <span className="inline-flex items-center gap-1 align-middle text-black font-semibold">
    <RiNextjsFill className="text-xl sm:text-2xl align-middle" />
    <span className="align-middle">Next.js</span>
  </span>
  , and{" "}
  <span className="inline-flex items-center gap-1 align-middle text-purple-600 font-semibold">
    <SiTypescript className="text-xl sm:text-2xl align-middle" />
    <span className="align-middle">TypeScript</span>
  </span>
  . I focus on building responsive, scalable, and user-centric applications that blend performance with elegance.
</motion.p>



      <motion.a
        href="/projects"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block mt-4 px-6 sm:px-8 py-3 text-sm sm:text-base bg-orange-500 text-white font-medium rounded-full shadow hover:bg-white hover:text-orange-500 border-2 border-orange-500 transition-all duration-300"
      >
        🚀 View My Work
      </motion.a>
    </section>
  );
}
