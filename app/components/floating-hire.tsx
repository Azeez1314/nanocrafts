"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function FloatingHire() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <motion.a
      href="#pricing"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45 }}
      className="fixed bottom-8 right-8 z-[60] bg-gradient-to-r
        from-pink-500 to-purple-600 text-white rounded-full shadow-lg
        shadow-pink-500/40 hover:shadow-pink-500/60 p-4 flex items-center gap-3
        cursor-pointer hover:scale-[1.06] transition backdrop-blur-xl"
    >
      <MessageCircle size={22} />
      <Link
        href="/contact" 
        className="font-semibold pr-2">
          Hire Me
      </Link>
    </motion.a>
  );
}
