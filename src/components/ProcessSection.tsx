import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery", desc: "We review the client's business need, project sector, funding goals, and available documentation." },
  { num: "02", title: "Preparation", desc: "We help structure business plans, financial documents, and investor-facing materials for review." },
  { num: "03", title: "Funding Pathway", desc: "We identify suitable loan, investment, or instrument-backed funding routes based on the project profile." },
  { num: "04", title: "Advisory Support", desc: "We guide clients through next steps, partner discussions, documentation updates, and funding requirements." },
];

const ProcessSection = () => (
  <section id="process" className="py-20 md:py-32 bg-card/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Our Process</p>
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground">
          From Enquiry to <span className="italic text-gradient-gold">Funding Readiness</span>
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex gap-6 md:gap-8 relative"
          >
            {i < steps.length - 1 && (
              <div className="absolute left-[23px] top-14 bottom-0 w-px bg-border/50" />
            )}
            <div className="shrink-0 w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center relative z-10 bg-background">
              <span className="text-primary font-display font-bold text-sm">{s.num}</span>
            </div>
            <div className="pb-12">
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
