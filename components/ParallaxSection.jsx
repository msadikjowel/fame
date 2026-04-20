"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="h-[400px] relative overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[url('/hero.webp')] bg-cover bg-center"
      />

      <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white">
        <h2 className="text-4xl font-bold">We Deliver Quality Printing</h2>
      </div>
    </div>
  );
}
