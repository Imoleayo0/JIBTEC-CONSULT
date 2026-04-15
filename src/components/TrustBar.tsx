import { motion } from "framer-motion";

const TrustBar = () => (
  <section className="py-12 md:py-16 border-y border-border/50 bg-card/50">
    <div className="container max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="text-primary text-sm tracking-[0.25em] uppercase mb-4">
          Consultancy Services
        </p>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          We offer comprehensive financial planning and investment advice to
          individuals and corporate entities. We provide expert advice to a wide
          range of clients, in pursuit of helping them achieve the best returns
          on their investment.
        </p>
      </motion.div>
    </div>
  </section>
);

export default TrustBar;
