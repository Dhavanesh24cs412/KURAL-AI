import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Building, Wrench, CheckCircle2, ArrowRight } from "lucide-react";

export default function KuralPricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const tiers = [
    {
      icon: Zap,
      name: "API Usage",
      tagline: "Pay-as-you-go",
      features: ["Per-request billing", "All API endpoints", "Standard support", "Usage dashboard"],
      price: "Usage-based",
      note: "From $0.001 / request",
      primary: false,
    },
    {
      icon: Building,
      name: "Enterprise",
      tagline: "Subscription licensing",
      features: ["Unlimited API calls", "Dedicated infrastructure", "Priority support 24/7", "SLA guarantees", "Custom integrations"],
      price: "Custom",
      note: "Contact for enterprise pricing",
      primary: true,
    },
    {
      icon: Wrench,
      name: "Fine-Tuning",
      tagline: "Domain-specific models",
      features: ["Domain-specific training", "Custom accent models", "Proprietary datasets", "Dedicated model instance"],
      price: "Project",
      note: "From $10,000 per project",
      primary: false,
    },
  ];

  return (
    <section ref={ref} id="pricing" className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F5E6C4 0%, #EDD9A3 60%, #F5E6C4 100%)" }}>

      <div className="absolute top-0 left-0 right-0 stone-divider" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="inscription-line text-xs mt-10 tracking-widest uppercase mb-6"
            style={{ fontFamily: "Inter", color: "#C79A00", letterSpacing: "0.3em" }}
          >
            API Infrastructure for Enterprises
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif-display font-bold leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#6A1B2D" }}
          >
            Transparent, Scalable
            <span className="italic" style={{ color: "#C79A00" }}> Pricing</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="inline-block px-6 py-2 rounded-full"
            style={{ background: "rgba(199,154,0,0.12)", border: "1px solid rgba(199,154,0,0.3)" }}
          >
            <span className="font-crimson text-base" style={{ color: "#C79A00" }}>
              Target: 30 enterprise contracts → operational break-even
            </span>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative group rounded-2xl p-8 carved-border transition-all duration-500 hover:-translate-y-2 ${
                t.primary ? "" : ""
              }`}
              style={{
                background: t.primary
                  ? "rgba(106,27,45,0.06)"
                  : "rgba(245,230,196,0.7)",
                backdropFilter: "blur(16px)",
                border: t.primary
                  ? "1px solid rgba(199,154,0,0.35)"
                  : "1px solid rgba(199,154,0,0.2)",
                boxShadow: t.primary
                  ? "0 8px 40px rgba(106,27,45,0.12), inset 0 1px 0 rgba(255,255,255,0.4)"
                  : "0 4px 20px rgba(106,27,45,0.06)",
              }}
            >
              {t.primary && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                  style={{ fontFamily: "Inter", background: "linear-gradient(135deg, #6A1B2D, #8B2439)", color: "#F5E6C4", border: "1px solid rgba(199,154,0,0.4)", letterSpacing: "0.2em" }}>
                  Most Selected
                </div>
              )}

              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ background: "rgba(199,154,0,0.12)", border: "1px solid rgba(199,154,0,0.25)" }}>
                <t.icon className="w-7 h-7" style={{ color: "#C79A00" }} />
              </div>

              <h3 className="font-serif-display font-bold text-2xl mb-1" style={{ color: "#6A1B2D" }}>{t.name}</h3>
              <p className="font-crimson text-base italic mb-6" style={{ color: "#1E1E1E", opacity: 0.5 }}>{t.tagline}</p>

              <div className="mb-6 pb-6" style={{ borderBottom: "1px solid rgba(199,154,0,0.2)" }}>
                <span className="font-serif-display font-bold text-3xl gold-text">{t.price}</span>
                <p className="text-xs mt-1" style={{ fontFamily: "Inter", color: "#6A1B2D", opacity: 0.5 }}>{t.note}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {t.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "#C79A00" }} />
                    <span className="font-crimson text-base" style={{ color: "#1E1E1E", opacity: 0.7 }}>{f}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-3.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 ${
                  t.primary ? "btn-primary" : "btn-secondary"
                }`}
                style={{ fontFamily: "Inter", letterSpacing: "0.05em" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}