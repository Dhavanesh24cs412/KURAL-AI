import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mic, Brain, Volume2, Radio, MessageSquare } from "lucide-react";

export default function KuralSolution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const features = [
    {
      icon: Mic,
      title: "Accent-Adapted Tamil STT",
      desc: "Recognition trained on diverse Tamil accents — Chennai to Madurai, Coimbatore to Tirunelveli.",
      glyph: "க",
    },
    {
      icon: Brain,
      title: "Fine-Tuned Tamil LLM",
      desc: "Conversational intelligence rooted in Tamil cultural context, proverbs, and idiomatic nuance.",
      glyph: "ள",
    },
    {
      icon: Volume2,
      title: "Native Tamil TTS",
      desc: "Natural-sounding Tamil voices — not robotic transliteration, but authentic regional expression.",
      glyph: "ன",
    },
    {
      icon: Radio,
      title: "Streaming API Layer",
      desc: "Real-time, sub-100ms streaming endpoints for seamless live conversation integration.",
      glyph: "ர",
    },
    {
      icon: MessageSquare,
      title: "Multi-Turn Memory",
      desc: "Session-persistent contextual understanding across extended dialogues and workflows.",
      glyph: "ம",
    },
  ];

  return (
    <section ref={ref} id="solution" className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F5E6C4 0%, #F0DDB0 60%, #F5E6C4 100%)" }}>

      <div className="absolute top-0 left-0 right-0 stone-divider" />

      {/* Background kolam */}
      <div className="absolute inset-0 kolam-bg opacity-60 pointer-events-none" />

      {/* Maroon panel accent right */}
      <div className="absolute right-0 top-1/4 w-1 h-1/2 opacity-30"
        style={{ background: "linear-gradient(180deg, transparent, #6A1B2D, transparent)" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="inscription-line text-xs mt-10 tracking-widest uppercase mb-6"
            style={{ fontFamily: "Inter", color: "#C79A00", letterSpacing: "0.3em" }}
          >
            The Strategic Solution
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif-display font-bold leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", color: "#6A1B2D" }}
          >
            Tamil Nadu's Foundational
            <span className="block italic" style={{ color: "#C79A00" }}>Conversational AI Stack</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-crimson text-xl max-w-3xl mx-auto"
            style={{ color: "#1E1E1E", opacity: 0.65 }}
          >
            Not a chatbot. Not just STT or TTS. A Tamil-native Accent-Aware Conversational API Infrastructure Layer — 
            sovereign, scalable, and deeply rooted.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative p-8 rounded-2xl carved-border glass-manuscript cursor-default overflow-hidden"
            >
              {/* Background Tamil glyph watermark */}
              <div className="absolute top-3 right-4 font-serif-display font-black opacity-[0.04] pointer-events-none select-none"
                style={{ fontSize: "6rem", color: "#6A1B2D" }}>
                {f.glyph}
              </div>

              {/* Gold shimmer on hover */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "rgba(199,154,0,0.12)", border: "1px solid rgba(199,154,0,0.25)" }}>
                <f.icon className="w-6 h-6" style={{ color: "#C79A00" }} />
              </div>

              <h3 className="font-serif-display font-semibold text-xl mb-3 group-hover:text-[#C79A00] transition-colors"
                style={{ color: "#6A1B2D" }}>
                {f.title}
              </h3>
              <p className="font-crimson text-base leading-relaxed"
                style={{ color: "#1E1E1E", opacity: 0.65 }}>
                {f.desc}
              </p>

              {/* Bottom gold line */}
              <div className="absolute bottom-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(90deg, transparent, #C79A00, transparent)" }} />
            </motion.div>
          ))}

          {/* API Code Preview Card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-2 p-8 rounded-2xl carved-border overflow-hidden"
            style={{ background: "rgba(30,30,30,0.92)", backdropFilter: "blur(20px)" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#6A1B2D]" />
                <div className="w-3 h-3 rounded-full" style={{ background: "#C79A00" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#F5E6C4", opacity: 0.4 }} />
              </div>
              <span className="text-xs tracking-widest" style={{ fontFamily: "monospace", color: "#C79A00", opacity: 0.6, letterSpacing: "0.15em" }}>
                kural-api.js
              </span>
            </div>
            <pre className="text-sm leading-relaxed overflow-x-auto" style={{ fontFamily: "monospace" }}>
              <code>
                <span style={{ color: "#C79A00" }}>const</span>
                <span style={{ color: "#F5E6C4" }}> response </span>
                <span style={{ color: "#6A8A6A" }}>=</span>
                <span style={{ color: "#C79A00" }}> await </span>
                <span style={{ color: "#F5E6C4" }}>kural</span>
                <span style={{ color: "#C79A00" }}>.</span>
                <span style={{ color: "#E8B800" }}>converse</span>
                <span style={{ color: "#F5E6C4" }}>{"({"}</span>
                {"\n"}
                <span style={{ color: "#F5E6C4" }}>{"  "}</span>
                <span style={{ color: "#C79A00" }}>audio</span>
                <span style={{ color: "#F5E6C4" }}>: </span>
                <span style={{ color: "#8BC98B" }}>tamilAudioStream</span>
                <span style={{ color: "#F5E6C4" }}>,</span>
                {"\n"}
                <span style={{ color: "#F5E6C4" }}>{"  "}</span>
                <span style={{ color: "#C79A00" }}>accent</span>
                <span style={{ color: "#F5E6C4" }}>: </span>
                <span style={{ color: "#E8B800" }}>"madurai"</span>
                <span style={{ color: "#F5E6C4" }}>,</span>
                {"\n"}
                <span style={{ color: "#F5E6C4" }}>{"  "}</span>
                <span style={{ color: "#C79A00" }}>context</span>
                <span style={{ color: "#F5E6C4" }}>: </span>
                <span style={{ color: "#8BC98B" }}>conversationHistory</span>
                {"\n"}
                <span style={{ color: "#F5E6C4" }}>{"})"}</span>
                <span style={{ color: "#6A8A6A" }}>;</span>
              </code>
            </pre>
          </motion.div>
        </div>
      </div>


    </section>
  );
}