
import { motion } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
      </main>
    </div>
  );
};

export default Index;
