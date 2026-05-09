"use client";

import { motion } from "framer-motion";
import { Search, MapPin, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between px-8 py-4 glass-dark m-4 rounded-2xl mx-auto max-w-7xl backdrop-blur-md"
    >
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
          <MapPin className="text-primary-foreground w-6 h-6" />
        </div>
        <span className="text-xl font-bold tracking-tight text-white">ZENITH</span>
      </div>

      <div className="flex items-center gap-8 text-sm font-medium text-white/70">
        <a href="#" className="hover:text-primary transition-colors">Explore</a>
        <a href="#" className="hover:text-primary transition-colors">Stays</a>
        <a href="#" className="hover:text-primary transition-colors">Flights</a>
        <a href="#" className="hover:text-primary transition-colors">Experience</a>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input 
            type="text" 
            placeholder="Search destinations..." 
            className="bg-white/10 border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary outline-none text-white w-64"
          />
        </div>
        <Button size="icon" variant="ghost" className="rounded-full text-white">
          <User className="w-5 h-5" />
        </Button>
      </div>
    </motion.nav>
  );
}
