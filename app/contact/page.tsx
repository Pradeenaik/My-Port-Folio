'use client';

import { motion } from 'framer-motion';
import { BiLogoGmail } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

const contactItems = [
  {
    icon: <BiLogoGmail className="text-red-600 text-2xl" />,
    label: "Email",
    value: "pradeenaik24@gmail.com",
    link: "mailto:pradeenaik24@gmail.com",
  },
  {
    icon: <IoCall className="text-green-600 text-2xl" />,
    label: "Phone",
    value: "+91 7338623702",
    link: "tel:+917338623702",
  },
  {
    icon: <FaLinkedin className="text-blue-700 text-2xl" />,
    label: "LinkedIn",
    value: "Pradeep Naik",
    link: "https://www.linkedin.com/in/pradeepnaik-/",
  },
  {
    icon: <FaGithub className="text-black text-2xl" />,
    label: "GitHub",
    value: "github.com/pradeenaik",
    link: "https://github.com/Pradeenaik",
  },
  {
    icon: <MdOutlineLocationOn className="text-pink-500 text-2xl" />,
    label: "Location",
    value: "Bengaluru, India (Open to remote opportunities)",
    link: null,
  },
];

export default function Contact() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white animate-fade-in">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-black text-center mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className="text-base sm:text-lg text-gray-800 leading-relaxed text-center max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Whether you're looking to collaborate, have a project idea, or just want to say hello — I’d love to hear from you! 👋
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
          hidden: {},
        }}
      >
        {contactItems.map((item, i) => (
          <motion.article
            key={i}
            className="bg-white rounded-xl border border-gray-200 shadow-md p-5 flex items-start gap-4 hover:shadow-lg transition duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="p-3 rounded-full bg-gray-100 group-hover:scale-105 transition-transform duration-300">
              {item.icon}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700">{item.label}</span>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-all text-sm"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-gray-800 text-sm">{item.value}</span>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.p
        className="text-base sm:text-lg text-gray-800 text-center max-w-3xl mx-auto mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I’m always open to discussing new opportunities, interesting ideas, or tech in general. Feel free to reach out — I usually respond within a day or two!
      </motion.p>
    </section>
  );
}
