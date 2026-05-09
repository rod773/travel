"use client";

import { motion } from "framer-motion";
import { Palmtree, Mountain, Building2, Tent, Umbrella, Waves } from "lucide-react";
import { useState } from "react";

const categories = [
  { icon: Palmtree, label: "Tropical" },
  { icon: Mountain, label: "Mountains" },
  { icon: Building2, label: "Cities" },
  { icon: Tent, label: "Camping" },
  { icon: Umbrella, label: "Beach" },
  { icon: Waves, label: "Surfing" },
  { icon: Mountain, label: "Skiing" },
  { icon: Palmtree, label: "Island" },
];

export function CategoryFilter() {
  const [active, setActive] = useState("Tropical");

  return (
    <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide px-4 md:px-0">
      {categories.map((cat) => (
        <button
          key={cat.label}
          onClick={() => setActive(cat.label)}
          className="relative flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap transition-all"
        >
          {active === cat.label && (
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 bg-primary rounded-full"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <cat.icon className={`relative z-10 w-4 h-4 ${active === cat.label ? "text-primary-foreground" : "text-white/40"}`} />
          <span className={`relative z-10 text-sm font-bold ${active === cat.label ? "text-primary-foreground" : "text-white/40"}`}>
            {cat.label}
          </span>
        </button>
      ))}
    </div>
  );
}
