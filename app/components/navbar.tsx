"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import ThemeToggle from "./theme-toggle";
import SearchModal from "./search-modal";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "#blogs" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-xl text-white tracking-wide hover:text-pink-500 transition"
        >
          ⚡ Nanocrafts
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-10">
          {LINKS.map((link, i) => (
            <li key={i}>
              <Link
                href={link.href}
                className="text-gray-300 hover:text-pink-400 transition relative group"
              >
                {link.label}
                {/* underline glow */}
                <span className="block absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full transition-all bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
              </Link>
            </li>
          ))}
          <ThemeToggle /> <SearchModal />
        </ul>
        
        {/* CTA */}
        <div className="hidden md:block">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/30 hover:scale-[1.03] transition"
          >
            <Link href="/contact">Hire Me</Link>
          </Button>
        </div>
        

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white hover:text-pink-400 transition"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="md:hidden bg-[#050816] border-t border-white/5 px-6 pb-6"
        >
          <ul className="flex flex-col gap-5 mt-6">
            {LINKS.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-gray-300 py-1 text-lg hover:text-pink-400 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button
            size="lg"
            className="w-full mt-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/30"
          >
            Hire Me
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
}
