import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, XCircle, Crown, Shield, Database, Lock } from "lucide-react";

export default function CompetitiveSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const advantages = [
    {
      icon: Crown,
      title: "Tamil-First Architecture",
      description: "Built from the ground up for Tamil, not retrofitted from English models",
    },
    {
      icon: Database,
      title: "Accent-Specific Datasets",
      description: "Proprietary training data covering Tamil Nadu's diverse accents and dialects",
    },
    {
      icon: Shield,
      title: "Infrastructure Positioning",
      description: "API layer enabling entire ecosystems, not just single applications",
    },
    {
      icon: Lock,
      title: "High Switching Costs",
      description: "Deep integration creates lasting partnerships and recurring revenue",
    },
  ];

  const comparisonData = [
    { feature: "Tamil-Native Architecture", kural: true, others: false },
    { feature: "Accent Awareness", kural: true, others: false },
    { feature: "Real-time Streaming", kural: true, others: "Partial" },
    { feature: "Multi-turn Context", kural: true, others: "Limited" },
    { feature: "Production-Grade SLA", kural: true, others: false },
    { feature: "Enterprise Support", kural: true, others: "Varies" },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#100A0F] to-[#0A0A0F]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C44536]/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Why <span className="gradient-text">KURAL</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            The competitive moat that makes KURAL AI the definitive choice
          </motion.p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {advantages.map((advantage, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-8 rounded-3xl glass-card glass-card-hover"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#FF6B35]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <advantage.icon className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="rounded-3xl glass-card border border-[#D4AF37]/10 overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-b border-white/5">
            <div className="text-gray-400 font-medium">Feature</div>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full silk-gradient text-white font-semibold">
                <Crown className="w-4 h-4" />
                KURAL AI
              </span>
            </div>
            <div className="text-center text-gray-400 font-medium">Others</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-white/5">
            {comparisonData.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                className="grid grid-cols-3 gap-4 p-6 hover:bg-white/[0.02] transition-colors"
              >
                <div className="text-gray-300 font-medium">{row.feature}</div>
                <div className="flex justify-center">
                  {row.kural === true ? (
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  ) : (
                    <span className="text-gray-400">{row.kural}</span>
                  )}
                </div>
                <div className="flex justify-center">
                  {row.others === true ? (
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  ) : row.others === false ? (
                    <XCircle className="w-6 h-6 text-[#C44536]" />
                  ) : (
                    <span className="text-gray-500 text-sm">{row.others}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}