import { motion } from "framer-motion";
import { ExternalLink, BarChart3, Shield, Smartphone } from "lucide-react";

const DERIV_REFERRAL_URL = "https://track.deriv.com/_BuH5sxlmoxoKqFKZ7JdnQ2Nd7ZgqdRLk/1/";

const DerivSection = () => {
  return (
    <section id="deriv" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-sans text-sm tracking-[0.3em] uppercase">
            Trade with Confidence
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">
            Our Recommended Broker: <span className="gold-gradient-text">Deriv</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground font-sans text-lg leading-relaxed">
            Dr D Academy uses Deriv and MetaTrader 5 (MT5) for live trading and training. Deriv is a regulated broker trusted by millions — trade Forex, CFDs, commodities, and more with tight spreads and zero commission.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { icon: BarChart3, title: "MT5 Platform", text: "Full MetaTrader 5 access — the industry standard for serious traders." },
            { icon: Shield, title: "Regulated & Trusted", text: "Licensed globally; over 20 years in the market, 475,000+ clients." },
            { icon: Smartphone, title: "Trade Anywhere", text: "Web, desktop, and mobile. Start with as little as $5." },
          ].map((item, i) => (
            <div key={item.title} className="glass-dark rounded-xl p-6 golden-aura">
              <item.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={DERIV_REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-sans font-semibold rounded-lg pulse-gold hover:brightness-110 transition-all duration-300 text-lg"
          >
            Open Your Deriv Account <ExternalLink className="w-5 h-5" />
          </a>
          <p className="text-muted-foreground font-sans text-sm mt-4">
            Use our link to sign up — you get the same great platform we use for training.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DerivSection;
