import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    toast.success("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-black px-5 pb-20 pt-32 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
            Get in touch
          </p>

          <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">
            Contact AUREX
          </h1>

          <p className="mt-5 text-base leading-7 text-gray-400 sm:text-lg">
            Have a question about our products or need help? Send us a message
            and our team will get back to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Information */}

          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/3 p-6">
              <Mail size={22} />

              <h2 className="mt-5 text-lg font-medium">Email</h2>

              <p className="mt-2 text-sm text-gray-500">support@aurex.com</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/3 p-6">
              <Phone size={22} />

              <h2 className="mt-5 text-lg font-medium">Phone</h2>

              <p className="mt-2 text-sm text-gray-500">+91 98765 43210</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/3 p-6">
              <MapPin size={22} />

              <h2 className="mt-5 text-lg font-medium">Location</h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Chennai, Tamil Nadu, India
              </p>
            </div>
          </div>

          {/* Contact Form */}

          <motion.form
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/3 p-6 sm:p-8"
          >
            {/* Name */}

            <div>
              <label className="text-sm text-gray-300">Your Name</label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-white/30"
              />

              {errors.name && (
                <p className="mt-2 text-xs text-red-400">{errors.name}</p>
              )}
            </div>

            {/* Email */}

            <div className="mt-5">
              <label className="text-sm text-gray-300">Email Address</label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-white/30"
              />

              {errors.email && (
                <p className="mt-2 text-xs text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Message */}

            <div className="mt-5">
              <label className="text-sm text-gray-300">Message</label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows="6"
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-white/30"
              />

              {errors.message && (
                <p className="mt-2 text-xs text-red-400">{errors.message}</p>
              )}
            </div>

            {/* Submit */}

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-white py-3.5 text-sm font-medium text-black transition hover:bg-gray-200"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </main>
  );
}

export default Contact;
