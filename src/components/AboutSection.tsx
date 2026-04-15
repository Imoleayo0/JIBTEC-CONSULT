import { motion } from "framer-motion";

const stats = [
  { value: "200+", label: "Engagements Delivered" },
  { value: "97%", label: "Client Retention Rate" },
  { value: "15+", label: "Years of Excellence" },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-32 bg-card/30">
    <div className="container">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">About JIBTEC CONSULT</p>
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6 text-foreground leading-tight">
            Financial Guidance for <span className="italic text-gradient-gold">Viable Projects.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            JIBTEC CONSULT works with clients, investors, and corporate entities
            across infrastructure, power, construction, real estate, banking, and
            other project-driven sectors.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We support clients with business advisory, financial planning,
            investor-ready business plans, loan facilitation, and funding
            structures backed by credible financial instruments.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-6"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-6 rounded-sm bg-secondary/50 border border-border/50"
            >
              <p className="text-3xl md:text-4xl font-display font-bold text-gradient-gold mb-2">
                {s.value}
              </p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
