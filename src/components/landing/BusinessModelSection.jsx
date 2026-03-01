import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Building, Wrench, CheckCircle2, ArrowRight } from "lucide-react";

export default function BusinessModelSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pricingTiers = [
    {
      name: "API Usage",
      description: "Pay-as-you-go pricing",
      icon: Zap,
      features: [
        "Per-request billing",
        "All API endpoints",
        "Standard support",
        "Usage dashboard",
      ],
      price: "Usage-based",
      priceNote: "Starting at $0.001/request",
      color: "#D4AF37",
      popular: false,
    },
    {
      name: "Enterprise",
      description: "Subscription licensing",
      icon: Building,
      features: [
        "Unlimited API calls",
        "Dedicated infrastructure",
        "Priority support",
        "SLA guarantees",
        "Custom integrations",
      ],
      price: "Custom",
      priceNote: "Contact for pricing",
      color: "#FF6B35",
      popular: true,
    },
    {
      name: "Custom Fine-Tuning",
      description: "Tailored AI models",
      icon: Wrench,
      features: [
        "Domain-specific training",
        "Custom accent models",
        "Proprietary datasets",
        "Dedicated model instance",
      ],
      price: "Project-based",
      priceNote: "Starting at $10,000",
      color: "#6B4C7A",
      popular: false,
    },
  ];

  return (
    <section ref={ref} id="pricing" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0A10] to-[#0A0A0F]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 mb-6"
          >
            <Building className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-sm text-[#D4AF37]">API Infrastructure for Enterprises</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Simple, <span className="gradient-text">Scalable Pricing</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-4"
          >
            Flexible pricing models designed for startups to enterprises
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-block px-4 py-2 rounded-lg bg-[#FF6B35]/10 border border-[#FF6B35]/20"
          >
            <span className="text-[#FF6B35] font-semibold">Target: 30 enterprise contracts to reach operational break-even</span>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative group ${tier.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full silk-gradient text-white text-sm font-semibold z-10">
                  Most Popular
                </div>
              )}

              <div className={`h-full p-8 rounded-3xl glass-card border transition-all duration-500 ${
                tier.popular 
                  ? 'border-[#FF6B35]/30 hover:border-[#FF6B35]/50' 
                  : 'border-white/5 hover:border-[#D4AF37]/20'
              }`}>
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${tier.color}15` }}
                >
                  <tier.icon className="w-7 h-7" style={{ color: tier.color }} />
                </div>

                {/* Tier info */}
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 mb-6">{tier.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-3xl font-bold" style={{ color: tier.color }}>
                    {tier.price}
                  </span>
                  <p className="text-sm text-gray-500 mt-1">{tier.priceNote}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5" style={{ color: tier.color }} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                    tier.popular 
                      ? 'silk-gradient text-white shadow-lg shadow-[#D4AF37]/20' 
                      : 'glass-card border border-white/10 text-white hover:border-[#D4AF37]/30'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}