"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/home/hero";
import { CategoryFilter } from "@/components/home/category-filter";
import { DestinationCard } from "@/components/home/destination-card";
import { Navbar } from "@/components/navigation/navbar";
import { BottomNav } from "@/components/navigation/bottom-nav";

const destinations = [
  {
    title: "The Muraka",
    location: "Maldives",
    price: "$2,400",
    rating: 4.9,
    category: "Tropical",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Whitepod Eco-Resort",
    location: "Swiss Alps",
    price: "$850",
    rating: 4.8,
    category: "Mountains",
    image: "https://images.unsplash.com/photo-1517043584465-4d3ca9e31b1c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Hoshinoya Kyoto",
    location: "Kyoto, Japan",
    price: "$1,200",
    rating: 4.9,
    category: "Zen",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Le Sirenuse",
    location: "Amalfi Coast, Italy",
    price: "$1,800",
    rating: 4.9,
    category: "Coastal",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Zannier Hotels Bãi San Hô",
    location: "Sông Cầu, Vietnam",
    price: "$600",
    rating: 4.7,
    category: "Beach",
    image: "https://images.unsplash.com/photo-1540202404-a2f29033882a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Amanjena",
    location: "Marrakech, Morocco",
    price: "$1,100",
    rating: 4.8,
    category: "Oasis",
    image: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen pb-24 md:pb-12">
      <Navbar />
      
      <div className="max-w-7xl mx-auto space-y-12">
        <Hero />
        
        <div className="px-4 md:px-8 space-y-8">
          <div className="flex items-end justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Recommended <span className="text-primary italic">for you</span>
              </h2>
              <p className="text-white/40 text-sm md:text-base">Curated destinations based on your wanderlust.</p>
            </div>
            <button className="text-primary font-bold text-sm hover:underline hidden md:block">View all</button>
          </div>

          <CategoryFilter />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {destinations.map((dest, i) => (
              <DestinationCard key={dest.title} {...dest} />
            ))}
          </motion.div>
        </div>
      </div>

      <BottomNav />
    </main>
  );
}
