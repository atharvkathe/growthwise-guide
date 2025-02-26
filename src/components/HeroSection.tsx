
import { motion } from "framer-motion";
import { ArrowRight, Brain, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-background to-accent/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-4xl mx-auto space-y-6"
      >
        <div className="inline-block animate-float">
          <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            AI-Powered Skill Analysis
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
          Discover Your True Potential with AI
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Get personalized insights and actionable strategies to accelerate your professional growth
        </p>

        <div className="flex justify-center mt-8">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white transition-all duration-300 group"
            onClick={() => navigate("/assessment")}
          >
            Start Assessment
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <feature.icon className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const features = [
  {
    title: "AI Analysis",
    description: "Advanced algorithms analyze your skills and identify growth opportunities",
    icon: Brain,
  },
  {
    title: "Personalized Path",
    description: "Get a customized learning journey tailored to your goals",
    icon: Target,
  },
  {
    title: "Real-time Progress",
    description: "Track your improvement with dynamic progress monitoring",
    icon: Zap,
  },
];
