import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const benefits = [
  {
    title: "Investor-Ready Documentation",
    desc: "We help shape business plans and project documents into clear materials for investors, lenders, and funding partners.",
  },
  {
    title: "Funding Pathway Support",
    desc: "We guide clients toward suitable loan and project funding options based on their business needs and available instruments.",
  },
  {
    title: "Sector-Aware Advisory",
    desc: "Our work spans infrastructure, power, construction, real estate, banking, and other viable project opportunities.",
  },
  {
    title: "Practical Client Guidance",
    desc: "We help clients understand requirements, prepare documentation, and approach funding discussions with greater clarity.",
  },
];

const BenefitsSection = () => (
  <section className="py-20 md:py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Why JIBTEC CONSULT</p>
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground">
          Support That <span className="italic text-gradient-gold">Moves Projects Forward</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group p-8 rounded-sm bg-card border border-border/50 hover:border-primary/30 transition-all duration-500"
          >
            <h3 className="text-lg font-display font-semibold text-foreground mb-3 flex items-center gap-2">
              {b.title}
              <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
