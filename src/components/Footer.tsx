import logo from "@/assets/logo.png";

const serviceLinks = ["Business Advisory", "Project Funding", "Business Plans", "Loan Support"];

const companyLinks = [
  { label: "About", href: "/#about" },
  { label: "What We Offer", href: "/#offers" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/contact" },
];

const connectLinks = [
  { label: "jibtecconsult@gmail.com", href: "mailto:jibtecconsult@gmail.com" },
  { label: "+234 812 156 8635", href: "tel:+2348121568635" },
];

const Footer = () => (
  <footer className="py-16 border-t border-border/50">
    <div className="container">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-1">
          <img src={logo} alt="JIBTEC CONSULT" className="h-12 w-auto mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Financial and business consulting for clients, investors, and viable projects.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold text-muted-foreground tracking-[0.2em] uppercase mb-4">Services</p>
          <ul className="space-y-2 text-sm">
            {serviceLinks.map((s) => (
              <li key={s}>
                <a href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold text-muted-foreground tracking-[0.2em] uppercase mb-4">Company</p>
          <ul className="space-y-2 text-sm">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold text-muted-foreground tracking-[0.2em] uppercase mb-4">Connect</p>
          <ul className="space-y-2 text-sm">
            {connectLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">(c) 2026 JIBTEC CONSULT. All rights reserved.</p>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <a href="mailto:jibtecconsult@gmail.com" className="hover:text-foreground transition-colors">Privacy Enquiries</a>
          <a href="mailto:jibtecconsult@gmail.com" className="hover:text-foreground transition-colors">Service Enquiries</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
