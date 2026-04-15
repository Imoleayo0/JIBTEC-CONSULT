import { motion } from "framer-motion";

const offers = [
  {
    title: "Financial & Business Consulting",
    summary:
      "We work with clients and investors across infrastructure, power, construction, real estate, banking, and other viable project opportunities.",
    points: ["Infrastructure", "Power", "Real Estate"],
  },
  {
    title: "Business Plans for Investors",
    summary:
      "We assist clients in developing and designing business plans prepared for international investors, funding partners, and project stakeholders.",
    points: ["Business Plans", "Investor Readiness", "Project Design"],
  },
  {
    title: "Loan & Project Funding Support",
    summary:
      "We help clients secure business loans and salary earner loans within Nigeria through funders that support credible financial instruments.",
    points: ["Business Loans", "Salary Loans", "Project Funding"],
  },
  {
    title: "Financial Instrument Funding",
    summary:
      "Our funding partners consider loans backed by instruments such as Bank Guarantees, Confirmed Letters of Credit, Treasury Bills, SBLCs, and related instruments.",
    points: ["Bank Guarantees", "Letters of Credit", "SBLC"],
  },
];

const WhatWeOfferSection = () => (
  <section id="offers" className="py-20 md:py-32 bg-card/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">What We Offer</p>
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground">
          Practical <span className="italic text-gradient-gold">Advisory</span> for Serious Projects
        </h2>
        <p className="text-muted-foreground leading-relaxed mt-5">
          JIBTEC CONSULT is a financial and business consultancy working with
          clients and investors to structure, prepare, and fund viable projects.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {offers.map((offer, i) => (
          <motion.div
            key={offer.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex flex-col p-8 rounded-sm bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-card"
          >
            <p className="text-primary text-xs tracking-[0.2em] uppercase mb-4">{offer.title}</p>
            <p className="text-foreground font-medium leading-relaxed mb-6 flex-1">{offer.summary}</p>
            <div className="flex gap-4 pt-4 border-t border-border/50">
              {offer.points.map((point) => (
                <span key={point} className="text-xs font-semibold text-primary">{point}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeOfferSection;
