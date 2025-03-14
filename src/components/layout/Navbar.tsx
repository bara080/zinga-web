"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import ThemeButton from "../form/Button";

interface NavbarProps {
  closeMenu?: () => void;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navbar: React.FC<NavbarProps> = ({ closeMenu }) => {
  const pathname = usePathname();

  return (
    <nav aria-label="Main Navigation" className="h-full">
      <ul className="flex flex-col sm:flex-row p-5 sm:p-0 gap-4 md:gap-8 h-full">
        {navLinks.map(({ href, label }) => (
          <li key={href} className="h-full">
            <Link
              href={href}
              className={clsx(
                "flex sm:inline-flex h-full flex-col text-start sm:items-center justify-center px-2 sm:px-3 py-2 sm:py-0 border-b sm:border-b-2 no-underline font-medium text-xl transition-all duration-300 hover:text-brand",
                pathname === href || (href === "/" && pathname === "/")
                  ? "text-yellow-300  border-b-yellow-300"
                  : "border-b-transparent text-white"
              )}
              onClick={closeMenu}
            >
              {label}
            </Link>
          </li>
        ))}
        <li className="h-full flex flex-col items-center justify-center pb-1">
          <ThemeButton
            size="large"
            variant="primary"
            className="w-full sm:w-auto"
          >
            Join us
          </ThemeButton>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
