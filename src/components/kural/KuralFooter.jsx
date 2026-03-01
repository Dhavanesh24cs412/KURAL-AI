import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Twitter, Linkedin, Github, ArrowRight, Send, Heart, ExternalLink } from "lucide-react";
import { toast } from "sonner";

export default function KuralFooter() {
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Subscribed! We'll keep you informed.");
    setEmail("");
  };

  const handleContact = (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email || !contact.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      toast.success("Message received. We'll respond shortly.");
      setContact({ name: "", email: "", message: "" });
      setSending(false);
    }, 900);
  };

  const links = {
    product: ["Documentation", "API Reference", "Pricing", "Changelog"],
    company: ["About Us", "Blog", "Careers", "Press Kit"],
    legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  return (
    <footer className="relative pt-32 pb-10 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F5E6C4 0%, #EDD9A3 40%, #E8D090 100%)" }}>

      <div className="absolute top-0 left-0 right-0 stone-divider" />

      {/* Kolam background */}
      <div className="absolute inset-0 kolam-bg opacity-40 pointer-events-none" />

      {/* Left stone carving border */}
      <div className="absolute left-0 top-0 bottom-0 w-2 opacity-20"
        style={{ background: "repeating-linear-gradient(180deg, #C79A00 0px, #C79A00 2px, transparent 2px, transparent 20px)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-2 opacity-20"
        style={{ background: "repeating-linear-gradient(180deg, #C79A00 0px, #C79A00 2px, transparent 2px, transparent 20px)" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Top section */}
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          {/* Left — Brand + Newsletter + Contact */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #C79A00, #E8B800)", boxShadow: "0 2px 16px rgba(199,154,0,0.35)" }}>
                <span className="font-serif-display font-bold text-xl" style={{ color: "#6A1B2D" }}>க</span>
              </div>
              <div>
                <div className="font-serif-display font-bold text-2xl" style={{ color: "#6A1B2D" }}>KURAL AI</div>
                <div className="text-xs tracking-widest uppercase" style={{ fontFamily: "Inter", color: "#C79A00", letterSpacing: "0.2em", fontSize: "9px" }}>
                  Governance AI · Tamil Nadu
                </div>
              </div>
            </div>

            <p className="font-crimson text-lg leading-relaxed mb-8 max-w-sm" style={{ color: "#1E1E1E", opacity: 0.65 }}>
              Tamil Nadu's foundational conversational AI infrastructure — where ancient wisdom meets sovereign governance.
            </p>

            {/* Location & Email */}
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 shrink-0" style={{ color: "#C79A00" }} />
                <span className="font-crimson text-base" style={{ color: "#1E1E1E", opacity: 0.6 }}>Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0" style={{ color: "#C79A00" }} />
                <span className="font-crimson text-base" style={{ color: "#1E1E1E", opacity: 0.6 }}>hello@kural.ai</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mb-10">
              <h3 className="font-serif-display font-semibold text-lg mb-4" style={{ color: "#6A1B2D" }}>Stay Informed</h3>
              <form onSubmit={handleNewsletter} className="flex gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl text-sm outline-none font-crimson"
                  style={{
                    background: "rgba(245,230,196,0.8)",
                    border: "1px solid rgba(199,154,0,0.3)",
                    color: "#1E1E1E",
                    fontFamily: "'Crimson Text', serif",
                  }}
                />
                <motion.button
                  type="submit"
                  className="px-5 py-3 rounded-xl btn-primary flex items-center gap-2 text-sm"
                  style={{ fontFamily: "Inter" }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </div>

            {/* Contact Form */}
            <div className="p-7 rounded-2xl carved-border glass-manuscript">
              <h3 className="font-serif-display font-semibold text-lg mb-5" style={{ color: "#6A1B2D" }}>
                Get in Touch
              </h3>
              <form onSubmit={handleContact} className="space-y-4">
                {["name", "email", "message"].map((field) => (
                  field === "message" ? (
                    <textarea
                      key={field}
                      placeholder="Your message"
                      rows={4}
                      value={contact.message}
                      onChange={(e) => setContact({ ...contact, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                      style={{
                        background: "rgba(245,230,196,0.6)",
                        border: "1px solid rgba(199,154,0,0.25)",
                        color: "#1E1E1E",
                        fontFamily: "'Crimson Text', serif",
                      }}
                    />
                  ) : (
                    <input
                      key={field}
                      type={field === "email" ? "email" : "text"}
                      placeholder={field === "name" ? "Your name" : "Your email"}
                      value={contact[field]}
                      onChange={(e) => setContact({ ...contact, [field]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{
                        background: "rgba(245,230,196,0.6)",
                        border: "1px solid rgba(199,154,0,0.25)",
                        color: "#1E1E1E",
                        fontFamily: "'Crimson Text', serif",
                      }}
                    />
                  )
                ))}
                <motion.button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3.5 rounded-xl text-sm font-medium btn-primary flex items-center justify-center gap-2"
                  style={{ fontFamily: "Inter" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {sending ? "Sending…" : "Send Message"}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </form>
            </div>
          </div>

          {/* Right — Links */}
          <div className="grid sm:grid-cols-3 gap-10 pt-4">
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xs tracking-widest uppercase mb-5 font-semibold"
                  style={{ fontFamily: "Inter", color: "#C79A00", letterSpacing: "0.25em" }}>
                  {category}
                </h3>
                <ul className="space-y-3">
                  {items.map((link) => (
                    <li key={link}>
                      <a href="#"
                        className="group font-crimson text-base flex items-center gap-1 transition-colors hover:opacity-100"
                        style={{ color: "#1E1E1E", opacity: 0.55 }}>
                        {link}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="stone-divider mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Founders */}
          <div className="font-crimson text-base text-center md:text-left" style={{ color: "#1E1E1E", opacity: 0.55 }}>
            Founded by{" "}
            <span className="font-semibold" style={{ color: "#6A1B2D", opacity: 1 }}>Dhavanesh V</span>
            {" & "}
            <span className="font-semibold" style={{ color: "#6A1B2D", opacity: 1 }}>Boomesh R K</span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{
                  background: "rgba(106,27,45,0.07)",
                  border: "1px solid rgba(106,27,45,0.15)",
                  color: "#6A1B2D",
                }}
                whileHover={{ scale: 1.1, y: -2, backgroundColor: "rgba(199,154,0,0.12)", borderColor: "rgba(199,154,0,0.4)" }}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 font-crimson text-sm" style={{ color: "#1E1E1E", opacity: 0.45 }}>
            <span>© 2024 KURAL AI</span>
            <span style={{ color: "#C79A00" }}>·</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 inline" style={{ color: "#6A1B2D" }} /> in Tamil Nadu
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}