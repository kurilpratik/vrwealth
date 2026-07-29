import Future from "../components/sections/Future";
import DarkSection from "../components/sections/home/DarkSection";
import ServicesSection from "../components/sections/home/ServicesSection";
import TestimonialSection from "../components/sections/home/TestimonialSection";
import Hero from "./../components/layout/Hero";
import ChooseUsSection from "../components/sections/home/ChooseUsSection";
import FAQsSection from "../components/sections/home/FAQsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <DarkSection />
        <ServicesSection />
        <TestimonialSection />
        <ChooseUsSection />
        <FAQsSection />
        <Future />
      </main>
    </div>
  );
}
