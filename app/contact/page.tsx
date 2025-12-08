"use client";

import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { useTheme } from "next-themes";


export default function ContactPage() {
  const { theme } = useTheme();

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#020414] px-6 py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-[#071026]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_20px_60px_-15px_rgba(255,0,128,0.35)]"
      >
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Let’s Build Your Product
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Tell us about your idea — we’ll design, build & ship it with precision.
          </p>
        </div>

        {/* FORM */}
        <form className="grid gap-6">

          <div className="grid md:grid-cols-2 gap-6">
            <input placeholder="Full Name" className="neon-input text-lg" />
            <input placeholder="Email Address" type="email" className="neon-input text-lg" />
          </div>

          <input
            placeholder="Company / Brand Name"
            className="neon-input text-lg"
          />

          <select className="neon-input text-lg">
            <option>Website Development</option>
            <option>Web Application</option>
            <option>UI / UX Design</option>
            <option>Branding</option>
            <option>Custom Solution</option>
          </select>

          <textarea
            rows={6}
            placeholder="Describe your project, goals, and timeline..."
            className="neon-input resize-none text-lg"
          />

          <Button
            size="lg"
            className="w-full mt-4 py-7 text-lg rounded-full bg-gradient-to-r from-pink-500 to-blue-600 hover:scale-[1.02] transition shadow-[0_10px_30px_-8px_rgba(255,0,128,0.45)]"
          >
            Send Project Request
          </Button>

        </form>

        {/* FOOTER CONTACT INFO */}
        <div className="mt-12 text-center text-gray-300 space-y-2">
          <p>📧 info@nanocrafts.xyz</p>
          <p>📧 nanocrafts199@gmail.com</p>
          <p>🌍 Remote Team — Worldwide</p>
          <p>📞 +44 (7) 443-284143</p>
        </div>
      </motion.div>
    </main>
  );
}
