"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="w-full bg-zinc-900">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 border-b border-zinc-700 relative z-50 h-full bg-zinc-900">
          {/* Logo */}
          <Link href="/" className="pt-5 pb-4">
            <Image
              src="/logo.svg"
              alt="Zinga"
              width={110}
              height={90}
              priority
              className="invert"
            />
          </Link>

          {/* Desktop Navbar */}
          <div className="hidden md:block h-full">
            <Navbar closeMenu={closeMenu} />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="block md:hidden text-white focus:outline-none relative z-40"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`absolute top-24 left-0 w-full bg-zinc-900/60 backdrop-blur-lg shadow-2xl shadow-white/30 transition-transform duration-300 z-10 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } md:hidden`}
      >
        <Navbar closeMenu={closeMenu} />
      </div>
    </>
  );
};

export default Header;
