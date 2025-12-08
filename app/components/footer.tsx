"use client"

import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#030617] border-t border-white/6 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
        <div>
          <Link href="/" className="text-xl font-bold text-white">⚡ Nanocrafts</Link>
          <p className="text-gray-400 mt-3 max-w-sm">
            We build pixel-perfect front-end experiences — focused on performance and clarity.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-pink-500/10 transition">
              <Github className="w-5 h-5 text-white" />
            </Link>
            <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-pink-500/10 transition">
              <Twitter className="w-5 h-5 text-white" />
            </Link>
            <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-pink-500/10 transition">
              <Linkedin className="w-5 h-5 text-white" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-white font-semibold mb-3">Site</h4>
            <ul className="text-gray-300 space-y-2">
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Resources</h4>
            <ul className="text-gray-300 space-y-2">
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Newsletter</h4>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                aria-label="Email"
                placeholder="you@domain.com"
                className="bg-white/5 border border-white/20 px-3 py-2 rounded-lg 
                 outline-none text-white placeholder:text-gray-400
                 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30
                 transition"
              />
              <button className="px-4 py-2 rounded-lg bg-pink-500 text-white hover:bg-pink-600 transition font-medium">Join</button>
            </form>
            <p className="text-gray-400 text-sm mt-3">No spam — only useful updates.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-gray-500 text-sm">
    © {new Date().getFullYear()}{" "}
    <a
      href="https://nanocrafts.xyz"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-pink-500 transition font-medium mt-7"
    >
      Nanocrafts
    </a>
    . All rights reserved.
  </div>
    </footer>
  );
}
