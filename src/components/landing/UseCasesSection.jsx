import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  GraduationCap, 
  Tractor, 
  Building2, 
  Landmark, 
  Smartphone,
  ArrowUpRight
} from "lucide-react";

export default function UseCasesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const useCases = [
    {
      icon: GraduationCap,
      title: "EdTech Tamil Tutors",
      description: "Voice-first learning experiences that understand student accents and dialects perfectly",
      gradient: "from-[#D4AF37] to-[#FF6B35]",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
    },
    {
      icon: Tractor,
      title: "Agritech Advisory",
      description: "Voice systems helping farmers access agricultural guidance in their native Tamil",
      gradient: "from-[#FF6B35] to-[#C44536]",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop",
    },
    {
      icon: Building2,
      title: "Enterprise Automation",
      description: "Customer service automation that truly speaks Tamil, handling queries with cultural context",
      gradient: "from-[#C44536] to-[#6B4C7A]",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    },
    {
      icon: Landmark,
      title: "Government Services",
      description: "Citizen engagement platforms enabling voice-first access to public services",
      gradient: "from-[#6B4C7A] to-[#D4AF37]",
      image: "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?w=400&h=300&fit=crop",
    },
    {
      icon: Smartphone,
      title: "Voice-First Apps",
      description: "Next-generation applications built entirely around Tamil voice interaction",
      gradient: "from-[#D4AF37] to-[#6B4C7A]",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section ref={ref} id="usecases" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#100A0F] to-[#0A0A0F]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B35]/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Powering <span className="gradient-text">Tamil Voice AI</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            From education to agriculture, enterprise to government — KURAL AI enables voice-first Tamil experiences everywhere
          </motion.p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={useCase.image} 
                  alt={useCase.title}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-8 h-full min-h-[280px] flex flex-col justify-end">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${useCase.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  {useCase.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {useCase.description}
                </p>

                {/* Hover border effect */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} 
                  style={{
                    borderImage: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to)) 1`,
                  }}
                />
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${useCase.gradient} opacity-10 blur-2xl group-hover:opacity-30 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}