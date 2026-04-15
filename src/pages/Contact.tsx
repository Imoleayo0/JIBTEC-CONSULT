import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Contact = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-16 md:pt-20">
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Contact;
