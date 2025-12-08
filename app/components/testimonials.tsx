"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Product Manager – BrightApps",
    image: "/testimonials/daniel.jpg",
    quote:
      "Alex delivered beyond our expectations — the UI and performance upgrade increased our conversions by 31%. Highly recommended.",
  },
  {
    name: "Daniel Lee",
    role: "CEO – Nova Systems",
    image: "/testimonials/daniel.jpg",
    quote:
      "Clean code, seamless communication and pixel-perfect execution. One of the best developers I’ve worked with.",
  },
  {
    name: "Mia Carter",
    role: "Founder – Startup Lane",
    image: "/testimonials/mia.jpg",
    quote:
      "Alex translated our ideas into an intuitive product — users love the interface and onboarding experience.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-28 bg-[#030617]">
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          What Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 max-w-2xl mx-auto mt-4 mb-14"
        >
          Trusted by startups, agencies and global brands.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group bg-[#0c162c] border border-white/10 rounded-3xl p-8 shadow-xl hover:shadow-[0_0_40px_-10px_rgba(255,0,128,0.4)] transition cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={t.image}
                  width={72}
                  height={72}
                  alt={t.name}
                  className="rounded-full border border-pink-500 mb-5"
                />
                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  “{t.quote}”
                </p>
                <h4 className="text-white font-semibold">{t.name}</h4>
                <p className="text-sm text-pink-400">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
