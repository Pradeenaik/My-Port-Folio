'use client';

import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import { GiClothes, GiLoincloth } from "react-icons/gi";
import { ImProfile } from "react-icons/im";
import { RiNextjsFill } from 'react-icons/ri';
import { SiRedux, SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si';

const projects = [
  {
    title: "Symbol-Fashion",
    icon: (
      <GiLoincloth className="text-amber-500 text-3xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.25)] group-hover:drop-shadow-[3px_3px_3px_rgba(255,105,180,0.6)] transition-all duration-300 ease-in-out" />
    ),
    description:
      "A modern e-commerce platform for fashion enthusiasts. Built responsive product pages, dynamic filters, and an intuitive cart system.",
    highlights: [
      "Reusable UI components with React + TypeScript",
      "Optimized SSR & image loading using Next.js",
      "REST API integration with backend team",
      "Pixel-perfect Tailwind styling from Figma designs",
    ],
    tech: [
      { name: "React.js", icon: <FaReact className="text-sky-500" /> },
      { name: "Next.js", icon: <RiNextjsFill className="text-black" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
    ],
    link: "https://symbol.fashion/other/women", // replace with actual
    image: "/Symbol-Fashion.png", // add this image to public/
  },
  {
    title: "NoBero",
    icon: (
      <GiClothes className="text-indigo-500 text-3xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.25)] group-hover:drop-shadow-[3px_3px_3px_rgba(255,0,255,0.6)] transition-all duration-300 ease-in-out" />
    ),
    description:
      "Minimalist fashion platform focused on performance and accessibility without sacrificing aesthetics.",
    highlights: [
      "Product grid with search, sort, and filter features",
      "Improved LCP, FID, CLS for Core Web Vitals",
      "Custom React hooks for abstraction",
      "Cypress & Jest setup for testing",
    ],
    tech: [
      { name: "React.js", icon: <FaReact className="text-sky-500" /> },
      { name: "Next.js", icon: <RiNextjsFill className="text-black" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
    ],
    link: "https://nobero.com/", // replace with actual
    image: "/No-Bero.png", // add this image to public/
  },
  {
    title: "Portfolio Website",
    icon: (
      <ImProfile className="text-blue-500 text-3xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.25)] group-hover:drop-shadow-[3px_3px_3px_rgba(30,144,255,0.6)] transition-all duration-300 ease-in-out" />
    ),
    description:
      "Personal portfolio showcasing projects, skills, and contact. Built with modern UI and best practices.",
    highlights: [
      "Next.js App Router + TypeScript",
      "Tailwind UI + custom animations",
      "Optimized for performance & SEO",
      "CI/CD + Vercel deployment",
    ],
    tech: [
      { name: "Next.js", icon: <RiNextjsFill className="text-black" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Vercel", icon: <SiVercel className="text-black" /> },
    ],
    
    link: "https://pradeepnaik.dev", // replace with your portfolio URL
    image: "PortFolio.png", // add this image to public/
  },
];

export default function Projects() {
  return (
    <section className="space-y-12 animate-fade-in">
      <h2 className="text-3xl font-bold text-black text-center">Projects</h2>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.a
            href={project.link}
            key={project.title}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <img
              src={project.image}
              alt={`${project.title} Preview`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-2">
                {project.icon}
                {project.title}
              </h3>
              <p className="text-gray-700 mb-3">{project.description}</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {project.tech.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-gray-800 shadow-[2px_2px_5px_rgba(0,0,0,0.1)] hover:shadow-[3px_3px_7px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out"
                  >
                    <span className="text-xl drop-shadow-[1px_1px_1px_rgba(0,0,0,0.2)]">{tech.icon}</span>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
