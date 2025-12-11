"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Online Learning Application",
    img: "/projects/online-learning.png",
    tags: ["Next.js", "Tailwind", "Postgress", "Shadcn UI", "Vercel", "TypeScript"],
    link: "https://online-learning-three-virid.vercel.app/",
  },
  {
    title: "E-Commerce Dashboard",
    img: "/projects/teeq-img.png",
    tags: ["JS", "Bootstrap", "Express/Node", "MongoDB", "React"],
  },
  {
    title: "SaaS Landing Page",
    img: "/projects/journal-app.png",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    link: "https://pro-app-omega.vercel.app/",
  },
];

export default function Portfolio() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] to-[#020617]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-5"
        >
          Recent Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-300 max-w-2xl mx-auto mb-16"
        >
          A selection of my best work — blending intuitive UI, high performance and clean code.
        </motion.p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
        {PROJECTS.map(({ title, img, tags, link }, index) => (
  <a
    key={index}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.65 }}
      className="group relative rounded-3xl overflow-hidden cursor-pointer"
    >
      {/* Hover Glow Border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition duration-500 blur-lg"></div>

      {/* Card */}
      <div className="relative bg-[#0c162c] rounded-3xl border border-white/10 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <Image
            src={img}
            alt={title}
            width={500}
            height={380}
            className="w-full h-[260px] object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            <p className="text-white text-lg font-semibold tracking-wide">
              View Details →
            </p>
          </div>
        </motion.div>

        {/* Text & tags */}
        <div className="p-6">
          <h3 className="text-xl text-white font-semibold mb-3">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </a>
))}

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center mt-20"
        >
          <a
            href="/portfolio"
            className="group flex items-center gap-2 text-pink-500 font-semibold text-lg hover:text-pink-400 transition"
          >
            View Full Portfolio
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
