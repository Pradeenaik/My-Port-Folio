"use client";
import { FaLaptopCode, FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center space-y-6  px-4">
      <motion.img
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        src="/Profile.jpg"
        alt="Profile"
        className="w-48 h-48 sm:w-60 sm:h-60 rounded-full border-[6px] border-orange-500 shadow-lg shadow-orange-200 object-cover transition-all duration-300 hover:scale-105"
      />

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl sm:text-5xl font-extrabold text-black tracking-tight"
      >
        Hi, I'm a Front-End Developer{" "}
        <FaLaptopCode className="inline text-yellow-600 ml-2" />
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-lg sm:text-xl text-gray-800 max-w-2xl leading-relaxed"
      >
        Passionate about crafting intuitive, high-performance web experiences using modern technologies like{" "}
        <span className="text-blue-600 font-semibold"><FaReact className="inline text-3xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.25)] hover:drop-shadow-[3px_3px_3px_rgba(0,0,0,0.4)] transition-all duration-300 ease-in-out" /> React</span>,{" "}
        <span className="text-black font-semibold"><RiNextjsFill className="inline"/> Next.js</span>, and{" "}
        <span className="text-purple-600 font-semibold"><SiTypescript className="inline"/> TypeScript</span>. I focus on building responsive, scalable, and user-centric applications that blend performance with elegance.
      </motion.p>

      <motion.a
  href="/projects"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-block mt-4 px-8 py-3 bg-orange-500 text-white font-medium rounded-full shadow hover:bg-white hover:text-orange-500 border-2 border-orange-500 transition-all duration-300"
>
  🚀 View My Work
</motion.a>
    </section>
  );
}
