import { motion } from "framer-motion";
import { Banknote, BriefcaseBusiness, Building2, FileText, Landmark, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: BriefcaseBusiness,
    title: "Business Advisory",
    desc: "Practical advisory for companies, project owners, and investors preparing viable opportunities for funding and execution.",
  },
  {
    icon: FileText,
    title: "Business Plan Development",
    desc: "Structured business plans and project documents prepared for investor review, lender engagement, and funding discussions.",
  },
  {
    icon: Building2,
    title: "Infrastructure Project Support",
    desc: "Consulting support across infrastructure, power, construction, real estate, banking, and other viable project sectors.",
  },
  {
    icon: Banknote,
    title: "Business Loan Facilitation",
    desc: "Guidance for clients seeking business loans through credible funding partners and appropriate financial documentation.",
  },
  {
    icon: Landmark,
    title: "Salary Earner Loan Support",
    desc: "Support for eligible salary earners seeking loan access within Nigeria through suitable financing channels.",
  },
  {
    icon: ShieldCheck,
    title: "Instrument-Backed Funding",
    desc: "Funding support involving Bank Guarantees, Confirmed Letters of Credit, Treasury Bills, SBLCs, and related instruments.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">What We Do</p>
        <h2 className="text-3xl md:text-5xl font-display font-semibold mb-4 text-foreground">
          Financial and Business <span className="italic text-gradient-gold">Consulting</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          We help clients prepare strong business cases, engage investors, and
          pursue suitable funding options for viable projects and business needs.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group p-8 rounded-sm bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-card"
          >
            <s.icon className="h-8 w-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg font-display font-semibold text-foreground mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
