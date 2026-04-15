import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What does JIBTEC CONSULT do?",
    a: "We provide financial planning, business advisory, investment guidance, business plan development, and project funding support for individuals, corporate entities, and investors.",
  },
  {
    q: "What sectors do you work with?",
    a: "We work across infrastructure, power, construction, real estate, banking, and other viable project sectors where clients need advisory, funding preparation, or investor-facing documentation.",
  },
  {
    q: "Can you help prepare a business plan for investors?",
    a: "Yes. We assist clients in developing and designing business plans that can be presented to international investors, funding partners, lenders, and project stakeholders.",
  },
  {
    q: "Do you support loan facilitation?",
    a: "Yes. We support clients seeking business loans and salary earner loans within Nigeria, subject to eligibility, documentation, and the requirements of the relevant funding partner.",
  },
  {
    q: "What financial instruments can support funding discussions?",
    a: "Depending on the funding structure, our partners may consider instruments such as Bank Guarantees, Confirmed Letters of Credit, Treasury Bills, SBLCs, and related instruments.",
  },
];

const FAQSection = () => (
  <section className="py-20 md:py-32">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">FAQ</p>
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground">
          Common <span className="italic text-gradient-gold">Questions</span>
        </h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="border border-border/50 rounded-sm px-6 bg-card"
          >
            <AccordionTrigger className="text-sm font-medium text-foreground hover:text-primary hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
