import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    let animationId;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const draw = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      
      ctx.clearRect(0, 0, width, height);
      
      // Draw animated waves representing Tamil voice/speech
      const waves = 5;
      const colors = [
        "rgba(212, 175, 55, 0.3)",
        "rgba(255, 107, 53, 0.25)",
        "rgba(196, 69, 54, 0.2)",
        "rgba(107, 76, 122, 0.25)",
        "rgba(212, 175, 55, 0.15)",
      ];

      for (let i = 0; i < waves; i++) {
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        
        for (let x = 0; x <= width; x += 5) {
          const y = height / 2 + 
            Math.sin((x * 0.01) + time + (i * 0.5)) * (30 + i * 10) +
            Math.sin((x * 0.02) + time * 1.5 + (i * 0.3)) * (20 + i * 5);
          ctx.lineTo(x, y);
        }
        
        ctx.strokeStyle = colors[i];
        ctx.lineWidth = 3 - (i * 0.3);
        ctx.stroke();
      }

      // Add glowing particles
      for (let i = 0; i < 20; i++) {
        const x = (Math.sin(time * 0.5 + i * 0.5) + 1) * width / 2;
        const y = height / 2 + Math.sin(time + i) * 50;
        const radius = 2 + Math.sin(time * 2 + i) * 1;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 3);
        gradient.addColorStop(0, "rgba(212, 175, 55, 0.8)");
        gradient.addColorStop(1, "rgba(212, 175, 55, 0)");
        
        ctx.beginPath();
        ctx.arc(x, y, radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      time += 0.02;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0F] via-[#1A1020] to-[#0A0A0F]" />
      
      {/* Kolam pattern overlay */}
      <div className="absolute inset-0 kolam-pattern opacity-50" />
      
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#D4AF37]/10 via-[#FF6B35]/5 to-[#6B4C7A]/10 blur-3xl" />
      
      {/* Wave canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute bottom-0 left-0 right-0 h-64 opacity-60"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-sm text-gray-300">Tamil-first architecture from day one</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
        >
          <span className="gradient-text">KURAL AI</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90 mb-6"
        >
          Tamil Native Conversational
          <br />
          <span className="text-[#FF6B35]">Intelligence Infrastructure</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
        >
          To become the default conversational AI engine powering Tamil digital ecosystems
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            className="group relative px-8 py-4 rounded-2xl silk-gradient text-white font-semibold text-lg shadow-2xl shadow-[#D4AF37]/20 overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(212, 175, 55, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Get API Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>

          <motion.button
            className="group px-8 py-4 rounded-2xl glass-card glass-card-hover text-white font-semibold text-lg flex items-center gap-3 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
              <Play className="w-4 h-4 text-[#D4AF37]" />
            </div>
            View Documentation
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "80M+", label: "Tamil Speakers" },
            { value: "<100ms", label: "Latency" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "∞", label: "Scalability" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-[#D4AF37]/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-3 rounded-full bg-[#D4AF37]"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}