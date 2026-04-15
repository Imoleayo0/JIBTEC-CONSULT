import { motion } from "framer-motion";

const ContactCTA = () => (
  <section className="py-20 md:py-28 bg-card/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Speak to an Advisor</p>
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground mb-5">
          Ready to <span className="italic text-gradient-gold">Plan Your Next Move?</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
          Book a consultation with JIBTEC's advisory team for financial planning,
          investment guidance, or corporate consultancy support.
        </p>
        <a
          href="/contact"
          className="inline-flex px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wide rounded-sm hover:bg-gold-light transition-colors duration-300"
        >
          Contact Us
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContactCTA;
