import Image from "next/image";
import { FaLaptopCode, FaReact } from "react-icons/fa";
import { FcOrganization } from "react-icons/fc";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

export default function About() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fade-in">
      {/* Image Section */}
      <div className="flex justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <Image
            src="/Profile.jpg"
            alt="Pradeep Naik"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="space-y-5 text-gray-800">
        <h2 className="text-3xl font-bold text-black">About Me</h2>

        <p className="text-lg leading-relaxed">
          Hey! I'm a <strong>Frontend Developer 
            <FaLaptopCode className="inline ml-2 text-orange-600 text-4xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.25)] hover:drop-shadow-[3px_3px_3px_rgba(0,0,0,0.4)] transition-all duration-300 ease-in-out" />
          </strong> with over <strong>3 years</strong> of experience crafting sleek, scalable, and high-performing web applications that put users first.
        </p>

        <p className="text-lg leading-relaxed">
          I specialize in building modern interfaces with 
          <span className="ml-2 text-blue-600 font-semibold">
            <FaReact className="inline text-3xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.25)] hover:drop-shadow-[3px_3px_3px_rgba(0,0,0,0.4)] transition-all duration-300 ease-in-out" /> React
          </span>, 
          <span className="ml-2 text-black font-semibold">
            <RiNextjsFill className="inline text-3xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.25)] hover:drop-shadow-[3px_3px_3px_rgba(0,0,0,0.4)] transition-all duration-300 ease-in-out" /> Next.js
          </span>, and 
          <span className="ml-2 text-purple-600 font-semibold">
            <SiTypescript className="inline text-3xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.25)] hover:drop-shadow-[3px_3px_3px_rgba(0,0,0,0.4)] transition-all duration-300 ease-in-out" /> TypeScript
          </span> — writing clean, reusable code that scales beautifully across teams and projects.
        </p>

        <p className="text-lg leading-relaxed">
          At <strong>Vault Information Technologies Pvt. Ltd. 
            <FcOrganization className="inline ml-1 text-3xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.25)]" />
          </strong>, I’ve led frontend development for e-commerce platforms like <strong>Symbol-Fashion</strong> and <strong>NoBero</strong>. From pixel-perfect UI to seamless APIs, I’ve worked closely with design and backend teams to deliver great user experiences.
        </p>

        <p className="text-lg leading-relaxed">
          I code with <strong>SOLID</strong>, <strong>DRY</strong>, and <strong>KISS</strong> principles, ensuring every component is performant, reusable, and maintainable.
        </p>
      </div>
    </section>
  );
}
