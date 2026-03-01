import React from "react";
import { motion, useScroll } from "framer-motion";
import KuralHero from "@/components/kural/KuralHero.jsx";
import KuralProblem from "@/components/kural/KuralProblem.jsx";
import KuralSolution from "@/components/kural/KuralSolution.jsx";
import KuralUseCases from "@/components/kural/KuralUseCases.jsx";
import KuralWhyNow from "@/components/kural/KuralWhyNow.jsx";
import KuralPricing from "@/components/kural/KuralPricing.jsx";
import KuralCompetitive from "@/components/kural/KuralCompetitive.jsx";
import KuralVision from "@/components/kural/KuralVision.jsx";
import KuralFooter from "@/components/kural/KuralFooter.jsx";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="overflow-x-hidden" style={{ background: "#F5E6C4" }}>
      {/* Scroll progress — gold line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left"
        style={{
          scaleX: scrollYProgress,
          background: "linear-gradient(90deg, #6A1B2D, #C79A00, #6A1B2D)",
        }}
      />

      <KuralHero />
      <KuralProblem />
      <KuralSolution />
      <KuralUseCases />
      <KuralWhyNow />
      <KuralPricing />
      <KuralCompetitive />
      <KuralVision />
      <KuralFooter />
    </div>
  );
}