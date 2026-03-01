import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Mic2, Shield, Database } from "lucide-react";

function AnimatedCounter({ value, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = parseInt(value);
    const incrementTime = (duration * 1000) / end;
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function WhyNowSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: TrendingUp,
      value: "500",
      suffix: "M+",
      label: "Vernacular Internet Users",
      description: "Vernacular internet use exploding across India",
      color: "#D4AF37",
    },
    {
      icon: Mic2,
      value: "75",
      suffix: "%",
      label: "Voice-First Adoption",
      description: "Indians prefer voice over typing in regional languages",
      color: "#FF6B35",
    },
    {
      icon: Shield,
      value: "100",
      suffix: "+",
      label: "Government Initiatives",
      description: "Digital inclusion programs accelerating vernacular AI",
      color: "#C44536",
    },
    {
      icon: Database,
      value: "0",
      suffix: "",
      label: "Deep Tamil AI Infrastructure",
      description: "Tamil lacks production-grade conversational AI",
      color: "#6B4C7A",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0A0F0A] to-[#0A0A0F]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6B4C7A]/30 to-transparent" />
      
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Why Tamil-Native AI
            <br />
            <span className="gradient-text">Is Inevitable</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            The convergence of market forces creating unprecedented opportunity
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group"
            >
              <div className="h-full p-8 rounded-3xl glass-card border border-white/5 group-hover:border-[#D4AF37]/20 transition-all duration-500">
                {/* Background glow */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ backgroundColor: `${stat.color}10` }}
                />
                
                {/* Icon */}
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${stat.color}15` }}
                >
                  <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>

                {/* Value with animation */}
                <div 
                  className="text-4xl md:text-5xl font-black mb-2"
                  style={{ color: stat.color }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="relative h-2 rounded-full bg-white/5 overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 silk-gradient rounded-full"
              initial={{ width: "0%" }}
              animate={isInView ? { width: "75%" } : {}}
              transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
            />
          </div>
          <div className="flex justify-between mt-4 text-sm text-gray-500">
            <span>2020</span>
            <span>2022</span>
            <span>2024</span>
            <span className="text-[#D4AF37] font-semibold">Now</span>
            <span>2026</span>
          </div>
          <p className="text-center mt-6 text-gray-400">
            The window for establishing Tamil AI infrastructure leadership is <span className="text-[#FF6B35] font-semibold">now</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}