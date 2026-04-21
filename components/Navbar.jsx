"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", id: "home" },
  {
    name: "Services",
    id: "services",
    dropdown: ["Web Design", "SEO", "Marketing"],
  },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [dropdownOpen, setDropdownOpen] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "top-0 bg-black/50" : "top-[40px] bg-white shadow"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <img src="/famelogo.png" alt="Logo" className="h-8" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setDropdownOpen(item.name)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button
                onClick={() => handleScrollTo(item.id)}
                className={`flex items-center gap-1 transition-colors duration-300 ${
                  scrolled
                    ? "text-white"
                    : "text-[var(--color-primary)] cursor-pointer"
                } ${
                  active === item.id
                    ? "text-[var(--color-danger)]"
                    : "hover:text-[var(--color-danger)]"
                }`}
              >
                {item.name}
                {item.dropdown && <ChevronDown size={16} />}
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {item.dropdown && dropdownOpen === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full mt-2 bg-white shadow-lg rounded-lg p-3"
                  >
                    {item.dropdown.map((sub) => (
                      <div
                        key={sub}
                        className="px-4 py-2 hover:text-[var(--color-danger)] cursor-pointer text-[var(--color-primary)]"
                      >
                        {sub}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <button className="hidden md:block bg-primary text-[var(--color-primary)] hover:text-[var(--color-danger)] px-5 py-2 rounded cursor-pointer">
          Get Started
        </button>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className={scrolled ? "text-white" : "text-black"} />
          ) : (
            <Menu className={scrolled ? "text-white" : "text-black"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden px-6 pb-4 ${
              scrolled ? "bg-black/90" : "bg-white"
            }`}
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => handleScrollTo(item.id)}
                    className={`text-left w-full ${
                      scrolled ? "text-white" : "text-[var(--color-primary)]"
                    } ${
                      active === item.id
                        ? "text-[var(--color-danger)]"
                        : "hover:text-[var(--color-danger)]"
                    }`}
                  >
                    {item.name}
                  </button>
                </div>
              ))}
              <button className="bg-primary text-white px-5 py-2 rounded mt-2">
                Get Started
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
