"use client";

import { motion } from "framer-motion";
import { Code, MonitorSmartphone, PenTool } from "lucide-react";

const SERVICES = [
  {
    icon: Code,
    title: "Web Applications",
    desc: "Modern, scalable applications built with React, Next.js & Tailwind.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Websites",
    desc: "Lightning-fast websites that look perfect on all screen sizes.",
  },
  {
    icon: PenTool,
    title: "UI / UX Design",
    desc: "Clean, intuitive, visually appealing interface design.",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f172a]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
        >
          Services We Provide
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 w-full h-[360px] object-cover">
          {SERVICES.map(({ icon: Icon, title, desc }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group p-8 rounded-3xl bg-[#0f1c33]/60 backdrop-blur-xl border border-white/10 hover:border-pink-500 hover:shadow-[0_0_25px_-4px_rgba(236,72,153,0.7)] transition"
            >
              <Icon className="h-12 w-12 text-pink-500 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
              <p className="text-gray-300 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
