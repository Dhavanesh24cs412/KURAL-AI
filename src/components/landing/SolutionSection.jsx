import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Mic, 
  Brain, 
  Volume2, 
  Radio, 
  MessageSquare, 
  CheckCircle2,
  Layers
} from "lucide-react";

export default function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Mic,
      title: "Accent-Adapted Tamil STT",
      description: "Speech recognition trained on diverse Tamil accents from Chennai to Madurai",
      color: "#D4AF37",
    },
    {
      icon: Brain,
      title: "Fine-Tuned Tamil LLM",
      description: "Conversational AI that truly understands Tamil context, idioms, and culture",
      color: "#FF6B35",
    },
    {
      icon: Volume2,
      title: "Native Tamil TTS",
      description: "Natural-sounding Tamil voices that feel authentically local",
      color: "#C44536",
    },
    {
      icon: Radio,
      title: "Streaming API Endpoints",
      description: "Real-time, low-latency streaming for seamless conversations",
      color: "#6B4C7A",
    },
    {
      icon: MessageSquare,
      title: "Multi-Turn Memory",
      description: "Contextual understanding across extended conversations",
      color: "#D4AF37",
    },
  ];

  return (
    <section ref={ref} id="solution" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0A15] to-[#0A0A0F]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      
      {/* Decorative silk pattern */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/5 to-[#6B4C7A]/5 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-gradient-to-tr from-[#FF6B35]/5 to-[#C44536]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 mb-6"
          >
            <Layers className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-sm text-[#D4AF37]">The Strategic Solution</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Tamil Nadu's Foundational
            <br />
            <span className="gradient-text">Conversational AI Stack</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Not a chatbot. Not just STT or TTS. A <span className="text-[#FF6B35] font-semibold">Tamil-native Accent-Aware 
            Conversational API Infrastructure Layer</span>.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group relative"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                e.currentTarget.style.setProperty("--x", `${x}%`);
                e.currentTarget.style.setProperty("--y", `${y}%`);
              }}
            >
              <div className="h-full p-8 rounded-3xl glass-card glass-card-hover ripple-effect transition-all duration-500 relative overflow-hidden">
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), ${feature.color}10, transparent 40%)`,
                  }}
                />
                
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${feature.color}, transparent)` }}
                />
              </div>
            </motion.div>
          ))}

          {/* API Code Preview Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-2 lg:col-span-3"
          >
            <div className="p-8 rounded-3xl glass-card border border-[#D4AF37]/20 overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#C44536]" />
                  <div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm text-gray-500 font-mono">api-example.js</span>
              </div>
              
              <pre className="text-sm md:text-base overflow-x-auto">
                <code className="text-gray-300">
                  <span className="text-[#6B4C7A]">const</span>{" "}
                  <span className="text-[#D4AF37]">response</span>{" "}
                  <span className="text-gray-500">=</span>{" "}
                  <span className="text-[#6B4C7A]">await</span>{" "}
                  <span className="text-[#FF6B35]">kural</span>
                  <span className="text-gray-500">.</span>
                  <span className="text-[#D4AF37]">converse</span>
                  <span className="text-gray-500">({"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#C44536]">audio</span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-green-400">tamilAudioStream</span>
                  <span className="text-gray-500">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#C44536]">accent</span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-green-400">"madurai"</span>
                  <span className="text-gray-500">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#C44536]">context</span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-green-400">conversationHistory</span>
                  {"\n"}
                  <span className="text-gray-500">{"}"});</span>
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}