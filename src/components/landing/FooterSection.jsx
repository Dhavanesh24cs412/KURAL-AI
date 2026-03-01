import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github, 
  ArrowRight,
  Send,
  ExternalLink,
  Heart
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function FooterSection() {
  const [email, setEmail] = useState("");
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Thanks for subscribing! We'll keep you updated.");
    setEmail("");
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast.error("Please fill in all fields");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you soon.");
      setContactForm({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const links = {
    product: [
      { name: "Documentation", href: "#docs" },
      { name: "API Reference", href: "#api" },
      { name: "Pricing", href: "#pricing" },
      { name: "Changelog", href: "#changelog" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Blog", href: "#blog" },
      { name: "Careers", href: "#careers" },
      { name: "Press Kit", href: "#press" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
    ],
  };

  return (
    <footer className="relative pt-32 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] to-[#05050A]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      {/* Decorative Kolam pattern */}
      <div className="absolute top-0 left-0 right-0 h-64 kolam-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Left side - Newsletter & Contact */}
          <div>
            {/* Logo & tagline */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl silk-gradient flex items-center justify-center">
                  <span className="text-white font-bold text-xl">K</span>
                </div>
                <span className="text-2xl font-bold gradient-text">KURAL AI</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Tamil Nadu's foundational conversational AI infrastructure, 
                powering the next generation of voice-first applications.
              </p>
            </div>

            {/* Newsletter */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#D4AF37]/50"
                />
                <Button 
                  type="submit"
                  className="silk-gradient text-white px-6"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Contact Form */}
            <div className="p-6 rounded-2xl glass-card border border-[#D4AF37]/10">
              <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <Input
                  placeholder="Your name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                />
                <Textarea
                  placeholder="Your message"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 min-h-[100px]"
                />
                <Button 
                  type="submit" 
                  className="w-full silk-gradient text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>

          {/* Right side - Links */}
          <div className="grid sm:grid-cols-3 gap-8">
            {/* Product Links */}
            <div>
              <h3 className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider mb-4">
                Product
              </h3>
              <ul className="space-y-3">
                {links.product.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {links.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-sm font-semibold text-[#6B4C7A] uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {links.legal.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Founders & Location */}
        <div className="flex flex-col md:flex-row items-center justify-between py-8 border-t border-white/5 mb-8">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>Tamil Nadu, India</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Mail className="w-4 h-4 text-[#FF6B35]" />
              <span>hello@kural.ai</span>
            </div>
          </div>

          <div className="text-gray-400 text-sm">
            Founded by <span className="text-white font-semibold">Dhavanesh V</span> & <span className="text-white font-semibold">Boomesh R K</span>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 border-t border-white/5">
          {/* Social Icons */}
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            {[
              { icon: Twitter, href: "#twitter" },
              { icon: Linkedin, href: "#linkedin" },
              { icon: Github, href: "#github" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>© 2024 KURAL AI. All rights reserved.</span>
            <span className="text-gray-600">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-[#C44536]" /> in Tamil Nadu
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}