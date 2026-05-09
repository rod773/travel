"use client";

import { motion } from "framer-motion";
import { Search, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden rounded-[2.5rem] m-4">
      {/* Background Image Placeholder with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506929113614-bb92850b3940?auto=format&fit=crop&q=80&w=2000')" }}
      >
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Explore the <span className="text-primary italic">Extraordinary</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto"
        >
          Discover curated luxury stays and unique experiences in the most breathtaking destinations on Earth.
        </motion.p>

        {/* Search Bar - Desktop */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:flex items-center gap-2 p-2 glass rounded-[2rem] max-w-3xl mx-auto"
        >
          <div className="flex-1 flex items-center gap-3 px-4 py-2 border-r border-white/10">
            <Search className="text-primary w-5 h-5" />
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold">Location</p>
              <input 
                type="text" 
                placeholder="Where to?" 
                className="bg-transparent border-none text-white focus:outline-none text-sm placeholder:text-white/20"
              />
            </div>
          </div>
          <div className="flex-1 flex items-center gap-3 px-4 py-2 border-r border-white/10">
            <Calendar className="text-primary w-5 h-5" />
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold">Check In</p>
              <p className="text-sm text-white/20">Add dates</p>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-3 px-4 py-2">
            <Users className="text-primary w-5 h-5" />
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold">Guests</p>
              <p className="text-sm text-white/20">Add guests</p>
            </div>
          </div>
          <Button size="lg" className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
            Search
          </Button>
        </motion.div>

        {/* Search Bar - Mobile */}
        <div className="md:hidden">
          <Button size="lg" className="rounded-full w-full h-14 bg-primary text-primary-foreground font-bold shadow-xl shadow-primary/20">
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
}
