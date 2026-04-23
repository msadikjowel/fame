"use client";

import Image from "next/image";
import image1 from "../public/printing.webp";
import MotionWrapper from "./MotionWrapper";
import {
  Printer,
  PenTool,
  Package,
  Megaphone,
  BarChart3,
  Handshake
} from "lucide-react";

const iconMap = {
  Printer,
  PenTool,
  Package,
  Megaphone,
  BarChart3,
  Handshake
};

export default function Services() {
  const servicesData = [
    {
      id: 1,
      image: image1,
      icon: "Printer",
      title: "Printing Service",
      description:
        "High quality printing solutions for businesses and individuals.",
      details:
        "Offset and digital printing with premium materials for sharp and durable output.",
      link: "#"
    },
    {
      id: 2,
      image: image1,
      icon: "PenTool",
      title: "Design Service",
      description: "Modern creative design solutions.",
      details:
        "Logos, branding, and marketing visuals tailored to your identity.",
      link: "#"
    },
    {
      id: 3,
      image: image1,
      icon: "Package",
      title: "Packaging",
      description: "Custom product packaging.",
      details:
        "Premium packaging design that increases product value and appeal.",
      link: "#"
    },
    {
      id: 4,
      image: image1,
      icon: "Megaphone",
      title: "Branding",
      description: "Build a strong brand identity.",
      details:
        "Complete branding strategy from visuals to communication tone.",
      link: "#"
    },
    {
      id: 5,
      image: image1,
      icon: "BarChart3",
      title: "Digital Marketing",
      description: "Grow your online presence.",
      details:
        "SEO, ads, and social media campaigns for better reach and conversion.",
      link: "#"
    },
    {
      id: 6,
      image: image1,
      icon: "Handshake",
      title: "Consulting",
      description: "Business growth consulting.",
      details:
        "Strategic guidance to scale and optimize your business.",
      link: "#"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">

      {/* decorative background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[var(--color-primary)] opacity-10 blur-3xl rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-[var(--color-danger)] opacity-10 blur-3xl rounded-full" />
      </div>

      {/* heading */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-16 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          The Services We Provide
        </h2>

        <p className="mt-4 text-gray-600 text-base md:text-lg">
          We deliver professional creative, digital, and business solutions
          tailored to help your brand grow and stand out in the market.
        </p>

        {/* underline accent */}
        <div className="mt-6 flex justify-center">
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-danger)]" />
        </div>
      </div>

      {/* grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6 relative">
        {servicesData.map((service, index) => {
          const Icon = iconMap[service.icon];

          return (
            <MotionWrapper key={service.id} delay={index * 0.1}>
              <div className="tilt-card group relative">

                {/* glass card */}
                <div className="glass p-8 rounded-2xl border border-white/40 backdrop-blur-xl transition-all duration-300">

                  {/* image */}
                  <div className="relative w-full h-44 mb-5 overflow-hidden rounded-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-[var(--color-primary)]">
                      {Icon && <Icon size={26} />}
                    </div>
                    <div className="h-[2px] w-10 rounded-full bg-[var(--color-danger)]" />
                  </div>

                  {/* title */}
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>

                  {/* description */}
                  <p className="text-gray-600 mt-2 text-sm">
                    {service.description}
                  </p>

                  {/* details */}
                  <p className="text-gray-500 mt-2 text-xs line-clamp-2">
                    {service.details}
                  </p>

                  {/* link */}
                  <a
                    href={service.link}
                    className="inline-block mt-5 font-medium text-[var(--color-primary)] hover:text-[var(--color-danger)] transition"
                  >
                    See more →
                  </a>
                </div>
              </div>
            </MotionWrapper>
          );
        })}
      </div>

      {/* styles */}
      <style jsx>{`
        /* real glassmorphism */
        .glass {
          background: rgba(255, 255, 255, 0.6);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        /* 3D tilt */
        .tilt-card {
          perspective: 1200px;
        }

        .glass {
          transform-style: preserve-3d;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .tilt-card:hover .glass {
          transform: rotateX(6deg) rotateY(-6deg) scale(1.03);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.12);
        }
      `}</style>
    </section>
  );
}