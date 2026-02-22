import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import heroBg from "@/assets/hero-bg.jpg";

const Hero3D = lazy(() => import("@/components/Hero3D"));

const HeroSection = () => {
  const isMobile = useIsMobile();

  const overlay = (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 pt-20">
      {isMobile && (
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl font-bold leading-tight text-white mb-4 md:mb-0"
        >
          Dr D Academy
        </motion.h1>
      )}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4"
      >
        Elite Trading Education – Simplified, Results-Driven.
      </motion.p>
      {isMobile && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-xl mx-auto text-muted-foreground font-sans text-base text-center mb-8"
        >
          Dr D Academy is the premier forex market institute providing simplified,
          results-driven trading education for aspiring traders.
        </motion.p>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: isMobile ? 0.5 : 0.4, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#courses"
          className="px-10 py-4 bg-primary text-primary-foreground font-sans font-semibold rounded-lg transition-all duration-300 hover:brightness-110 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
        >
          Enroll Now
        </a>
        <a
          href="#about"
          className="px-10 py-4 border border-primary/50 text-primary font-sans font-semibold rounded-lg transition-all duration-300 hover:bg-primary/10"
        >
          Learn More
        </a>
      </motion.div>
    </div>
  );

  if (isMobile) {
    return (
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-85" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent/30 to-[hsl(var(--background))]" />
        {overlay}
      </section>
    );
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-85" />
      </div>
      <Suspense
        fallback={
          <div className="absolute inset-0 matte-bg flex items-center justify-center z-[1]">
            <h1 className="font-serif text-5xl font-bold text-white">
              Dr D Academy
            </h1>
          </div>
        }
      >
        <div className="absolute inset-0 z-[1]">
          <Hero3D />
        </div>
      </Suspense>
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-transparent/20 to-[hsl(var(--background))] pointer-events-none" />
      {overlay}
    </section>
  );
};

export default HeroSection;
