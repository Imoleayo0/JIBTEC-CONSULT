import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const companyDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "jibtecconsult@gmail.com",
    href: "mailto:jibtecconsult@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 812 156 8635",
    href: "tel:+2348121568635",
  },
  {
    icon: MapPin,
    label: "Office Address",
    value: "Lagos, Nigeria",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday - Friday, 9:00 AM - 5:00 PM",
  },
];

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-card/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Get Started</p>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground mb-4">
            Ready to <span className="italic text-gradient-gold">Discuss</span> Your Project?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Share your enquiry and we will get back to you with the right advisory support.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 md:p-10 rounded-sm bg-card border border-border/50 shadow-card"
          >
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Speak to Us</p>
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Find out more about working with JIBTEC.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Reach out for financial planning, investment advisory, or corporate
              consultancy support. We will route your enquiry to the right advisor.
            </p>

            <div className="space-y-5">
              {companyDetails.map((detail) => (
                <div key={detail.label} className="flex gap-4">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-secondary/70 text-primary">
                    <detail.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground mb-1">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground leading-relaxed">
                        {detail.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.aside>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 p-8 md:p-12 rounded-sm bg-card border border-border/50 shadow-premium"
            >
              <p className="text-2xl font-display font-semibold text-foreground mb-2">Thank You</p>
              <p className="text-muted-foreground">We have received your enquiry and will reach out soon.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-6 p-8 md:p-12 rounded-sm bg-card border border-border/50 shadow-premium"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="first-name" className="text-xs font-medium text-muted-foreground tracking-wide uppercase">First Name*</label>
                <input
                  id="first-name"
                  name="firstName"
                  required
                  type="text"
                  className="px-4 py-3 bg-secondary/50 border border-border/50 rounded-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="First name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="last-name" className="text-xs font-medium text-muted-foreground tracking-wide uppercase">Last Name*</label>
                <input
                  id="last-name"
                  name="lastName"
                  required
                  type="text"
                  className="px-4 py-3 bg-secondary/50 border border-border/50 rounded-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Last name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-medium text-muted-foreground tracking-wide uppercase">Email Address*</label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  className="px-4 py-3 bg-secondary/50 border border-border/50 rounded-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="name@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-xs font-medium text-muted-foreground tracking-wide uppercase">Phone Number (Optional)</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="px-4 py-3 bg-secondary/50 border border-border/50 rounded-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="+234 000 000 0000"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-xs font-medium text-muted-foreground tracking-wide uppercase">Company (Optional)</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="px-4 py-3 bg-secondary/50 border border-border/50 rounded-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Company name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="enquiry-type" className="text-xs font-medium text-muted-foreground tracking-wide uppercase">Select Enquiry*</label>
                <select
                  id="enquiry-type"
                  name="enquiryType"
                  required
                  className="px-4 py-3 bg-secondary/50 border border-border/50 rounded-sm text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select enquiry</option>
                  <option>General Enquiry</option>
                  <option>Business Advisory</option>
                  <option>Technology</option>
                </select>
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-medium text-muted-foreground tracking-wide uppercase">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="px-4 py-3 bg-secondary/50 border border-border/50 rounded-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wide rounded-sm hover:bg-gold-light transition-colors duration-300"
                >
                  Send Enquiry
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
