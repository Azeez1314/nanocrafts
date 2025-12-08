"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function SearchModal() {
  const [open, setOpen] = useState(false);

  // Cmd+K listener
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="p-2 border border-white/10 rounded-full text-white hover:border-pink-500
        transition"
      >
        <Search size={18} />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-xl z-[80] flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0e1220] border border-white/10 rounded-3xl p-6 w-full max-w-xl text-white"
          >
            <div className="flex items-center gap-3 mb-4">
              <Search size={20} className="text-pink-500" />
              <input
                placeholder="Search anything..."
                autoFocus
                className="bg-transparent outline-none flex-1 text-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
