import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Globe, Sparkles } from "lucide-react";

export default function VisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0A0A15] to-[#0A0A0F]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6B4C7A]/30 to-transparent" />

      {/* Tamil Nadu Map Outline SVG Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <svg viewBox="0 0 400 500" className="w-full max-w-2xl h-auto">
          <path
            d="M200,50 Q250,80 280,120 Q320,180 300,250 Q290,320 260,380 Q230,430 180,460 Q130,480 100,420 Q80,360 90,300 Q95,240 120,180 Q150,100 200,50"
            fill="none"
            stroke="url(#mapGradient)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#FF6B35" />
              <stop offset="100%" stopColor="#6B4C7A" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-[#D4AF37]/10 to-[#FF6B35]/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-[#6B4C7A]/10 to-[#C44536]/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B4C7A]/10 border border-[#6B4C7A]/20 mb-8"
        >
          <Rocket className="w-4 h-4 text-[#6B4C7A]" />
          <span className="text-sm text-[#6B4C7A]">Long-Term Vision</span>
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
        >
          The Default
          <br />
          <span className="gradient-text">Conversational AI Engine</span>
          <br />
          for Tamil Digital Ecosystems
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Starting with Tamil Nadu, we're building the foundational AI infrastructure 
          that will expand into <span className="text-[#FF6B35] font-semibold">multi-dialect Indian vernacular AI infrastructure</span>, 
          powering the next generation of voice-first applications across the subcontinent.
        </motion.p>

        {/* Vision stages */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
        >
          {[
            { label: "Tamil Nadu", icon: "🏛️", active: true },
            { label: "South India", icon: "🌏", active: false },
            { label: "All India", icon: "🇮🇳", active: false },
          ].map((stage, i) => (
            <React.Fragment key={i}>
              <motion.div
                className={`flex items-center gap-3 px-6 py-3 rounded-full ${
                  stage.active 
                    ? 'silk-gradient text-white shadow-lg shadow-[#D4AF37]/20' 
                    : 'glass-card text-gray-400'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-2xl">{stage.icon}</span>
                <span className="font-semibold">{stage.label}</span>
              </motion.div>
              {i < 2 && (
                <div className="hidden md:block w-12 h-px bg-gradient-to-r from-[#D4AF37] to-[#6B4C7A]" />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Stats visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-3 gap-8"
        >
          {[
            { value: "80M", label: "Tamil Speakers" },
            { value: "250M", label: "South Indian Speakers" },
            { value: "1.4B", label: "Total Addressable Market" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex items-center gap-2 text-[#D4AF37]/50">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm italic">கற்றது கைமண் அளவு, கல்லாதது உலகளவு</span>
            <Sparkles className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}