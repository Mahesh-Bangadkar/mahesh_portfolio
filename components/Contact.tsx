import React, { useState } from "react";
import toast from "react-hot-toast";
import { PERSONAL_INFO } from "../constants";
import {
  IconMail,
  IconMapPin,
  IconPhone,
  IconSend,
} from "./Icons";

const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"; // 👈 replace

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.message.trim();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully 🚀");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch {
      toast.error("Network error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
      {/* LEFT INFO */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-6">
          Get In <span className="text-neon-DEFAULT">Touch</span>
        </h2>

        <p className="text-slate-400 mb-8 leading-relaxed">
          I am open to opportunities and collaborations. Feel free to
          reach out — I usually respond quickly.
        </p>

        <div className="space-y-6">
          <InfoItem icon={<IconPhone />} label="Phone" value={PERSONAL_INFO.phone} />
          <InfoItem icon={<IconMail />} label="Email" value={PERSONAL_INFO.email} />
          <InfoItem icon={<IconMapPin />} label="Location" value={PERSONAL_INFO.location} />
        </div>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/91${PERSONAL_INFO.phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-6 py-3 rounded-xl font-semibold bg-green-500 text-black hover:bg-green-400 transition"
        >
          Chat on WhatsApp
        </a>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700"
      >
        <div className="space-y-4">
          <Input
            id="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />

          <Input
            id="email"
            type="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
          />

          <Textarea
            id="message"
            label="Message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Hello, I'd like to talk about..."
          />

          <button
            type="submit"
            disabled={!isFormValid || loading}
            className={`group w-full flex items-center justify-center gap-3 font-bold py-3 rounded-xl transition-all duration-300
              ${
                isFormValid
                  ? "bg-neon-DEFAULT text-neon-dark hover:bg-neon-glow shadow-neon-hover"
                  : "bg-slate-700 text-slate-400 cursor-not-allowed"
              }
              ${loading && "opacity-70"}
            `}
          >
            <IconSend className="w-5 h-5" />
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

/* ---------- Reusable Components ---------- */

const InfoItem = ({ icon, label, value }: any) => (
  <div className="flex items-start gap-4">
    <div className="p-3 bg-slate-800 rounded-lg text-neon-DEFAULT">
      {icon}
    </div>
    <div>
      <h4 className="text-white font-medium">{label}</h4>
      <p className="text-slate-400">{value}</p>
    </div>
  </div>
);

const Input = ({ id, label, ...props }: any) => (
  <div>
    <label className="block text-sm text-slate-300 mb-1">{label}</label>
    <input
      id={id}
      required
      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-neon-DEFAULT focus:ring-1 focus:ring-neon-DEFAULT"
      {...props}
    />
  </div>
);

const Textarea = ({ id, label, ...props }: any) => (
  <div>
    <label className="block text-sm text-slate-300 mb-1">{label}</label>
    <textarea
      id={id}
      required
      rows={4}
      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-neon-DEFAULT focus:ring-1 focus:ring-neon-DEFAULT resize-none"
      {...props}
    />
  </div>
);
