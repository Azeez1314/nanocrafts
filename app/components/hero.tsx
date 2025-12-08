"use client";

import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[100vh] flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#1d4ed8,_#0f172a_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:py-48 grid lg:grid-cols-2 gap-12 items-center">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="uppercase tracking-widest text-sm text-gray-300 mb-4">
            Hello there, welcome to nanocrafts
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Built <span className="text-white">to Perform.</span>
            <br />
            <span className="text-pink-500">Seamless by Design.</span>
            <br />
            SEO-first websites and apps.
          </h1>

          <motion.div
            className="flex flex-wrap gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <Button 
              variant="destructive" size="lg">
                <Link href="/portfolio">See Portfolio</Link>
            </Button>

            <Button 
              asChild
              variant="outline" size="lg">
                <Link href="/contact">Contact Me</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative rounded-[32px] p-[6px] bg-gradient-to-br from-pink-500 to-blue-500 hover:brightness-110 transition"
          >
            <div className="rounded-[28px] overflow-hidden bg-black">
              <Image
                src="/hero.png"
                alt="Alex Stark"
                width={480}
                height={540}
                className="object-cover w-[440px] sm:w-[580px] h-[420px] sm:h-[500px]"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
