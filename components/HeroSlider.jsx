"use client";

import { motion } from "framer-motion";

export default function HeroSlider() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative px-4"
      style={{ backgroundImage: `url(/hero.webp)` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center text-white"
      >
        {/* Heading */}
        <h1
          className="
          font-bold 
          text-2xl 
          sm:text-3xl 
          md:text-4xl 
          lg:text-5xl 
          xl:text-6xl
          leading-tight
        "
        >
          WE BRING <span className="text-[var(--color-primary)]">DESIGN</span>{" "}
          TOGETHER WITH <span className="">TECHNOLOGY</span>
        </h1>

        {/* Subtext */}
        <p
          className="
          mt-4 
          text-base 
          sm:text-lg 
          md:text-xl 
          lg:text-2xl
          text-gray-200
        "
        >
          A quality printing and promotional product company.
        </p>

        {/* Buttons */}
        <div
          className="
          mt-6 
          flex 
          justify-center 
          items-center 
          gap-4
        "
        >
          <button className="btn btn-primary w-full sm:w-auto">
            Learn More
          </button>
          <button className="btn btn-danger w-full sm:w-auto">
            How it works
          </button>
        </div>
      </motion.div>
    </div>
  );
}
