"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { motion } from "framer-motion";

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
      loop
    >
      {[1, 2, 3].map((i) => (
        <SwiperSlide key={i}>
          <div className="h-screen flex items-center bg-cover bg-center relative"
               style={{ backgroundImage: `url(/hero.webp)` }}>

            <div className="absolute inset-0 bg-black/50" />

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 max-w-3xl mx-auto text-center text-white"
            >
              <h1 className="text-5xl font-bold">
                Premium Printing Solutions
              </h1>

              <p className="mt-4 text-lg">
                High quality designs & fast delivery
              </p>

              <button className="mt-6 bg-primary px-6 py-3 rounded hover:scale-105 transition">
                Get Started
              </button>
            </motion.div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}