import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Solution", href: "#solution" },
    { name: "Use Cases", href: "#usecases" },
    { name: "Pricing", href: "#pricing" },
    { name: "Documentation", href: "#docs" },
  ];

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ background: "#F5E6C4" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap');

        html { scroll-behavior: smooth; }

        body {
          background: #F5E6C4;
          font-family: 'Inter', sans-serif;
        }

        .font-serif-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-crimson { font-family: 'Crimson Text', Georgia, serif; }

        .parchment-bg {
          background: 
            radial-gradient(ellipse at 20% 50%, rgba(106,27,45,0.04) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(199,154,0,0.06) 0%, transparent 50%),
            linear-gradient(160deg, #F5E6C4 0%, #F0DDB0 40%, #EDD9A3 70%, #F5E6C4 100%);
        }

        .parchment-texture::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        .stone-divider {
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #C79A00 20%, #6A1B2D 50%, #C79A00 80%, transparent 100%);
          position: relative;
        }

        .stone-divider::before, .stone-divider::after {
          content: '◆';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          color: #C79A00;
          font-size: 10px;
        }

        .stone-divider::before { left: 15%; }
        .stone-divider::after { right: 15%; }

        .gold-text {
          background: linear-gradient(135deg, #C79A00 0%, #E8B800 40%, #C79A00 70%, #A07800 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-manuscript {
          background: rgba(245, 230, 196, 0.6);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(199, 154, 0, 0.25);
          box-shadow: 0 8px 32px rgba(106, 27, 45, 0.08), inset 0 1px 0 rgba(255,255,255,0.5);
        }

        .glass-manuscript-dark {
          background: rgba(106, 27, 45, 0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(199, 154, 0, 0.2);
          box-shadow: 0 8px 32px rgba(106, 27, 45, 0.1);
        }

        .maroon-glass {
          background: rgba(106, 27, 45, 0.92);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(199, 154, 0, 0.25);
        }

        .kolam-bg {
          background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C79A00' stroke-width='0.4' stroke-opacity='0.12'%3E%3Ccircle cx='40' cy='40' r='30'/%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3Ccircle cx='40' cy='40' r='10'/%3E%3Cpath d='M40,10 L70,40 L40,70 L10,40 Z'/%3E%3Cpath d='M40,20 L60,40 L40,60 L20,40 Z'/%3E%3C/g%3E%3C/svg%3E");
        }

        .btn-primary {
          background: linear-gradient(135deg, #6A1B2D 0%, #8B2439 50%, #6A1B2D 100%);
          color: #F5E6C4;
          border: 1px solid rgba(199, 154, 0, 0.4);
          box-shadow: 0 4px 20px rgba(106,27,45,0.3), inset 0 1px 0 rgba(199,154,0,0.2);
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #8B2439 0%, #A02B44 50%, #8B2439 100%);
          box-shadow: 0 8px 32px rgba(106,27,45,0.4), inset 0 1px 0 rgba(199,154,0,0.3);
          transform: translateY(-1px);
        }

        .btn-secondary {
          background: transparent;
          color: #6A1B2D;
          border: 1.5px solid rgba(106, 27, 45, 0.4);
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: rgba(106, 27, 45, 0.06);
          border-color: #C79A00;
          color: #C79A00;
        }

        .carved-border {
          border: 1px solid rgba(199, 154, 0, 0.3);
          box-shadow: 
            inset 0 0 0 2px rgba(245, 230, 196, 0.5),
            0 2px 8px rgba(106,27,45,0.12);
        }

        .frequency-bar {
          animation: freq-pulse 1.2s ease-in-out infinite;
        }

        @keyframes freq-pulse {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }

        .shimmer {
          background: linear-gradient(90deg, transparent 0%, rgba(199,154,0,0.15) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .inscription-line::before {
          content: '';
          display: inline-block;
          width: 40px;
          height: 1px;
          background: linear-gradient(90deg, #C79A00, transparent);
          margin-right: 12px;
          vertical-align: middle;
        }

        .inscription-line::after {
          content: '';
          display: inline-block;
          width: 40px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #C79A00);
          margin-left: 12px;
          vertical-align: middle;
        }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #F0DDB0; }
        ::-webkit-scrollbar-thumb { background: #6A1B2D; border-radius: 3px; }
      `}</style>

      {/* Sticky Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "maroon-glass" : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.02 }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #C79A00, #E8B800)", boxShadow: "0 2px 12px rgba(199,154,0,0.4)" }}>
              <span className="font-serif-display font-bold text-lg" style={{ color: "#6A1B2D" }}>க</span>
            </div>
            <div>
              <span className={`font-serif-display font-bold text-xl tracking-widest ${scrolled ? "text-[#F5E6C4]" : "text-[#6A1B2D]"}`}>
                KURAL
              </span>
              <div className={`text-xs tracking-widest uppercase ${scrolled ? "text-[#C79A00]" : "text-[#C79A00]"}`}
                style={{ fontFamily: "Inter", letterSpacing: "0.25em", fontSize: "9px", marginTop: "1px" }}>
                Governance AI
              </div>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className={`text-sm font-medium tracking-wide relative group transition-colors duration-300 ${
                  scrolled ? "text-[#F5E6C4]/80 hover:text-[#C79A00]" : "text-[#6A1B2D]/70 hover:text-[#6A1B2D]"
                }`}
                style={{ fontFamily: "Inter" }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C79A00] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              className="px-6 py-2.5 rounded-lg text-sm font-medium btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{ fontFamily: "Inter" }}
            >
              Request Access
            </motion.button>
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: scrolled ? "#F5E6C4" : "#6A1B2D" }}>
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 maroon-glass"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="px-6 py-6 space-y-4">
                {navItems.map((item) => (
                  <button key={item.name} onClick={() => scrollTo(item.href)}
                    className="block w-full text-left text-[#F5E6C4]/80 hover:text-[#C79A00] py-2 text-sm" style={{ fontFamily: "Inter" }}>
                    {item.name}
                  </button>
                ))}
                <button className="w-full py-3 rounded-lg text-sm btn-primary mt-4" style={{ fontFamily: "Inter" }}>
                  Request Access
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {children}
    </div>
  );
}