"use client";

import { useState } from "react";
import ThemeButton from "./Button";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter a valid email!");
      return;
    }

    setSuccess(true);
    setEmail("");

    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="max-w-7xl px-4 mx-auto py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
      <div className="w-full sm:w-[27%] flex flex-col gap-3">
        <h3 className="text-3xl font-bold my-0">Newsletter Subscribe!</h3>
        <p className="text-base opacity-70 mb-0">
          Enter your email to stay updated with our latest news and offers.
        </p>
      </div>
      <div className="w-full sm:w-[60%] flex flex-col gap-1 relative">
        <form
          onSubmit={handleSubmit}
          className="flex border border-zinc-400 rounded-full p-1"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 sm:p-4 md:p-5 text-lg md:text-xl bg-transparent text-white focus:outline-none"
          />
          <ThemeButton size="large" variant="primary">
            Subscribe
          </ThemeButton>
        </form>
        {success && (
          <div className="absolute -bottom-8 text-green-400 text-sm">
            🎉 Thank you for subscribing!
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;
