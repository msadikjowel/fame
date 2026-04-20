"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center bg-gray-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-heading font-bold">
            A quality printing company
          </h1>

          <p className="mt-4 text-gray-600">
            We bring design together with technology.
          </p>

          <button className="mt-6 bg-primary text-white px-6 py-3 rounded">
            Learn More
          </button>
        </motion.div>

        <motion.img
          src="/hero.png"
          alt="hero"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
}