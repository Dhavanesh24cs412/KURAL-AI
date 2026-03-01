import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Sparkles } from "lucide-react";

export default function KuralVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-40 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #F5E6C4 0%, #EDD9A3 40%, #F5E6C4 100%)" }}>

      <div className="absolute top-0 left-0 right-0 stone-divider" />

      {/* Tamil Nadu map silhouette */}
      <div className="absolute right-0 md:right-12 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.06]">
        <svg viewBox="0 0 300 420" className="w-48 md:w-72 h-auto">
          <path
            d="M150,30 Q200,55 230,100 Q270,165 250,245 Q240,310 215,365 Q185,410 140,425 Q95,430 70,370 Q48,305 55,240 Q62,170 90,110 Q118,55 150,30Z"
            fill="#6A1B2D"
          />
          <path
            d="M150,30 Q200,55 230,100 Q270,165 250,245 Q240,310 215,365 Q185,410 140,425 Q95,430 70,370 Q48,305 55,240 Q62,170 90,110 Q118,55 150,30Z"
            fill="none"
            stroke="#C79A00"
            strokeWidth="1.5"
            strokeDasharray="6,4"
            opacity={0.6}
          />
          {/* Marker dot */}
          <circle cx="150" cy="220" r="8" fill="#C79A00" opacity="0.6" />
          <circle cx="150" cy="220" r="16" fill="none" stroke="#C79A00" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>

      {/* Frequency bars background decoration */}
      <div className="absolute left-0 right-0 bottom-0 h-48 flex items-end justify-center gap-1.5 px-8 overflow-hidden pointer-events-none opacity-10">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="frequency-bar rounded-t-sm"
            style={{
              width: "8px",
              height: `${30 + Math.sin(i * 0.4) * 60 + Math.cos(i * 0.15) * 30}px`,
              background: i % 3 === 0 ? "#6A1B2D" : "#C79A00",
              animationDelay: `${i * 0.04}s`,
              animationDuration: `${1 + (i % 5) * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{ background: "rgba(106,27,45,0.06)", border: "1px solid rgba(106,27,45,0.12)" }}
        >
          <Rocket className="w-4 h-4" style={{ color: "#6A1B2D" }} />
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Inter", color: "#6A1B2D", letterSpacing: "0.2em" }}>
            Long-Term Vision
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif-display font-black leading-tight mb-6"
          style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", color: "#6A1B2D", letterSpacing: "-0.02em" }}
        >
          The Default Engine
          <span className="block italic font-normal" style={{ color: "#C79A00" }}>
            of Tamil Digital Civilization
          </span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="stone-divider my-10 max-w-sm mx-auto"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-crimson text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-16"
          style={{ color: "#1E1E1E", opacity: 0.7 }}
        >
          Starting with Tamil Nadu, KURAL builds the infrastructure backbone that will expand into
          <span className="font-semibold" style={{ color: "#6A1B2D" }}> multi-dialect Indian vernacular AI</span> —
          powering the next generation of voice-first digital life across the subcontinent.
        </motion.p>

        {/* Vision Stages */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 mb-20"
        >
          {[
            { label: "Tamil Nadu", sub: "Phase 1 · Active", icon: "🏛️", active: true },
            { label: "South India", sub: "Phase 2 · 2026", icon: "🌏", active: false },
            { label: "All India", sub: "Phase 3 · 2028", icon: "🇮🇳", active: false },
          ].map((stage, i) => (
            <React.Fragment key={i}>
              <motion.div
                className="relative px-8 py-4 rounded-2xl text-center"
                style={{
                  background: stage.active
                    ? "linear-gradient(135deg, rgba(106,27,45,0.12), rgba(199,154,0,0.08))"
                    : "rgba(245,230,196,0.5)",
                  border: stage.active
                    ? "1.5px solid rgba(199,154,0,0.45)"
                    : "1px solid rgba(106,27,45,0.12)",
                  backdropFilter: "blur(12px)",
                  minWidth: 160,
                  boxShadow: stage.active ? "0 4px 20px rgba(199,154,0,0.12)" : undefined,
                }}
                whileHover={{ scale: 1.04 }}
              >
                <span className="text-3xl mb-2 block">{stage.icon}</span>
                <div className="font-serif-display font-semibold text-base" style={{ color: "#6A1B2D" }}>{stage.label}</div>
                <div className="text-xs mt-0.5" style={{ fontFamily: "Inter", color: stage.active ? "#C79A00" : "#6A1B2D", opacity: 0.55 }}>{stage.sub}</div>
              </motion.div>
              {i < 2 && (
                <div className="hidden md:block w-16 h-px mx-2"
                  style={{ background: "linear-gradient(90deg, #C79A00, rgba(199,154,0,0.2))" }} />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* TAM Numbers */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-16">
          {[
            { val: "80M", label: "Tamil Speakers" },
            { val: "250M", label: "South Indian Languages" },
            { val: "1.4B", label: "Total Addressable Market" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + i * 0.08 }}
              className="text-center"
            >
              <div className="font-serif-display font-bold text-2xl md:text-3xl gold-text mb-1">{s.val}</div>
              <div className="text-xs" style={{ fontFamily: "Inter", color: "#6A1B2D", opacity: 0.5, letterSpacing: "0.1em" }}>{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tamil couplet */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="inline-flex items-center gap-3"
        >
          <Sparkles className="w-4 h-4" style={{ color: "#C79A00" }} />
          <span className="font-crimson text-lg italic" style={{ color: "#6A1B2D", opacity: 0.55 }}>
            கற்றது கைமண் அளவு, கல்லாதது உலகளவு
          </span>
          <Sparkles className="w-4 h-4" style={{ color: "#C79A00" }} />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 stone-divider" />
    </section>
  );
}