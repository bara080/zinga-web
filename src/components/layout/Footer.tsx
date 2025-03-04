"use client";

import { useState } from "react";
import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/contact", label: "Contact" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.trim() === "") {
      alert("Please enter a valid email!");
      return;
    }

    // Simulate API Call or Logic here
    setSuccess(true);
    setEmail("");

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <footer className="w-full bg-black text-white px-5 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Newsletter Section */}
        <div className="w-full md:w-3/5">
          <h3 className="text-xl font-semibold my-0">Newsletter Subscribe!</h3>
          <p className="mb-6 text-sm opacity-70">
            Enter you email to stay updated with our latest news and offers.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full md:w-2/3 p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-indigo-700"
            >
              Subscribe
            </button>
          </form>

          {success && (
            <p className="mt-4 text-green-400 text-sm">
              🎉 Thank you for subscribing!
            </p>
          )}
        </div>

        {/* Quick Links Section */}
        <div className="w-full md:w-2/5">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            {footerLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:underline opacity-70 hover:opacity-100 transition-all duration-300 hover:underline-offset-4 text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pt-20 text-base opacity-70 text-center">
        Zingaapp © All right reserve
      </div>
    </footer>
  );
};

export default Footer;
