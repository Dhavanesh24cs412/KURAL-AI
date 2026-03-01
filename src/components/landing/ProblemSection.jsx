import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, XCircle, Zap } from "lucide-react";

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const puzzlePieces = [
    { color: "#D4AF37", delay: 0, x: -100, y: -50, rotate: -15 },
    { color: "#FF6B35", delay: 0.1, x: 100, y: -30, rotate: 20 },
    { color: "#C44536", delay: 0.2, x: -80, y: 50, rotate: 10 },
    { color: "#6B4C7A", delay: 0.3, x: 80, y: 60, rotate: -20 },
    { color: "#D4AF37", delay: 0.4, x: 0, y: -80, rotate: 5 },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Temple architecture inspired divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C44536]/10 border border-[#C44536]/20 mb-6"
            >
              <AlertTriangle className="w-4 h-4 text-[#C44536]" />
              <span className="text-sm text-[#C44536]">The Core Problem</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Tamil AI is
              <br />
              <span className="gradient-text">Fundamentally Broken</span>
            </h2>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Applications demanding Tamil-conversational intelligence lack production-grade, 
              accent-native AI. Existing multilingual models are <span className="text-[#FF6B35] font-semibold">English-first</span> and 
              fail in real-time Tamil-accent interactions, creating trust gaps.
            </p>

            <div className="space-y-4">
              {[
                "English-first models retrofitted for Tamil",
                "Zero accent awareness or dialect support",
                "High latency killing real-time experiences",
                "No conversational context memory",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#C44536]/20 flex items-center justify-center">
                    <XCircle className="w-4 h-4 text-[#C44536]" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual - Puzzle pieces coming together */}
          <motion.div
            className="relative h-96 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#C44536]/10 to-[#FF6B35]/10 rounded-3xl blur-3xl" />
            
            {/* Puzzle pieces */}
            <div className="relative w-64 h-64">
              {puzzlePieces.map((piece, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-20 h-20 rounded-2xl"
                  style={{ backgroundColor: piece.color }}
                  initial={{ 
                    x: piece.x, 
                    y: piece.y, 
                    rotate: piece.rotate,
                    opacity: 0.3 
                  }}
                  animate={isInView ? {
                    x: (i % 3 - 1) * 25,
                    y: Math.floor(i / 3) * 25 - 25,
                    rotate: 0,
                    opacity: 1
                  } : {}}
                  transition={{ 
                    delay: piece.delay,
                    duration: 1.2,
                    type: "spring",
                    stiffness: 100
                  }}
                />
              ))}
              
              {/* Center Zap icon */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#0A0A0F] border-2 border-[#D4AF37] flex items-center justify-center z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.8, type: "spring" }}
              >
                <Zap className="w-8 h-8 text-[#D4AF37]" />
              </motion.div>
            </div>

            {/* Floating question marks */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-4xl text-[#C44536]/20 font-bold"
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${10 + i * 18}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              >
                ?
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}