import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function KuralProblem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const failpoints = [
    "English-first models retrofitted for Tamil",
    "Zero accent or dialect sensitivity",
    "Real-time latency destroying experience",
    "No Tamil conversational memory layer",
    "Culturally blind AI breaking trust",
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F5E6C4 0%, #EDD9A3 50%, #F5E6C4 100%)" }}>
      
      <div className="absolute top-0 left-0 right-0 stone-divider" />

      {/* Stone carving texture left panel */}
      <div className="absolute left-0 top-0 bottom-0 w-2 opacity-20"
        style={{ background: "repeating-linear-gradient(180deg, #C79A00 0px, #C79A00 2px, transparent 2px, transparent 20px)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left — Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Broken glyph visual */}
            <div className="relative h-80 glass-manuscript rounded-3xl carved-border overflow-hidden flex items-center justify-center">
              {/* Fragmented Tamil glyphs */}
              {[
                { char: "அ", x: "15%", y: "20%", rot: -18, opacity: 0.15 },
                { char: "ஆ", x: "65%", y: "10%", rot: 12, opacity: 0.12 },
                { char: "இ", x: "40%", y: "55%", rot: -8, opacity: 0.18 },
                { char: "ஈ", x: "80%", y: "60%", rot: 22, opacity: 0.1 },
                { char: "உ", x: "20%", y: "70%", rot: -5, opacity: 0.14 },
              ].map((g, i) => (
                <motion.div
                  key={i}
                  className="absolute font-serif-display font-bold"
                  style={{
                    left: g.x, top: g.y,
                    rotate: g.rot,
                    fontSize: "clamp(3rem, 6vw, 5rem)",
                    color: "#6A1B2D",
                    opacity: g.opacity,
                  }}
                  animate={{ opacity: [g.opacity, g.opacity * 0.4, g.opacity], rotate: [g.rot, g.rot + 5, g.rot] }}
                  transition={{ duration: 4 + i, repeat: Infinity }}
                >
                  {g.char}
                </motion.div>
              ))}

              {/* Central broken icon */}
              <div className="relative z-10 text-center">
                <motion.div
                  className="w-20 h-20 rounded-2xl mx-auto flex items-center justify-center mb-4"
                  style={{ background: "rgba(106,27,45,0.1)", border: "1.5px solid rgba(106,27,45,0.2)" }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <AlertTriangle className="w-9 h-9" style={{ color: "#6A1B2D", opacity: 0.6 }} />
                </motion.div>
                <p className="font-crimson text-lg italic" style={{ color: "#6A1B2D", opacity: 0.5 }}>
                  Broken Tamil Intelligence
                </p>
              </div>

              {/* Crack lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.12 }}>
                <line x1="0" y1="30%" x2="45%" y2="50%" stroke="#6A1B2D" strokeWidth="1" strokeDasharray="4,6" />
                <line x1="55%" y1="20%" x2="100%" y2="60%" stroke="#6A1B2D" strokeWidth="1" strokeDasharray="4,6" />
                <line x1="20%" y1="90%" x2="70%" y2="55%" stroke="#6A1B2D" strokeWidth="1" strokeDasharray="4,6" />
              </svg>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 mt-12 mb-6 px-4 py-2 rounded-full"
              style={{ background: "rgba(106,27,45,0.08)", border: "1px solid rgba(106,27,45,0.15)" }}>
              <AlertTriangle className="w-4 h-4" style={{ color: "#6A1B2D" }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Inter", color: "#6A1B2D", letterSpacing: "0.2em" }}>
                The Core Problem
              </span>
            </div>

            <h2 className="font-serif-display font-bold mb-6 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#6A1B2D" }}>
              Tamil AI is
              <span className="block italic" style={{ color: "#C79A00" }}>Fundamentally Absent</span>
            </h2>

            <p className="font-crimson text-xl leading-relaxed mb-10"
              style={{ color: "#1E1E1E", opacity: 0.7 }}>
              Applications demanding Tamil-conversational intelligence lack production-grade, accent-native AI. 
              Existing multilingual models are English-first — failing real-time Tamil-accent interactions and creating deep trust gaps.
            </p>

            <div className="space-y-4">
              {failpoints.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{ background: "rgba(106,27,45,0.05)", border: "1px solid rgba(106,27,45,0.1)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#C79A00" }} />
                  <span className="font-crimson text-base" style={{ color: "#1E1E1E", opacity: 0.75 }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}