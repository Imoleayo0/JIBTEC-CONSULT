import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-[100svh] md:min-h-screen flex items-start md:items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt=""
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-background/60" />

    <div className="container relative z-10 pt-32 pb-16 md:pt-32 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <p className="text-primary font-medium text-xs sm:text-sm tracking-[0.18em] sm:tracking-[0.2em] uppercase mb-5 md:mb-6">
          Strategic Advisory & Consulting
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold leading-[1.1] mb-5 md:mb-6 text-foreground">
          We Build Businesses{" "}
          <span className="text-gradient-gold italic">That Dominate</span>{" "}
          Markets
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-8 md:mb-10 leading-relaxed">
          Financial and business consulting for clients, investors, and viable
          projects across infrastructure, power, construction, real estate, and banking.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/contact"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wide rounded-sm hover:bg-gold-light transition-colors duration-300"
          >
            Contact Us
          </a>
          <a
            href="/#offers"
            className="px-8 py-4 border border-border text-foreground font-medium text-sm tracking-wide rounded-sm hover:border-primary hover:text-primary transition-colors duration-300"
          >
            View What We Offer
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
