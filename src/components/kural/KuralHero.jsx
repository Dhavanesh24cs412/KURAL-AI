import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mic } from "lucide-react";

function VoiceWaveCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let time = 0;
    let animId;

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w;
      canvas.height = h;
      ctx.clearRect(0, 0, w, h);

      const barCount = Math.floor(w / 6);
      for (let i = 0; i < barCount; i++) {
        const x = (i / barCount) * w;
        const freq = Math.sin(time * 1.8 + i * 0.18) * 0.5
          + Math.sin(time * 0.9 + i * 0.08) * 0.3
          + Math.sin(time * 2.4 + i * 0.35) * 0.2;
        const h_bar = Math.abs(freq) * (h * 0.45) + 4;
        const alpha = 0.25 + Math.abs(freq) * 0.75;

        // Gold frequency bars
        const grad = ctx.createLinearGradient(x, h / 2 - h_bar, x, h / 2 + h_bar);
        grad.addColorStop(0, `rgba(199,154,0,0)`);
        grad.addColorStop(0.3, `rgba(199,154,0,${alpha * 0.8})`);
        grad.addColorStop(0.5, `rgba(232,184,0,${alpha})`);
        grad.addColorStop(0.7, `rgba(199,154,0,${alpha * 0.8})`);
        grad.addColorStop(1, `rgba(199,154,0,0)`);

        ctx.fillStyle = grad;
        ctx.fillRect(x, h / 2 - h_bar, 2.5, h_bar * 2);
      }

      // Maroon center pulse
      const pR = 2 + Math.abs(Math.sin(time * 2)) * 4;
      const pulse = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, 60);
      pulse.addColorStop(0, `rgba(106,27,45,${0.15 + pR * 0.02})`);
      pulse.addColorStop(1, "rgba(106,27,45,0)");
      ctx.fillStyle = pulse;
      ctx.fillRect(0, 0, w, h);

      time += 0.022;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.9 }}
    />
  );
}

export default function KuralHero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden parchment-bg kolam-bg pt-24 pb-16"
    >
      {/* Parchment grain overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E")`,
          opacity: 0.5,
        }}
      />

      {/* Stone-carved decorative arc top */}
      <div className="absolute top-0 left-0 right-0 h-1 stone-divider" />

      {/* Thiruvalluvar silhouette watermark */}
      <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.04]">
        <svg viewBox="0 0 200 320" className="w-40 md:w-64 h-auto" fill="#6A1B2D">
          {/* Stylized sage silhouette */}
          <ellipse cx="100" cy="60" rx="30" ry="36" />
          <path d="M60 120 Q40 180 50 260 Q70 280 100 285 Q130 280 150 260 Q160 180 140 120 Q120 100 100 98 Q80 100 60 120Z" />
          <path d="M50 260 Q30 290 20 320 L60 320 Q70 290 80 270Z" />
          <path d="M150 260 Q170 290 180 320 L140 320 Q130 290 120 270Z" />
          <rect x="86" y="60" width="8" height="80" rx="4" />
          <ellipse cx="90" cy="155" rx="12" ry="18" />
        </svg>
      </div>

      {/* Voice wave visualization */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.7 }}>
        <VoiceWaveCanvas />
      </div>

      {/* Radial light bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(199,154,0,0.08) 0%, rgba(106,27,45,0.03) 50%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Kural couplet badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-block mb-10 mt-3"
        >
          <div className="px-8 py-2 glass-manuscript rounded-full">
            <span className="font-crimson text-base italic" style={{ color: "#6A1B2D", letterSpacing: "0.04em" }}>
              "கற்க கசடறக் கற்பவை கற்றபின் நிற்க அதற்குத் தக"
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-serif-display font-black leading-tight mb-4"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "#6A1B2D", letterSpacing: "-0.02em" }}
        >
          KURAL
          <span className="block font-serif-display font-normal italic text-[0.55em]"
            style={{ color: "#C79A00", letterSpacing: "0.12em" }}>
            Conversational AI
          </span>
        </motion.h1>

        {/* Gold rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="stone-divider my-8 max-w-md mx-auto"
        />

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-crimson text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-4"
          style={{ color: "#1E1E1E", opacity: 0.75 }}
        >
          Tamil-native conversational intelligence infrastructure — powering the next generation of voice-first applications.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="inscription-line text-xs tracking-widest uppercase mb-12"
          style={{ fontFamily: "Inter", color: "#C79A00", letterSpacing: "0.3em" }}
        >
          Made in TamilNadu
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            className="group px-9 py-4 rounded-xl text-base font-medium btn-primary flex items-center gap-3"
            style={{ fontFamily: "Inter", letterSpacing: "0.05em" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Request API Access
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            className="group px-9 py-4 rounded-xl text-base font-medium btn-secondary flex items-center gap-3"
            style={{ fontFamily: "Inter", letterSpacing: "0.05em" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mic className="w-4 h-4" style={{ color: "#C79A00" }} />
            Hear a Demo
          </motion.button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12"
        >
          {[
            { value: "80M+", label: "Tamil Speakers" },
            { value: "<80ms", label: "Response Latency" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "2,000+", label: "Years of Tamil Literature" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.08 }}
              className="text-center carved-border rounded-xl px-4 py-5 glass-manuscript"
            >
              <div className="font-serif-display font-bold text-2xl md:text-3xl gold-text mb-1">{s.value}</div>
              <div className="text-xs tracking-widest uppercase" style={{ fontFamily: "Inter", color: "#6A1B2D", opacity: 0.6, letterSpacing: "0.15em" }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 stone-divider" />


    </section>
  );
}