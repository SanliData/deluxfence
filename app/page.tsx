import Hero from "@/components/Hero";
import HomeShowcase from "@/components/HomeShowcase";
import WhyAluminum from "@/components/WhyAluminum";
import QuoteCalculator from "@/components/QuoteCalculator";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeShowcase />
      <WhyAluminum />
      <QuoteCalculator />
      <ContactForm />
    </>
  );
}
