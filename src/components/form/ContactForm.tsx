"use client";

import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", form);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      <div className="flex flex-row items-start gap-4">
        <div className="flex-1">
          <label htmlFor="name" className="block mb-1 font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-600"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-600"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="topic" className="block mb-1 font-medium">
            Select Topic
          </label>
          <select
            name="topic"
            id="topic"
            value={form.topic}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-600"
          >
            <option value="">-- Select --</option>
            <option value="support">Support</option>
            <option value="inquiry">General Inquiry</option>
            <option value="partnership">Partnership</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block mb-1 font-medium">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-600"
        />
      </div>

      <button
        type="submit"
        className="bg-zinc-900 text-white px-6 py-2 rounded-xl hover:bg-zinc-800 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
