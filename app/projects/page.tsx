'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import { GiClothes, GiLoincloth } from 'react-icons/gi';
import { ImProfile } from 'react-icons/im';
import { RiNextjsFill } from 'react-icons/ri';
import { SiRedux, SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si';

const projects = [
  {
    title: 'Symbol-Fashion',
    icon: <GiLoincloth className="text-amber-500 text-3xl group-hover:drop-shadow-pink transition-all duration-300" />,
    description:
      'A modern e-commerce platform for fashion enthusiasts. Built responsive product pages, dynamic filters, and an intuitive cart system.',
    highlights: [
      'Reusable UI components with React + TypeScript',
      'Optimized SSR & image loading using Next.js',
      'REST API integration with backend team',
      'Pixel-perfect Tailwind styling from Figma designs',
    ],
    tech: [
      { name: 'React.js', icon: <FaReact className="text-sky-500" /> },
      { name: 'Next.js', icon: <RiNextjsFill className="text-black" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: 'Redux', icon: <SiRedux className="text-purple-600" /> },
    ],
    link: 'https://symbol.fashion/other/women',
    image: '/Symbol-Fashion.png',
  },
  {
    title: 'NoBero',
    icon: <GiClothes className="text-indigo-500 text-3xl group-hover:drop-shadow-fuchsia transition-all duration-300" />,
    description:
      'Minimalist fashion platform focused on performance and accessibility without sacrificing aesthetics.',
    highlights: [
      'Product grid with search, sort, and filter features',
      'Improved LCP, FID, CLS for Core Web Vitals',
      'Custom React hooks for abstraction',
      'Cypress & Jest setup for testing',
    ],
    tech: [
      { name: 'React.js', icon: <FaReact className="text-sky-500" /> },
      { name: 'Next.js', icon: <RiNextjsFill className="text-black" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: 'Redux', icon: <SiRedux className="text-purple-600" /> },
    ],
    link: 'https://nobero.com/',
    image: '/No-Bero.png',
  },
  {
    title: 'Portfolio Website',
    icon: <ImProfile className="text-blue-500 text-3xl group-hover:drop-shadow-blue transition-all duration-300" />,
    description:
      'Personal portfolio showcasing projects, skills, and contact. Built with modern UI and best practices.',
    highlights: [
      'Next.js App Router + TypeScript',
      'Tailwind UI + custom animations',
      'Optimized for performance & SEO',
      'CI/CD + Vercel deployment',
    ],
    tech: [
      { name: 'Next.js', icon: <RiNextjsFill className="text-black" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: 'Vercel', icon: <SiVercel className="text-black" /> },
    ],
    link: 'https://pradeepnaik.dev',
    image: '/PortFolio.png',
  },
];

export default function Projects() {
  return (
    <section className="space-y-12 px-4 sm:px-6 md:px-12 lg:px-20 py-10 animate-fade-in">
      <h2 className="text-3xl sm:text-4xl font-bold text-black text-center">Projects</h2>

      <div className="grid gap-8 sm:gap-10 md:grid-cols-2 xl:grid-cols-2">
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
            <Image
              src={project.image}
              alt={`${project.title} Preview`}
              width={800}
              height={480}
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 flex items-center gap-2">
                {project.icon}
                {project.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">{project.description}</p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="pt-3 flex flex-wrap items-center gap-3">
                {project.tech.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-gray-800 shadow hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-xs sm:text-sm font-medium">{tech.name}</span>
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
