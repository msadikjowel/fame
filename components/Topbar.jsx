import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="w-full bg-[var(--color-primary)] text-white
                    text-[13px] sm:text-[14px]
                    h-[42px]">

      {/* INNER CONTAINER */}
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-3">

        {/* LEFT */}
        <div className="flex items-center gap-4 leading-none">

          <span className="hidden lg:flex items-center gap-1 hover:text-[var(--color-danger)] transition">
            <FaMapMarkerAlt />
            Peskar Para, Coxs Bazar
          </span>

          <a
            href="tel:+8801888555555"
            className="flex items-center gap-1 hover:text-[var(--color-danger)] transition"
          >
            <FaPhoneAlt />
            <span className="hidden sm:inline">+88 01888-555555</span>
          </a>

          <a
            href="mailto:famebd@gmail.com"
            className="hidden md:flex items-center gap-1 hover:text-[var(--color-danger)] transition"
          >
            <FaEnvelope />
            famebd@gmail.com
          </a>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 leading-none">

          <span className="hidden sm:flex items-center gap-1">
            <MdArrowForward />
            FOLLOW US -
          </span>

          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-danger)] transition flex items-center"
          >
            <FaFacebookF />
          </Link>

          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-danger)] transition flex items-center"
          >
            <FaInstagram />
          </Link>

          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-danger)] transition flex items-center"
          >
            <FaTwitter />
          </Link>

        </div>

      </div>
    </div>
  );
}