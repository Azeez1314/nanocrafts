"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/app/components/ui/button";

const PLANS = [
  {
    title: "Starter",
    price: "Custom",
    description: "Best for landing pages & small projects",
    features: [
      "1 Page Design",
      "Responsive Layout",
      "SEO Optimized",
      "Fast Delivery Timeline",
    ],
    highlighted: false,
  },
  {
    title: "Professional",
    price: "Custom",
    description: "Perfect for SaaS, agencies & businesses",
    features: [
      "Up to 6 Pages",
      "CMS/Blog Integration",
      "Framer Motion Animations",
      "Full UI/UX + Branding",
      "Fast Delivery Timeline",
    ],
    highlighted: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "Tailored for startups & ongoing projects",
    features: [
      "Unlimited Pages",
      "API Integrations",
      "Admin Dashboard",
      "Priority Support",
      "Monthly Iterations",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <>
    <section className="relative overflow-hidden py-28 bg-gradient-to-b from-[#020413] to-[#04070f]">
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Pricing & Packages
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 max-w-2xl mx-auto mt-4 mb-16"
        >
          Select a plan that matches your project — or request a custom quote.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {PLANS.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`relative rounded-3xl border p-8 flex flex-col
                ${plan.highlighted
                  ? "border-pink-500 shadow-[0_0_50px_-8px_rgba(255,0,128,0.4)] bg-[#0f1321]"
                  : "border-white/10 bg-[#0b101d]"
                }`}
            >
              <h3 className="text-white text-2xl font-semibold mb-3">{plan.title}</h3>
              <p className="text-pink-400 text-4xl font-bold mb-3">{plan.price}</p>
              <p className="text-gray-400 mb-6">{plan.description}</p>

              <ul className="space-y-3 text-left text-gray-300 mb-10">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-pink-500" /> {f}
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                variant={plan.highlighted ? "destructive" : "outline"}
                className="mt-auto"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <section className="relative overflow-hidden py-14">
    </section>
    </>
  );
}
