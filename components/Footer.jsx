"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

/* ⚡ Lazy loaded map (STEP 2) */
const CoxsBazarMap = dynamic(() => import("./CoxsBazarMap"), {
  ssr: false,
});

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="relative text-white bg-black/90 backdrop-blur-md"
    >
      {/* SEO Schema (UNCHANGED) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Fame Coxs Bazar",
            url: "https://www.famecoxs.com",
            email: "fame.bd@gmail.com",
            telephone: "+8801629014416",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Peskar Para",
              addressLocality: "Coxs Bazar",
              addressCountry: "BD",
            },
            sameAs: [
              "https://facebook.com/yourpage",
              "https://x.com/yourpage",
              "https://instagram.com/yourpage",
            ],
          }),
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {/* Brand */}
        <motion.div variants={item}>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
            Fame<span className="text-white">.</span>
          </h2>

          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            Fame is a renowned national printing and supplier company in Bangladesh.
          </p>

          <div className="flex flex-wrap gap-3 mt-5">
            <SocialIcon icon={<FaFacebookF />} />
            <SocialIcon icon={<FaXTwitter />} />
            <SocialIcon icon={<FaInstagram />} />
          </div>
        </motion.div>

        {/* Links */}
        <motion.nav variants={item} aria-label="Footer navigation">
          <h3 className="text-lg font-semibold mb-4 text-[var(--color-primary)]">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="#" className="hover:text-[var(--color-primary)]">About Us</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-primary)]">Terms & Conditions</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-primary)]">FAQ</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-primary)]">News & Insights</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-primary)]">Refund Policy</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-primary)]">Team</Link></li>
          </ul>
        </motion.nav>

        {/* Contact */}
        <motion.div variants={item}>
          <h3 className="text-lg font-semibold mb-4 text-[var(--color-primary)]">
            Contact
          </h3>

          <address className="not-italic space-y-4 text-sm text-gray-300">
            <p>
              <span className="text-white font-medium">Address:</span>
              <br />
              Peskar Para, Coxs Bazar, Bangladesh
            </p>

            <p>
              <span className="text-white font-medium">Email:</span>
              <br />
              <a href="mailto:fame.bd@gmail.com" className="hover:text-[var(--color-primary)]">
                fame.bd@gmail.com
              </a>
            </p>

            <p>
              <span className="text-white font-medium">Phone:</span>
              <br />
              <a href="tel:+8801629014416" className="hover:text-[var(--color-primary)]">
                +880 1629 014416
              </a>
            </p>
          </address>
        </motion.div>

        {/* 🗺️ MAP SECTION (ONLY CHANGE MADE) */}
        <motion.div variants={item}>
          <h3 className="text-lg font-semibold mb-4 text-[var(--color-primary)]">
            Our Location
          </h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full h-64 rounded-lg overflow-hidden border border-gray-700"
          >
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                  Loading map...
                </div>
              }
            >
              <CoxsBazarMap />
            </Suspense>
          </motion.div>

          {/* CTA */}
          <a
            href="https://www.google.com/maps/place/Fame+Service/@21.4476747,91.977143,17.31z/data=!4m6!3m5!1s0x30adc9002cbf5cbf:0x5048e97839f807b3!8m2!3d21.4484829!4d91.9803732!16s%2Fg%2F11mcnd3tn0?entry=ttu&g_ep=EgoyMDI2MDQyMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-4 py-2 text-sm rounded-md bg-[var(--color-primary)] text-black hover:bg-[var(--color-danger)] transition"
          >
            Get Directions
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Fame. All rights reserved. Developed by{" "}
            <a
              href="https://www.facebook.com/msadikjowel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-primary)]"
            >
              Aimers Software
            </a>
          </p>

          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link href="#" className="hover:text-[var(--color-primary)]">About</Link>
            <Link href="#" className="hover:text-[var(--color-primary)]">Pricing</Link>
            <Link href="#" className="hover:text-[var(--color-primary)]">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Components ---------------- */

function SocialIcon({ icon }) {
  return (
    <a
      href="#"
      aria-label="social link"
      className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[var(--color-primary)] hover:text-black transition"
    >
      {icon}
    </a>
  );
}