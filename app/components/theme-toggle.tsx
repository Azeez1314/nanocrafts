"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-full border border-white/10 hover:border-pink-500
      hover:shadow-[0_0_20px_rgba(255,0,128,0.4)] transition text-white"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
