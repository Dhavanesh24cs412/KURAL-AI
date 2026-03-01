import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Mic2, Shield, Database } from "lucide-react";

function Counter({ end, suffix, isInView }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    const target = parseInt(end);
    let cur = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const timer = setInterval(() => {
      cur = Math.min(cur + step, target);
      setVal(cur);
      if (cur >= target) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, end]);
  return <span>{val}{suffix}</span>;
}

export default function KuralWhyNow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { icon: TrendingUp, val: "500", suffix: "M+", label: "Vernacular Internet Users", desc: "Explosive growth in regional language adoption", color: "#6A1B2D" },
    { icon: Mic2, val: "75", suffix: "%", label: "Prefer Voice in Tamil", desc: "Indians choose voice over text for regional tasks", color: "#C79A00" },
    { icon: Shield, val: "100", suffix: "+", label: "Govt Digital Schemes", desc: "Digital inclusion accelerating vernacular AI demand", color: "#6A1B2D" },
    { icon: Database, val: "0", suffix: "", label: "Deep Tamil AI Infra", desc: "Tamil lacks any production-grade conversational AI", color: "#C79A00" },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F5E6C4 0%, #F0DDB0 40%, #F5E6C4 100%)" }}>

      <div className="absolute top-0 left-0 right-0 stone-divider" />

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(199,154,0,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(199,154,0,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="inscription-line text-xs mt-10 tracking-widest uppercase mb-6"
            style={{ fontFamily: "Inter", color: "#C79A00", letterSpacing: "0.3em" }}
          >
            Why Tamil-Native AI Is Inevitable
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif-display font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#6A1B2D" }}
          >
            The Window Is
            <span className="italic" style={{ color: "#C79A00" }}> Now</span>
          </motion.h2>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="p-8 rounded-2xl carved-border glass-manuscript text-center group"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform"
                style={{ background: `rgba(${s.color === "#C79A00" ? "199,154,0" : "106,27,45"},0.1)`, border: `1px solid ${s.color}30` }}>
                <s.icon className="w-6 h-6" style={{ color: s.color }} />
              </div>
              <div className="font-serif-display font-black text-4xl md:text-5xl mb-2"
                style={{ color: s.color }}>
                <Counter end={s.val} suffix={s.suffix} isInView={isInView} />
              </div>
              <h3 className="font-serif-display font-semibold text-base mb-2" style={{ color: "#6A1B2D" }}>
                {s.label}
              </h3>
              <p className="font-crimson text-sm" style={{ color: "#1E1E1E", opacity: 0.55 }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative h-2 rounded-full overflow-hidden"
            style={{ background: "rgba(106,27,45,0.1)" }}>
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{ background: "linear-gradient(90deg, #6A1B2D, #C79A00)" }}
              initial={{ width: "0%" }}
              animate={isInView ? { width: "78%" } : {}}
              transition={{ duration: 2.2, delay: 0.7, ease: "easeOut" }}
            />
          </div>
          <div className="flex justify-between mt-3 text-xs" style={{ fontFamily: "Inter", color: "#6A1B2D", opacity: 0.5 }}>
            {["2020", "2022", "2024", "Now →", "2026+"].map(y => (
              <span key={y} className={y === "Now →" ? "font-semibold opacity-100" : ""} style={{ color: y === "Now →" ? "#C79A00" : undefined }}>
                {y}
              </span>
            ))}
          </div>
          <p className="text-center font-crimson text-lg italic mt-6" style={{ color: "#6A1B2D", opacity: 0.6 }}>
            The infrastructure window is open — the first mover owns the ecosystem.
          </p>
        </motion.div>
      </div>

    </section>
  );
}