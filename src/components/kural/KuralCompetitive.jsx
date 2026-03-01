import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, XCircle, Crown, Shield, Database, Lock } from "lucide-react";

export default function KuralCompetitive() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const advantages = [
    { icon: Crown, title: "Tamil-First Architecture", desc: "Designed from scratch for Tamil — not an English model with a Tamil skin." },
    { icon: Database, title: "Accent-Specific Datasets", desc: "Proprietary training covering all major Tamil Nadu dialects and accents." },
    { icon: Shield, title: "Infrastructure Positioning", desc: "API layer that powers ecosystems, not just isolated applications." },
    { icon: Lock, title: "High Switching Costs", desc: "Deep integration creates compounding stickiness and recurring value." },
  ];

  const table = [
    { feature: "Tamil-Native Architecture", kural: true, others: false },
    { feature: "Accent Awareness", kural: true, others: false },
    { feature: "Real-Time Streaming", kural: true, others: "Partial" },
    { feature: "Multi-Turn Context", kural: true, others: "Limited" },
    { feature: "Production-Grade SLA", kural: true, others: false },
    { feature: "Tamil Cultural Calibration", kural: true, others: false },
    { feature: "Enterprise Dedicated Infra", kural: true, others: "Varies" },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F5E6C4 0%, #F0DDB0 50%, #F5E6C4 100%)" }}>

      <div className="absolute top-0 left-0 right-0 stone-divider" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="inscription-line text-xs mt-10 tracking-widest uppercase mb-6"
            style={{ fontFamily: "Inter", color: "#C79A00", letterSpacing: "0.3em" }}
          >
            Why KURAL
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif-display font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#6A1B2D" }}
          >
            The Moat Is
            <span className="italic" style={{ color: "#C79A00" }}> Structural</span>
          </motion.h2>
        </div>

        {/* Advantages */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {advantages.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group flex items-start gap-6 p-8 rounded-2xl carved-border glass-manuscript transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "rgba(199,154,0,0.12)", border: "1px solid rgba(199,154,0,0.25)" }}>
                <a.icon className="w-7 h-7" style={{ color: "#C79A00" }} />
              </div>
              <div>
                <h3 className="font-serif-display font-semibold text-xl mb-2 group-hover:text-[#C79A00] transition-colors" style={{ color: "#6A1B2D" }}>
                  {a.title}
                </h3>
                <p className="font-crimson text-base leading-relaxed" style={{ color: "#1E1E1E", opacity: 0.65 }}>
                  {a.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="rounded-2xl overflow-hidden carved-border"
          style={{ background: "rgba(245,230,196,0.6)", backdropFilter: "blur(16px)" }}
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 px-8 py-5"
            style={{ background: "rgba(106,27,45,0.07)", borderBottom: "1px solid rgba(199,154,0,0.2)" }}>
            <span className="font-crimson text-base" style={{ color: "#6A1B2D", opacity: 0.6 }}>Capability</span>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm"
                style={{ background: "linear-gradient(135deg, #6A1B2D, #8B2439)", color: "#F5E6C4", fontFamily: "Inter", border: "1px solid rgba(199,154,0,0.3)" }}>
                <Crown className="w-3 h-3" /> KURAL AI
              </span>
            </div>
            <div className="text-center font-crimson text-base" style={{ color: "#1E1E1E", opacity: 0.5 }}>
              Others
            </div>
          </div>

          <div className="divide-y" style={{ borderColor: "rgba(199,154,0,0.1)" }}>
            {table.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.05 }}
                className="grid grid-cols-3 gap-4 px-8 py-5 hover:bg-white/30 transition-colors"
              >
                <span className="font-crimson text-base" style={{ color: "#1E1E1E", opacity: 0.75 }}>{row.feature}</span>
                <div className="flex justify-center">
                  <CheckCircle2 className="w-5 h-5" style={{ color: "#C79A00" }} />
                </div>
                <div className="flex justify-center">
                  {row.others === true ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : row.others === false ? (
                    <XCircle className="w-5 h-5" style={{ color: "#6A1B2D", opacity: 0.4 }} />
                  ) : (
                    <span className="font-crimson text-sm" style={{ color: "#1E1E1E", opacity: 0.45 }}>{row.others}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 stone-divider" />
    </section>
  );
}