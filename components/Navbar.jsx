"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Web Design", href: "/services/web-design" },
      { name: "SEO", href: "/services/seo" },
      { name: "Marketing", href: "/services/marketing" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => pathname === href;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "top-0 bg-black/50 backdrop-blur-md" : "top-[42px] bg-white shadow"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo */}
        <Link href="/">
          <Image
  src="/famelogo.png"
  alt="Logo"
  width={120}
  height={40}
  className="h-8 w-auto"
/>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setDropdownOpen(item.name)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <Link
                href={item.href}
                className={`relative flex items-center gap-1 transition-colors duration-300 ${
                  scrolled ? "text-white" : "text-[var(--color-primary)]"
                } ${
                  isActive(item.href)
                    ? "text-[var(--color-danger)]"
                    : "hover:text-[var(--color-danger)]"
                }`}
              >
                {item.name}

                {/* Active indicator */}
                {isActive(item.href) && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 h-[2px] w-full bg-[var(--color-danger)]"
                  />
                )}

                {item.dropdown && <ChevronDown size={16} />}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {item.dropdown && dropdownOpen === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full mt-2 bg-white shadow-lg rounded-lg p-3 min-w-[180px]"
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2 text-[var(--color-primary)] hover:text-[var(--color-danger)]"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/get-started"
          className="hidden md:block bg-[var(--color-primary)] text-white hover:bg-[var(--color-danger)] px-5 py-2 rounded transition"
        >
          Get Started
        </Link>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className={scrolled ? "text-white" : "text-black"} />
          ) : (
            <Menu className={scrolled ? "text-white" : "text-black"} />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              dragMomentum={false}
              onDragEnd={(e, info) => {
                if (info.offset.x > 80 || info.velocity.x > 500) {
                  setIsOpen(false);
                }
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed top-0 right-0 h-full w-[70%] sm:w-1/2 bg-white/80 backdrop-blur-xl border-l border-white/20 z-50 p-6 shadow-2xl"
            >
              <div className="flex justify-end mb-6">
                <X onClick={() => setIsOpen(false)} className="cursor-pointer" />
              </div>

              <motion.nav
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.08 } },
                }}
                className="flex flex-col gap-6"
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <button
                      onClick={() => {
                        if (item.dropdown) {
                          setMobileDropdown(
                            mobileDropdown === item.name ? null : item.name
                          );
                        } else {
                          setIsOpen(false);
                        }
                      }}
                      className={`flex justify-between w-full text-left text-lg ${
                        isActive(item.href)
                          ? "text-[var(--color-danger)]"
                          : "text-[var(--color-primary)]"
                      }`}
                    >
                      <Link href={item.href}>{item.name}</Link>

                      {item.dropdown && (
                        <ChevronDown
                          className={`transition-transform ${
                            mobileDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>

                    {/* Nested dropdown */}
                    <AnimatePresence>
                      {item.dropdown && mobileDropdown === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="ml-4 mt-2 flex flex-col gap-2 overflow-hidden"
                        >
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="text-sm text-[var(--color-primary)] hover:text-[var(--color-danger)]"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                <Link
                  href="/get-started"
                  onClick={() => setIsOpen(false)}
                  className="bg-[var(--color-primary)] text-white px-5 py-2 rounded mt-4 hover:bg-[var(--color-danger)] transition"
                >
                  Get Started
                </Link>
              </motion.nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}