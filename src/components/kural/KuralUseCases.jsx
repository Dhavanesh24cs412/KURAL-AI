import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Tractor, Building2, Landmark, Smartphone, ArrowUpRight } from "lucide-react";

export default function KuralUseCases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const cases = [
    {
      icon: GraduationCap,
      title: "EdTech Tamil Tutors",
      desc: "Voice-first learning where the AI speaks Tamil like a teacher from the same village.",
      tamil: "கல்வி",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=350&fit=crop&q=80",
    },
    {
      icon: Tractor,
      title: "Agritech Advisory",
      desc: "Farmers access crop guidance in their own dialect — no English, no barrier.",
      tamil: "விவசாயம்",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500&h=350&fit=crop&q=80",
    },
    {
      icon: Building2,
      title: "Enterprise Automation",
      desc: "Customer service that understands Tamil slang, colloquialisms, and regional quirks.",
      tamil: "வணிகம்",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=350&fit=crop&q=80",
    },
    {
      icon: Landmark,
      title: "Government Engagement",
      desc: "Citizens access public services through natural Tamil voice — inclusive by design.",
      tamil: "அரசு",
      image: "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?w=500&h=350&fit=crop&q=80",
    },
    {
      icon: Smartphone,
      title: "Voice-First Applications",
      desc: "Next-generation apps entirely designed around Tamil voice as the primary interface.",
      tamil: "குரல்",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=350&fit=crop&q=80",
    },
  ];

  return (
    <section ref={ref} id="usecases" className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F5E6C4 0%, #EDD9A3 50%, #F5E6C4 100%)" }}>

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
            Powering Tamil Voice AI
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif-display font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#6A1B2D" }}
          >
            Every Domain.
            <span className="italic" style={{ color: "#C79A00" }}> One Voice.</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer carved-border"
              style={{ minHeight: 300 }}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ opacity: 0.18 }}
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(160deg, rgba(245,230,196,0.95) 0%, rgba(245,230,196,0.8) 50%, rgba(240,221,176,0.9) 100%)" }} />
              </div>

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col justify-between" style={{ minHeight: 300 }}>
                {/* Tamil word watermark */}
                <div className="absolute top-4 right-5 font-serif-display font-black opacity-[0.06] select-none pointer-events-none"
                  style={{ fontSize: "3.5rem", color: "#6A1B2D" }}>
                  {c.tamil}
                </div>

                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "rgba(106,27,45,0.08)", border: "1px solid rgba(106,27,45,0.18)" }}>
                    <c.icon className="w-6 h-6" style={{ color: "#6A1B2D" }} />
                  </div>

                  <h3 className="font-serif-display font-semibold text-xl mb-3 flex items-center gap-2"
                    style={{ color: "#6A1B2D" }}>
                    {c.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#C79A00" }} />
                  </h3>
                  <p className="font-crimson text-base leading-relaxed"
                    style={{ color: "#1E1E1E", opacity: 0.65 }}>
                    {c.desc}
                  </p>
                </div>

                {/* Bottom gold bar */}
                <div className="mt-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(90deg, #C79A00, transparent)" }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}