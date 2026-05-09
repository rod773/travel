"use client";

import { motion } from "framer-motion";
import { Home, Compass, Heart, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Compass, label: "Explore", href: "/explore" },
  { icon: Heart, label: "Saved", href: "/saved" },
  { icon: User, label: "Profile", href: "/profile" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-6 px-4">
      <div className="glass-dark rounded-3xl flex items-center justify-around py-3 px-2 border-white/10 shadow-2xl backdrop-blur-lg">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.label} href={item.href} className="relative flex flex-col items-center gap-1 p-2 min-w-[64px]">
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary/20 rounded-2xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <item.icon 
                className={`w-6 h-6 transition-colors duration-300 ${
                  isActive ? "text-primary" : "text-white/40"
                }`} 
              />
              <span className={`text-[10px] font-medium transition-colors duration-300 ${
                isActive ? "text-white" : "text-white/40"
              }`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
