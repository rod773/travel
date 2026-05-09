"use client";

import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface DestinationProps {
  title: string;
  location: string;
  price: string;
  rating: number;
  image: string;
  category: string;
}

export function DestinationCard({ title, location, price, rating, image, category }: DestinationProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group"
    >
      <Card className="relative overflow-hidden rounded-[2rem] border-none bg-card/50 aspect-[4/5] flex flex-col justify-end p-6">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-3">
          <Badge className="bg-primary/20 text-primary backdrop-blur-md border-none px-3 py-1 rounded-full text-[10px] uppercase font-bold">
            {category}
          </Badge>
          
          <div>
            <h3 className="text-2xl font-bold text-white leading-tight">{title}</h3>
            <div className="flex items-center gap-1 text-white/60 text-sm mt-1">
              <MapPin className="w-3 h-3" />
              <span>{location}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-1">
              <span className="text-xl font-bold text-white">{price}</span>
              <span className="text-white/40 text-xs">/night</span>
            </div>
            <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-full px-2 py-1">
              <Star className="w-3 h-3 fill-primary text-primary" />
              <span className="text-white text-xs font-bold">{rating}</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
