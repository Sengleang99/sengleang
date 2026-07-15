import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import SkillsCloud from "@/components/feature/SkillsCloud";
import WorkSection from "@/components/feature/WorkSection";
import AboutSection from "@/components/feature/AboutSection";
import ContactForm from "@/components/feature/ContactForm";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-hidden">
      {/* Dynamic Aesthetic Background Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-brand-yellow/5 dark:bg-brand-yellow/2.5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-pastel-purple/10 dark:bg-pastel-purple/5 blur-[150px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[10%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-pastel-teal/10 dark:bg-pastel-teal/5 blur-[140px] pointer-events-none -z-10" />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Areas */}
      <main className="flex-grow flex flex-col w-full relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Dynamic Skills Cloud (Floating badges playground) */}
        <SkillsCloud />

        {/* Selected Work Grid */}
        <WorkSection />

        {/* Professional About Section */}
        <AboutSection />

        {/* Secure & Clean Contact Form */}
        <ContactForm />
      </main>
      {/* Simple Premium Footer */}
      <Footer />
    </div>
  );
}
