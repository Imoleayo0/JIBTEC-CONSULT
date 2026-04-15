import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import WhatWeOfferSection from "@/components/WhatWeOfferSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <TrustBar />
    <WhatWeOfferSection />
    <ServicesSection />
    <AboutSection />
    <BenefitsSection />
    <ProcessSection />
    <FAQSection />
    <ContactCTA />
    <Footer />
  </div>
);

export default Index;
