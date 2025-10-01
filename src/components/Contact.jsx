// src/ContactForm.jsx
import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);

    try {
      const response = await axios.post(
        "https://formspree.io/f/xgvnodyv",
        data,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
        setStatus("Thanks! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 sm:p-8 md:p-10 transition hover:shadow-blue-200">
        {/* Heading */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-500 font-medium text-sm sm:text-base">
            Do you have a question, complaint, or need any help?  
            Feel free to reach out to us.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-zinc-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-zinc-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-zinc-700 font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 cursor-pointer text-white p-3 rounded-lg font-semibold hover:bg-blue-700 active:scale-95 transition transform"
          >
            Send Message
          </button>
        </form>

        {/* Status */}
        {status && (
          <p className="mt-5 text-green-600 text-center text-lg font-medium">
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
