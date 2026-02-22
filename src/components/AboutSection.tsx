import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative matte-bg">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-sans text-sm tracking-[0.3em] uppercase">
              About Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-8">
              Welcome to{" "}
              <span className="gold-gradient-text">Dr D Academy</span>
            </h2>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed mb-6">
              Dr D Academy is the premier trading institute that provides the best
              online and physical forex market education. It is an initiative for
              the ambitious generation, willing to step forward and achieve
              financial independence.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-8">
              <strong className="text-foreground">
                Trading is often considered a business not suitable for everyone,
                but this is a myth.
              </strong>{" "}
              Our program focuses on teaching long-tested strategies that have
              consistently proven to be profitable across multiple market
              conditions — taught on Deriv using the MT5 platform.
            </p>
            <a
              href="#courses"
              className="inline-block px-8 py-3 border border-primary/40 text-primary font-sans font-medium rounded-lg golden-aura hover:bg-primary/10 transition-all duration-300"
            >
              Explore Programs
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-2xl overflow-hidden matte-card gold-border-glow">
              <img
                src="/Abbas.jpeg"
                alt="Syed Abbas Shah — trading and teaching on MT5"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="matte-card rounded-2xl p-8 golden-aura flex gap-6">
              <img
                src="/Abbass.jpeg"
                alt="Syed Abbas Shah"
                className="w-24 h-24 rounded-full object-cover flex-shrink-0 border-2 border-primary/30"
              />
              <div>
                <h3 className="font-serif text-2xl font-bold mb-2">Syed Abbas Shah</h3>
                <p className="text-primary font-sans text-sm tracking-wide mb-3">
                  CEO, Lead Trader & Instructor — Dr D Academy
>>>>>>> 114e735 (Update branding, CEO info, Deriv referral, contact number - New Logo (NewLogo.png) across navbar, footer, 404 - Hero image opacity increased - Deriv section on home with referral link - CEO: Syed Abbas Shah, images Abbass.jpeg/Abbas.jpeg, Deriv/MT5 - Phone +923369872332 everywhere - Only Syed Abbas Shah named; testimonials anonymized)
>>>>>>> 114e735 (Update branding, CEO info, Deriv referral, contact number - New Logo (NewLogo.png) across navbar, footer, 404 - Hero image opacity increased - Deriv section on home with referral link - CEO: Syed Abbas Shah, images Abbass.jpeg/Abbas.jpeg, Deriv/MT5 - Phone +923369872332 everywhere - Only Syed Abbas Shah named; testimonials anonymized)
                </p>
                <p className="text-muted-foreground font-sans leading-relaxed text-sm">
                  Syed Abbas Shah trades and teaches on Deriv using MetaTrader 5 (MT5). He founded Dr D Academy to give aspiring traders the same disciplined, proven methods he uses — and to protect people from fraud. We educate, monitor, and guide until you trade consistently and confidently.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
